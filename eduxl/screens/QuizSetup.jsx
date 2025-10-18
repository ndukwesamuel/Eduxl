import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function QuizSetup() {
    const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffffff",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
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

      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          marginBottom: 15,
        }}
      >
        Available Subjects
      </Text>
      <Text
        style={{
          color: "#888387ff",
        }}
      >
        Test yourself with more than one subject
      </Text>
      <View
        style={{
                  marginTop: 30,
                  flexDirection: "row",
            alignItems: "center"
        }}
      >
        <AntDesign name="book" size={28} color="#05b405ff" />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 2,
            }}
          >
            Agric
          </Text>
          <Text
            style={{
              color: "#888387ff",
            }}
          >
            250 Questions
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          elevation: 2,
          backgroundColor: "#fff",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text>No. of Question</Text>
        <TextInput
          placeholder="40"
          style={{
            width: 50,
            elevation: 2,
            backgroundColor: "#f3f3f3ff",
            textAlign: "center",
            borderRadius: 10,
          }}
        />
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
          style={{
            width: 120,
          }}
        >
          <Picker.Item label="Select Year" value="" />
        </Picker>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          paddingVertical: 15,
          backgroundColor: "#059205ff",
          borderRadius: 50,
          shadowColor: "#d3d2d2ff",
          shadowOffset: { width: 2, height: 1 },
          elevation: 2,
          marginTop: 50,
        }}
        onPress={() => navigation.navigate("DisplayQuiz")}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "800",
            color: "#fff",
          }}
        >
          Procceed
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
