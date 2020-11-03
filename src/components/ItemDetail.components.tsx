import React from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { ItemProps } from '../interfaces/Item.interface';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const ItemDetail: React.FC<any> = ({ route }) => {
  let { title, description, pic } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={pic} style={styles.picture}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

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
    flex: 3,
    padding: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'NanumBarunGothic',
  },
  picture: {
    flex: 2,
    width: win.width,
    height: 362 * ratio, //362 is actual height of image
  },
});

export default ItemDetail;
