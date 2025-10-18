import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import RadioButton from "../../components/Eduxl/radioButton";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";



const DisplayAvaliableSubject = () => {
    const navigation = useNavigation();
  let subjectArray = [
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
    {
      subject: "Government",
      NoOfQuestions: 560,
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fcfcfcff",
        paddingHorizontal: 10,
        paddingVertical: 40,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#059205ff",
          zIndex: 2,
          paddingVertical: 10,
          paddingHorizontal: 15,
          elevation: 2,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("QuizSetup")}
      >
        <Entypo name="check" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 5, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Available Subjects
        </Text>
        <Text>
          You'll need to setup the questions before you can take this test.
          (Internet Connection not needed)
        </Text>

        <FlatList
          data={subjectArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <RadioButton item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DisplayAvaliableSubject;
