import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from "react-native";
// import RenderHtml from "react-native-render-html";

const QuizDisplay = () => {
  const { width } = useWindowDimensions();

  // ==============================
  // 🧠 States
  // ==============================
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // ==============================
  // 📦 Load Questions
  // ==============================
  useEffect(() => {
    setQuestions(getFallbackQuestions());
  }, []);

  const currentQuestion = questions[currentQuestionIndex] || {};
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // ==============================
  // 🔧 Functions
  // ==============================
  const getFallbackQuestions = () => [
    {
      id: 1,
      question:
        "Choose the option that best completes the sentence: The principal was _____ by the students' poor performance.",
      options: [
        "disappointed",
        "disappointing",
        "disappointment",
        "disappoint",
      ],
      correctAnswer: 0,
      explanation:
        "'Disappointed' is the correct past participle form used to describe the principal's feeling.",
    },
    {
      id: 2,
      question: "Choose the word that is opposite in meaning to 'TIMID':",
      options: ["Shy", "Bold", "Quiet", "Gentle"],
      correctAnswer: 1,
      explanation:
        "'Bold' means confident and courageous, which is the opposite of timid (fearful/shy).",
    },
    {
      id: 3,
      question: "Choose the option nearest in meaning to 'METICULOUS':",
      options: ["Careless", "Fast", "Careful", "Lazy"],
      correctAnswer: 2,
      explanation:
        "'Meticulous' means showing great attention to detail, very careful and precise.",
    },
    {
      id: 4,
      question:
        "Choose the option that best completes the sentence: Neither the teacher nor the students _____ present at the meeting.",
      options: ["was", "were", "is", "are"],
      correctAnswer: 1,
      explanation:
        "With 'neither...nor', the verb agrees with the subject closer to it. 'Students' is plural, so we use 'were'.",
    },
    {
      id: 5,
      question:
        "Choose the option that best completes the sentence: If I _____ you, I would accept the offer.",
      options: ["am", "was", "were", "will be"],
      correctAnswer: 2,
      explanation:
        "In conditional sentences (hypothetical situations), we use 'were' for all subjects, not 'was'.",
    },
  ];

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

  // const hasHtmlTags = (text) => /<\/?[a-z][\s\S]*>/i.test(text);

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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#059205ff" />

      <ScrollView style={styles.content}>
        {/* Question */}
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion.id} of {questions.length}
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
            {/* {hasHtmlTags(currentQuestion.explanation) ? ( */}
            {/* <RenderHtml */}
            {/* contentWidth={width - 64} */}
            {/* source={{ html: currentQuestion.explanation }} */}
            {/* tagsStyles={{ */}
            {/* body: { fontSize: 14, color: "#78350f", lineHeight: 20 }, */}
            {/* p: { marginVertical: 2 }, */}
            {/* }} */}
            {/* /> */}
            {/* ) : ( */}
            {/* <Text style={styles.explanationText}> */}
            {/* {currentQuestion.explanation} */}
            {/* </Text> */}
            {/* )} */}
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

// ==============================
// 💅 Styles
// ==============================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingVertical: 25,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  questionCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  questionNumber: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
    fontWeight: "600",
  },
  questionText: {
    fontSize: 18,
    color: "#111827",
    lineHeight: 26,
  },
  optionsContainer: {
    marginBottom: 20,
  },
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
  optionText: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
  },
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
  explanationText: {
    fontSize: 14,
    color: "#78350f",
    lineHeight: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  checkButton: {
    backgroundColor: "#059205ff",
  },
  navButton: {
    backgroundColor: "#059205ff",
    flex: 1,
  },
  restartButton: {
    backgroundColor: "#16a34a",
    flex: 1,
  },
  disabledButton: {
    backgroundColor: "#9ca3af",
    opacity: 0.6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  navigationButtons: {
    flexDirection: "row",
    gap: 12,
  },
});

export default QuizDisplay;
