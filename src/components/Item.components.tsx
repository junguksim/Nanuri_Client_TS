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
import { CustomText } from '../modules/texts/CustomText';
import { CustomBoldText } from '../modules/texts/CustomBoldText';

const Item: React.FC<ItemProps> = (props) => {
  let {
    userInfo: { userImg, userIdx, userName, address },
    itemInfo: {
      itemIdx,
      itemPictures,
      thumbnail,
      title,
      uploadTime,
      price,
      description,
      people,
      maxPeople,
    },
  } = props;
  return (
    <View style={styles.item}>
      <Image source={thumbnail} style={styles.picture}></Image>
      <View style={styles.content}>
        <CustomBoldText>{title}</CustomBoldText>
        <CustomText>{`${address} / ${uploadTime}`}</CustomText>
        <CustomText>{price + ' 원'}</CustomText>
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
    marginLeft: 25,
    justifyContent: 'center',
  },
  blank: {
    flex: 1,
  },
});

export default Item;
