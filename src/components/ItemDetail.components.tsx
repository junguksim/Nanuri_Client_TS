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
  ScrollView,
  Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const ItemDetail: React.FC<any> = ({ route }) => {
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
  } = route.params;
  const renderImages = (result: {
    item: { itemInfo: { itemPictures: Array<Object> } };
  }) => {
    return <Image source={itemPictures[0]} style={styles.picture}></Image>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        loop={true}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{ bottom: -23, left: 0, right: 10 }}
      >
        <View style={styles.slide}>
          <Image style={styles.picture} source={itemPictures[0]}></Image>
        </View>
        <View style={styles.slide}>
          <Image style={styles.picture} source={itemPictures[1]}></Image>
        </View>
      </Swiper>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.userImageContainer}>
            <Image source={userImg} style={styles.userImg}></Image>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <Text>{`${address}`}</Text>
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionView}>
          <ScrollView>
            <Text style={styles.description}>{description}</Text>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceAndPeopleView}>
            <Text
              style={styles.priceAndPeople}
            >{`${price}원 \n ${people} \/ ${maxPeople} 명`}</Text>
          </View>
          <View style={styles.chatView}>
            <Button
              title={'채팅하기'}
              onPress={() => {
                Alert.alert('채팅하기!', '개발해야겟다헤헤');
              }}
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  swiper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  content: {
    flex: 2,
    margin: 5,
    padding: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  userImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  userImg: {
    borderRadius: 400 / 2,
    width: 50,
    height: 50,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  userInfoContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  picture: {
    flex: 1,
    width: win.width,
    resizeMode: 'stretch',
  },
  descriptionView: {
    flex: 8,
  },
  description: {
    fontSize: 15,
  },
  footer: {
    flex: 1,
    margin: -5,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    flexDirection: 'row',
  },
  priceAndPeople: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceAndPeopleView: {
    flex: 1,
  },
  chatView: {
    flex: 1,
  },
});

export default ItemDetail;
