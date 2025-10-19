import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import subjectYearList from "../../Redux/Eduxl/subjectYearListSlice"; // API call to get years & questions

export default function QuizSetup() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedSubjects } = route.params || {}; // coming from DisplayAvaliableSubject

  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState("");

  useEffect(() => {
    const loadYears = async () => {
      if (selectedSubjects && selectedSubjects.length > 0) {
        const subjectName = selectedSubjects[0].subject; // handle first subject for now
        const yearData = await subjectYearList(subjectName);
        setYears(yearData);
      }
      setLoading(false);
    };

    loadYears();
  }, []);

  // 🔹 When user selects a year, set both selectedYear and questionCount automatically
  const handleYearChange = (itemValue) => {
    setSelectedYear(itemValue);
    const selected = years.find((y) => y.year === itemValue);
    if (selected) {
      setQuestionCount(selected.noOfQuestions.toString());
    } else {
      setQuestionCount("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back and Add buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>{"+"}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Available Subjects</Text>
      <Text style={{ color: "#888387ff" }}>
        Test yourself with more than one subject
      </Text>

      {/* Show the selected subject */}
      {selectedSubjects && selectedSubjects.length > 0 && (
        <View style={styles.subjectRow}>
          <AntDesign name="book" size={28} color="#05b405ff" />
          <View>
            <Text style={styles.subjectTitle}>
              {selectedSubjects[0].subject}
            </Text>
            <Text style={{ color: "#888387ff" }}>
              {selectedSubjects[0].NoOfQuestions} Total Questions
            </Text>
          </View>
        </View>
      )}

      {/* Question count input and Year picker */}
      <View style={styles.inputRow}>
        <Text>No. of Questions</Text>
        <TextInput
          placeholder="40"
          keyboardType="numeric"
          value={String(questionCount)}
          onChangeText={(text) => setQuestionCount(text)}
          style={styles.input}
        />

        <Picker
          selectedValue={selectedYear}
          onValueChange={handleYearChange}
          style={styles.picker}
        >
          <Picker.Item label="Select Year" value="" />
          {years.map((item, index) => (
            <Picker.Item
              key={index}
              label={`${item.year} (${item.noOfQuestions} Qs)`}
              value={item.year}
            />
          ))}
        </Picker>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={[
          styles.proceedBtn,
          { backgroundColor: selectedYear ? "#059205ff" : "#9ca3af" },
        ]}
        disabled={!selectedYear}
        onPress={() =>
          navigation.navigate("DisplayQuiz", {
            subject: selectedSubjects[0].subject,
            year: selectedYear,
            numQuestions: questionCount,
          })
        }
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navButton: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#059205ff",
    marginBottom: 8,
  },
  navButtonText: {
    fontSize: 20,
    color: "#059205ff",
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 15,
  },
  subjectRow: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 2,
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    elevation: 2,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    width: 60,
    elevation: 2,
    backgroundColor: "#f3f3f3ff",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 6,
  },
  picker: {
    width: 150,
  },
  proceedBtn: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 50,
    shadowColor: "#d3d2d2ff",
    shadowOffset: { width: 2, height: 1 },
    elevation: 2,
    marginTop: 50,
  },
  proceedText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },
});
