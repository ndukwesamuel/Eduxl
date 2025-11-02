import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const RadioButton = ({ item, isSelected, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container(isSelected)}>
      <Pressable style={styles.radioButton(isSelected)}></Pressable>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="book" size={28} color="#05b405ff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {item.subject}
          </Text>
          <Text style={{ color: "#555" }}>{item.NoOfQuestions} Questions</Text>
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
        {isSelected ? "✓ Added" : "Setup"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (isActive) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
    backgroundColor: isActive ? "#bbabab9f" : "#fff",
    paddingVertical: 14,
    borderRadius: 15,
    elevation: 3,
  }),
  radioButton: (isActive) => ({
    height: 35,
    width: 35,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: isActive ? 0 : 2,
    backgroundColor: isActive ? "#000" : "#fff",
  }),
});

export default RadioButton;
