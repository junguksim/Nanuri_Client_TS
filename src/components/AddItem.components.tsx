import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';

const addItem: React.FC<any> = function (props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>물품등록</Text>
      </View>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
  },
  content: {
    flex: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default addItem;
