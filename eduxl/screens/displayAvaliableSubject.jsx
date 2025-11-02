import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import subjectList from "../../Redux/Eduxl/subjectsSlice";
import AntDesign from "@expo/vector-icons/AntDesign";

const DisplayAvaliableSubject = () => {
  const navigation = useNavigation();
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const list = await subjectList();
        setSubjects(list || []);
      } catch (error) {
        console.error("Error loading subjects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) => {
      const exists = prev.find((s) => s.subject === subject.subject);
      if (exists) {
        return prev.filter((s) => s.subject !== subject.subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedSubjects.some((s) => s.subject === item.subject);
    return (
      <TouchableOpacity
        onPress={() => toggleSubject(item)}
        activeOpacity={0.8}
        style={[
          styles.item,
          { backgroundColor: isSelected ? "#bbabab9f" : "#fff" },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="book" size={28} color="#05b405ff" />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {item.subject}
            </Text>
            <Text style={{ color: "#555" }}>
              {item.NoOfQuestions} Questions
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: isSelected ? "#fff" : "#05b405ff",
            backgroundColor: isSelected ? "#05b405ff" : "#c7c5c5ff",
            fontSize: 15,
            fontWeight: "900",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
          }}
        >
          {isSelected ? "Selected" : "Setup"}
        </Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#05b405ff" />
        <Text style={{ marginTop: 8 }}>Loading Subjects...</Text>
      </SafeAreaView>
    );
  }

  const canProceed = selectedSubjects.length > 0;

  return (
    <SafeAreaView style={styles.container}>
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
              {/* <TouchableOpacity style={styles.navButton} */}
              {/* onPress={() => navigation.g} */}
              {/* > */}
                {/* <Text style={styles.navButtonText}>{"+"}</Text> */}
              {/* </TouchableOpacity> */}
            </View>
      {/* Floating Continue Button (disabled if no selection) */}
      <TouchableOpacity
        style={[
          styles.fab,
          { backgroundColor: canProceed ? "#059205ff" : "#9ca3af" },
        ]}
        onPress={() => {
          if (!canProceed) return; // guard (no-op)
          navigation.navigate("QuizSetup", { selectedSubjects });
        }}
        activeOpacity={canProceed ? 0.8 : 1}
        disabled={!canProceed}
      >
        <Entypo name="check" size={24} color="white" />
      </TouchableOpacity>

      <View style={{ paddingHorizontal: 5, marginTop: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>
          Available Subjects
        </Text>
        <Text style={{ marginTop: 6 }}>
          Select at least one subject to continue.
        </Text>

        <FlatList
          data={subjects}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 20 }}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 40 }}>
              No subjects available.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfcff",
    paddingHorizontal: 10,
    paddingVertical: 40,
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 4,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 14,
    borderRadius: 15,
    elevation: 3,
  },
});

export default DisplayAvaliableSubject;
