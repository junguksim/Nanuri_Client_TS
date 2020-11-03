import React, { useState } from 'react';
import {
  Alert,
  Animated,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ItemProps } from '../interfaces/Item.interface';

const Item: React.FC<ItemProps> = (props) => {
  let { pic, title, address, uploadTime, price, description } = props;
  const [isClicked, setClicked] = useState(false);

  return (
    <View style={styles.item}>
      <Image source={pic} style={styles.picture}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>
          {address} {' / '}
          {uploadTime}
        </Text>
        <Text style={styles.price}>{price + ' 원'}</Text>
      </View>
      <View style={styles.blank}></View>
    </View>
  );
};

// styles
let styles = StyleSheet.create({
  wrapperCustom: {
    padding: 6,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 5,
    alignSelf: 'stretch',
    height: 130,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  picture: {
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 10,
    marginLeft: 20,
  },
  title: {
    marginBottom: 5,
    fontFamily: 'NanumGothic-ExtraBold',
  },
  address: {
    marginBottom: 5,
  },
  price: {
    marginBottom: 5,
  },
  blank: {
    flex: 1,
  },
});

export default Item;
