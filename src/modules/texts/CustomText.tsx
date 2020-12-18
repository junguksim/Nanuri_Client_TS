import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomText = (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NanumBarunGothic',
    fontSize: 15,
  },
});
