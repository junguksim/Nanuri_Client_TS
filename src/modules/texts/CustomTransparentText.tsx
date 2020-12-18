import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomTransparentText = (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NanumBarunGothic',
    fontSize: 20,
    opacity: 0.2,
  },
});
