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
  KeyboardAvoidingView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Picture } from '../classes/Picture.class';
import { CustomText } from '../modules/texts/CustomText';
import { CustomBoldText } from '../modules/texts/CustomBoldText';
import { CustomHeaderText } from '../modules/texts/CustomHeaderText';
import { CustomTransparentText } from '../modules/texts/CustomTransparentText';
import { createStackNavigator } from '@react-navigation/stack';
import AddItemCompleteScreen from './AddItemCompleteScreen.components';
import SwitchSelector from 'react-native-switch-selector';
import axios from 'axios';

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
const SwitchSelectorOptions = [
  { label: '나눔', value: '나눔' },
  { label: '공동구매', value: '공동구매' },
];
// function upload(data: any, images: any) {
//   const formData = new FormData();
//   formData.append('data', data);
//   let urls: String[] = [];
//   images.forEach((image: any) => {
//     urls.push(image.uri);
//   });
//   formData.append('images', urls);
//   const client = axios.create({
//     baseURL: 'http://e3a16976ead3.ngrok.io',
//   });
//   console.log(formData);
//   client.post('/items', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// }
const AddItemScreen: React.FC<any> = function (props) {
  const [itemPictureIdx, setItemPictureIdx] = useState<number>(0);
  const [itemPictureArray, setItemPicture] = useState<Picture[]>([]);
  const [itemPictureUrlArray, setItemPictureUrlArray] = useState<String[]>([]);
  const [title, setTitle] = useState<string>('제목');
  const [category, setCategory] = useState<string>('나눔');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [maxPeopleCount, setMaxPeopleCount] = useState<number>(2);
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
          <CustomBoldText>사진추가</CustomBoldText>
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
    // ImagePicker.showImagePicker(imagePickerOptions, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //     setItemPictureIdx(itemPictureIdx + 1);
    //     setItemPicture(
    //       itemPictureArray.concat(
    //         new Picture(itemPictureIdx, source.uri, 100, 100),
    //       ),
    //     );
    //   }
    // });
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      multiple: true,
    })
      .then((images) => {
        return images;
      })
      .then((images) => {
        let updatedItemPictureIdx: number = itemPictureIdx;
        let updatedItemPictureArray: Picture[] = itemPictureArray;
        let updatedItemPictureUrlArray: String[] = itemPictureUrlArray;
        for (let i = 0; i < images.length; i++) {
          updatedItemPictureArray.push(
            new Picture(updatedItemPictureIdx, images[i].path, 100, 100),
          );
          updatedItemPictureIdx += 1;
        }
        setItemPictureIdx(updatedItemPictureIdx);
        setItemPicture(updatedItemPictureArray);
      });
  };
  const { navigate } = props.navigation;
  const goAddItemCompleteScreen = () => {
    return navigate('물품등록완료');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <CustomHeaderText>물품등록</CustomHeaderText>
        </View>
        <Pressable
          onPress={() => {
            goAddItemCompleteScreen();
            console.log({
              title,
              category,
              price,
              description,
              itemPictureArray,
              maxPeopleCount,
            });
            // upload(
            //   {
            //     title,
            //     category,
            //     price,
            //     description,
            //     maxPeopleCount,
            //   },
            //   itemPictureArray,
            // );
          }}
          style={styles.addItemCompletePressable}
        >
          <CustomText>등록</CustomText>
        </Pressable>
      </View>
      <View style={styles.content}>
        <AddImage style={styles.addImageFlatList}></AddImage>
        <TextInput
          style={styles.titleInput}
          placeholder={'제목'}
          onChangeText={(title) => setTitle(title)}
        ></TextInput>
        <SwitchSelector
          initial={0}
          onPress={(value) => {
            setCategory(value.toString());
          }}
          options={SwitchSelectorOptions}
          style={styles.categoryPicker}
        />
        <View style={styles.priceAndPeopleView}>
          <CustomTransparentText>\</CustomTransparentText>
          <TextInput
            style={styles.priceInput}
            placeholder={'가격'}
            onChangeText={(changedPrice) => setPrice(Number(changedPrice))}
          ></TextInput>
          <TextInput
            style={styles.maxPeopleInput}
            placeholder={'최대인원'}
            onChangeText={(changedPrice) =>
              setMaxPeopleCount(Number(maxPeopleCount))
            }
          ></TextInput>
          <CustomTransparentText>명</CustomTransparentText>
        </View>
        <TextInput
          style={styles.descriptionInput}
          placeholder={'설명'}
          onChangeText={(changedDescription) =>
            setDescription(changedDescription)
          }
        ></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
};
const Stack = createStackNavigator();

const AddItem: React.FC<any> = function (props) {
  return (
    <Stack.Navigator initialRouteName="물품등록하기">
      <Stack.Screen
        name="물품등록"
        component={AddItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="물품등록완료"
        component={AddItemCompleteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    flex: 0.7,
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  headerTitle: {
    flex: 5,
    fontWeight: 'bold',
    marginLeft: 15,
    justifyContent: 'center',
  },
  headerFinishButton: {
    flex: 1,
  },
  content: {
    flex: 8,
    paddingHorizontal: 20,
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
    borderWidth: 1,
    borderColor: '#F2F2F2',
  },
  addImageFlatList: {
    height: 100,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  titleInput: {
    flex: 0.5,
    borderTopWidth: 1,
    fontSize: 18,
    borderColor: '#F2F2F2',
  },
  priceAndPeopleView: {
    flex: 1.5,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignItems: 'center',
    borderColor: '#F2F2F2',
  },
  priceInput: {
    flex: 3,
    fontSize: 20,
  },
  maxPeopleInput: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  descriptionInput: {
    flex: 5,
    borderTopWidth: 1,
    fontSize: 18,
    borderColor: '#F2F2F2',
  },
  customText: {
    color: 'red',
    fontSize: 18,
  },
  categoryPicker: {
    flex: 1.5,
    borderTopWidth: 1,
    alignItems: 'center',
    borderColor: '#F2F2F2',
  },
  addItemCompletePressable: {
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 25,
  },
});

export default AddItem;
