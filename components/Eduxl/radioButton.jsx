import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const RadioButton = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClickEvent() {
    setIsActive(!isActive);
  }

  //   return (
  //       <Pressable style={styles.radioButton(isActive)}
  //       onPress={handleClickEvent}>
  //     </Pressable>
  //   )

  return (
    <TouchableOpacity
      onPress={handleClickEvent}
      style={styles.container(isActive)}
    >
      <Pressable style={styles.radioButton(isActive)}></Pressable>
          <View style={{
              flexDirection: 'row', alignItems: 'center'
      }}>
        <AntDesign name="book" size={28} color="#05b405ff" />
        <View>
          <Text>{item.subject}</Text>
          <Text>{item.NoOfQuestions} Questions</Text>
        </View>
      </View>
      <Text
        style={{
          color: isActive ? "#fff" : "#05b405ff",
          backgroundColor: isActive ? "#05b405ff" : "#c7c5c5ff",
          fontSize: 15,
          fontWeight: "900",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
        }}
      >
        {isActive ? "non" : "Setup"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (isActive) => ({
    flex: 1,
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
    borderBlockColor: "#000",
    borderWidth: isActive ? 0 : 2,
    backgroundColor: isActive ? "#000" : "#fff",
  }),
});

export default RadioButton;
