import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomBoldText = (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NanumBarunGothicBold',
  },
});
