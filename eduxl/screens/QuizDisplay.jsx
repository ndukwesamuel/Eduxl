import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const QuizDisplay = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { subject, year, numQuestions } = route.params || {};

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // ==============================
  // 📦 Load Questions
  // ==============================
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const res = await fetch(
          `https://eduxlbackend.onrender.com/api/getSubjectQuestions`
        );
        const data = await res.json();

        const allQuestions = data.data[0].questionSets.flatMap((set) => {
          return set.questions.map((q) => ({
            id: q._id,
            question: q.question,
            options: [q.option.a, q.option.b, q.option.c, q.option.d],
            correctAnswer: q.answer
              ? q.answer.toLowerCase().charCodeAt(0) - 97
              : -1,
            explanation: q.solution || "",
            examType: q.examtype,
            examYear: q.examyear,
            subject: data.data[0].subject,
          }))
        });
        

        // Filter by subject and year
        let filtered = allQuestions.filter(
          (q) =>
            q.subject?.toLowerCase() === subject.toLowerCase() &&
            q.examYear?.toString() === year.toString()
        );
        

        // Limit to numQuestions
        if (filtered.length > numQuestions) {
          filtered = filtered.slice(0, numQuestions);
        }

        setQuestions(filtered);
      } catch (error) {
        console.error("❌ Error loading questions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [subject, year, numQuestions]);

  const currentQuestion = questions[currentQuestionIndex] || {};
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // ==============================
  // 🔧 Functions
  // ==============================
  const handleSelectAnswer = (index) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: index,
    }));
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
  };

  const getOptionStyle = (index) => {
    const selected = selectedAnswers[currentQuestionIndex];
    return index === selected ? styles.selectedOption : styles.option;
  };

  // ==============================
  // 🧮 Result Logic
  // ==============================
  const calculateResults = () => {
    let score = 0;
    let wrongQuestions = [];

    questions.forEach((q, index) => {
      const userAnswer = selectedAnswers[index];
      if (userAnswer === q.correctAnswer) {
        score++;
      } else {
        wrongQuestions.push({
          ...q,
          userAnswer,
        });
      }
    });

    return { score, total: questions.length, wrongQuestions };
  };

  // ==============================
  // 🖼️ Render
  // ==============================
  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#059205ff" />
        <Text style={styles.loadingText}>Loading questions...</Text>
      </SafeAreaView>
    );
  }

  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          No questions found for {subject} ({year}).
        </Text>
      </SafeAreaView>
    );
  }

  // ==============================
  // 📊 Results Page
  // ==============================
  if (quizCompleted) {
    const { score, total, wrongQuestions } = calculateResults();

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <Text style={styles.resultScore}>
            You scored {score} / {total}
          </Text>

          {wrongQuestions.length > 0 ? (
            <>
              <Text style={styles.sectionTitle}>Questions you missed:</Text>
              {wrongQuestions.map((q, i) => (
                <View key={i} style={styles.explanationCard}>
                  <Text style={styles.questionText}>{q.question}</Text>
                  <Text style={styles.explanationText}>
                    Your Answer:{" "}
                    {q.userAnswer !== undefined
                      ? String.fromCharCode(65 + q.userAnswer)
                      : "No answer selected"}
                  </Text>
                  <Text style={styles.correctText}>
                    Correct Answer: {String.fromCharCode(65 + q.correctAnswer)}
                  </Text>
                  <Text style={styles.explanationText}>
                    Explanation: {q.explanation || "No explanation provided"}
                  </Text>
                </View>
              ))}
            </>
          ) : (
            <Text style={styles.allCorrect}>
              🎉 Perfect! You got all correct!
            </Text>
          )}

          <TouchableOpacity
            style={[styles.button, styles.restartButton]}
            onPress={handleRestart}
          >
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.restartButton]}
            onPress={() =>
              navigation.navigate("QuizSetup", {
                selectedSubjects: [
                  {
                    subject: subject,
                    NoOfQuestions: numQuestions,
                  },
                ],
              })
            }
          >
            <Text style={styles.buttonText}>Back to Quiz Setup Page</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ==============================
  // 🧩 Quiz Question Page
  // ==============================
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#059205ff" />

      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{subject.toUpperCase()} Quiz</Text>
          <Text style={styles.headerMeta}>
            Year: {year} • {questions.length} Questions
          </Text>
        </View>

        {/* Question */}
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options?.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getOptionStyle(index)}
              onPress={() => handleSelectAnswer(index)}
            >
              <Text style={styles.optionLabel}>
                {String.fromCharCode(65 + index)}.
              </Text>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.navButton,
              currentQuestionIndex === 0 && styles.disabledButton,
            ]}
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.navButton,
              selectedAnswers[currentQuestionIndex] == null &&
                styles.disabledButton,
            ]}
            onPress={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] == null}
          >
            <Text style={styles.buttonText}>
              {isLastQuestion ? "Finish Quiz" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ==============================
// 💅 Styles
// ==============================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6", paddingVertical: 25 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  loadingText: { marginTop: 12, fontSize: 16, color: "#374151" },
  content: { flex: 1, padding: 16 },
  header: { marginBottom: 10, alignItems: "center" },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#059205ff" },
  headerMeta: { fontSize: 14, color: "#6b7280" },
  questionCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  questionNumber: { fontSize: 14, color: "#6b7280", marginBottom: 8 },
  questionText: { fontSize: 18, color: "#111827", lineHeight: 26 },
  optionsContainer: { marginBottom: 20 },
  option: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e5e7eb",
  },
  selectedOption: {
    backgroundColor: "#dbeafe",
    borderColor: "#059205ff",
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "700",
    marginRight: 12,
    color: "#374151",
    minWidth: 24,
  },
  optionText: { fontSize: 16, color: "#374151", flex: 1 },
  navigationButtons: { flexDirection: "row", gap: 12 },
  button: { padding: 16, borderRadius: 8, alignItems: "center" },
  navButton: { backgroundColor: "#059205ff", flex: 1 },
  restartButton: { backgroundColor: "#16a34a", marginTop: 20 },
  disabledButton: { backgroundColor: "#9ca3af", opacity: 0.6 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },

  // Results Styles
  resultTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#059205ff",
    marginBottom: 10,
  },
  resultScore: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#374151",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  explanationCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#f59e0b",
    marginBottom: 15,
  },
  explanationText: { fontSize: 14, color: "#78350f", lineHeight: 20 },
  correctText: { fontSize: 14, color: "#16a34a", marginBottom: 6 },
  allCorrect: {
    fontSize: 16,
    color: "#16a34a",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default QuizDisplay;
