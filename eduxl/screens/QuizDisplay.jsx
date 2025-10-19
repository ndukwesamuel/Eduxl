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
  useWindowDimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const QuizDisplay = () => {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { subject, year, numQuestions } = route.params || {};

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  

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

        const allQuestions = data.data[0].questionSets.flatMap((set) =>
          set.questions.map((q) => ({
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
        );
 

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
    if (!showAnswer) setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const getOptionStyle = (index) => {
    if (!showAnswer) {
      return index === selectedAnswer ? styles.selectedOption : styles.option;
    }
    if (index === currentQuestion.correctAnswer) return styles.correctOption;
    if (index === selectedAnswer && index !== currentQuestion.correctAnswer)
      return styles.wrongOption;
    return styles.option;
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
              disabled={showAnswer}
            >
              <Text style={styles.optionLabel}>
                {String.fromCharCode(65 + index)}.
              </Text>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explanation */}
        {showAnswer && (
          <View style={styles.explanationCard}>
            <Text style={styles.explanationTitle}>
              {selectedAnswer === currentQuestion.correctAnswer
                ? "✓ Correct!"
                : "✗ Wrong!"}
            </Text>
            <Text style={styles.explanationText}>
              {currentQuestion.explanation}
            </Text>
          </View>
        )}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {!showAnswer ? (
            <TouchableOpacity
              style={[
                styles.button,
                styles.checkButton,
                selectedAnswer === null && styles.disabledButton,
              ]}
              onPress={handleCheckAnswer}
              disabled={selectedAnswer === null}
            >
              <Text style={styles.buttonText}>Check Answer</Text>
            </TouchableOpacity>
          ) : (
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

              {!isLastQuestion ? (
                <TouchableOpacity
                  style={[styles.button, styles.navButton]}
                  onPress={handleNextQuestion}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.button, styles.restartButton]}
                  onPress={handleRestart}
                >
                  <Text style={styles.buttonText}>Restart</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 💅 Styles
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
  correctOption: {
    backgroundColor: "#dcfce7",
    borderColor: "#16a34a",
  },
  wrongOption: {
    backgroundColor: "#fee2e2",
    borderColor: "#dc2626",
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "700",
    marginRight: 12,
    color: "#374151",
    minWidth: 24,
  },
  optionText: { fontSize: 16, color: "#374151", flex: 1 },
  explanationCard: {
    backgroundColor: "#fef3c7",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#f59e0b",
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#92400e",
    marginBottom: 8,
  },
  explanationText: { fontSize: 14, color: "#78350f", lineHeight: 20 },
  buttonContainer: { marginBottom: 20 },
  button: { padding: 16, borderRadius: 8, alignItems: "center" },
  checkButton: { backgroundColor: "#059205ff" },
  navButton: { backgroundColor: "#059205ff", flex: 1 },
  restartButton: { backgroundColor: "#16a34a", flex: 1 },
  disabledButton: { backgroundColor: "#9ca3af", opacity: 0.6 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
  navigationButtons: { flexDirection: "row", gap: 12 },
});

export default QuizDisplay;
