import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import UserTabNavigation from './UserTabNavigation';
import React from 'react'
import QuizSetup from '../screens/QuizSetup';
import QuizDisplay from '../screens/QuizDisplay';
import DisplayAvaliableSubject from '../screens/displayAvaliableSubject';

const stack = createStackNavigator();

export default function UserStackNavigation() {
    return (
      <stack.Navigator initialRouteName="FirstPage" screenOptions={{headerShown: false}}>
        <stack.Screen name="FirstPage" component={UserTabNavigation} />
        <stack.Screen
          name="SubjectDisplay"
          component={DisplayAvaliableSubject}
        />
        <stack.Screen name="QuizSetup" component={QuizSetup} />
        <stack.Screen name="DisplayQuiz" component={QuizDisplay} />
      </stack.Navigator>
    );
}