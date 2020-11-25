import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomHeaderText = (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NanumBarunGothic',
    fontSize: 24,
  },
});
