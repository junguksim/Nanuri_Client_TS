import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
  Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomText } from '../modules/texts/CustomText';

const AddItemCompleteScreen: React.FC<any> = () => {
  return <CustomText>Add Item Complete!</CustomText>;
};

export default AddItemCompleteScreen;
