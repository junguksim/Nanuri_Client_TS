import React, { Component, useState, useEffect, ReactText } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Picture } from '../classes/Picture.class';
import { CustomText } from '../modules/CustomText';
import { Picker } from '@react-native-picker/picker';

const showerball =
  'https://contents.lotteon.com/itemimage/_v031714/LM/88/06/37/99/98/57/1_/00/1/LM8806379998571_001_1.jpg/dims/resizef/824X824';
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
  const [itemPictureIdx, setItemPictureIdx] = useState<number>(0);
  const [itemPictureArray, addItemPicture] = useState<Picture[]>([]);
  const [title, setTitle] = useState<string>('제목');
  const [category, setCategory] = useState<ReactText>('나눔');
  const AddImage: React.FC<any> = function (props) {
    const renderAddImage = (result: { item: Picture }) => {
      return (
        <Pressable
          onPress={() => {
            Alert.alert('a', 'b');
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 210, 210)' : 'white',
            },
          ]}
        >
          <Image source={result.item}></Image>
        </Pressable>
      );
    };
    return (
      <View style={props.style}>
        <Pressable onPress={showImagePicker} style={styles.addImageButton}>
          <Text>사진추가</Text>
        </Pressable>
        <FlatList
          data={itemPictureArray}
          extraData={itemPictureArray}
          renderItem={renderAddImage}
          keyExtractor={(item) => item.pictureIdx.toString()}
          horizontal={true}
        />
      </View>
    );
  };
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
            new Picture(itemPictureIdx, source.uri, 100, 100),
          ),
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <CustomText>글쓰기</CustomText>
        </View>
        <Pressable
          onPress={() => {
            Alert.alert('완료 버튼', 'pressed');
          }}
        >
          <CustomText>완료</CustomText>
        </Pressable>
      </View>
      <View style={styles.content}>
        <AddImage style={styles.addImageFlatList}></AddImage>
        <TextInput
          style={styles.titleInput}
          placeholder={title}
          value={title}
          onChangeText={(title) => setTitle(title)}
        ></TextInput>
        <Picker
          selectedValue={category}
          style={styles.categoryPicker}
          onValueChange={(categoryValue) => {
            setCategory(categoryValue);
          }}
          itemStyle={{
            fontSize: 24,
            fontFamily: 'NanumBarunGothic',
          }}
        >
          <Picker.Item label="나눔" value="나눔" />
          <Picker.Item label="공동구매" value="공동구매" />
        </Picker>
        <TextInput
          style={styles.titleInput}
          placeholder={title}
          onChangeText={(title) => setTitle(title)}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    marginBottom: 5,
  },
  headerTitle: {
    flex: 5,
    marginLeft: 100,
    fontWeight: 'bold',
  },
  headerFinishButton: {
    flex: 1,
  },
  content: {
    flex: 8,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  addImageButton: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },
  addImageFlatList: {
    borderTopWidth: 1,
    height: 100,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  titleInput: {
    flex: 1,
    borderTopWidth: 1,
    fontSize: 24,
    borderBottomWidth: 1,
  },
  customText: {
    color: 'red',
    fontSize: 24,
  },
  categoryPicker: {
    flex: 1,
  },
  categoryPickerItem: {
    fontSize: 24,
    fontFamily: 'NanumBarunGothic',
  },
});

export default addItem;
