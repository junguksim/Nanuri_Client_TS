import React, { Component, useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Picture } from '../classes/Picture.class';

const imagePickerOptions = {
  title: '사진 등록하기',
  takePhotoButtonTitle: '카메라',
  chooseFromLibraryButtonTitle: '이미지 선택',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const addItem: React.FC<any> = function (props) {
  const [itemPictureIdx, setItemPictureIdx] = useState(0);
  const [itemPictureArray, addItemPicture] = useState([{}]);
  const showImagePicker = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setItemPictureIdx(itemPictureIdx + 1);
        addItemPicture(
          itemPictureArray.concat(
            new Picture(itemPictureIdx, source.uri, 50, 50),
          ),
        );
        console.log(itemPictureIdx);
        console.log(itemPictureArray);
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>물품등록</Text>
        <Button title="사진선택" onPress={showImagePicker}></Button>
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
