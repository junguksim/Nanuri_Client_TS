import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
  Pressable,
} from 'react-native';
import Item from './Item.components';
import { ItemProps } from '../interfaces/Item.interface';
import ItemDetail from './ItemDetail.components';
import { createStackNavigator } from '@react-navigation/stack';
import { Picture } from '../classes/Picture.class';

const showerball =
  'https://contents.lotteon.com/itemimage/_v031714/LM/88/06/37/99/98/57/1_/00/1/LM8806379998571_001_1.jpg/dims/resizef/824X824';
const man =
  'data:image/png;base64,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';
const macbook =
  'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_KR?wid=892&hei=820&&qlt=80&.v=1573165435305';

const pic = {
  uri:
    'https://contents.lotteon.com/itemimage/_v031714/LM/88/06/37/99/98/57/1_/00/1/LM8806379998571_001_1.jpg/dims/resizef/824X824',
  width: 100,
  height: 100,
};
const DummyData = [
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 1,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 2,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 3,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 4,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 5,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
  {
    userInfo: {
      userIdx: 1,
      userName: '심정욱',
      userImg: new Picture(1, man, 30, 30),
      address: '중랑구 신내2동',
    },
    itemInfo: {
      itemIdx: 6,
      thumbnail: new Picture(2, showerball, 100, 100),
      itemPictures: [
        new Picture(2, showerball, 100, 100),
        new Picture(3, macbook, 100, 100),
      ],
      title: '샤워볼 개당 2천원에 나눔합니다',
      uploadTime: '방금 전',
      price: 15000,
      description:
        '안녕하세요~ 샤워볼 너무 많이 사버려서.. 혹시 2천원에 가져가실분 계시면 말씀주세요.',
      people: 1,
      maxPeople: 6,
    },
  },
];
const Stack = createStackNavigator();

const ItemList: React.FC<any> = function (props) {
  const { navigate } = props.navigation;
  const goDetail = (itemProps: ItemProps) => {
    return navigate('디테일', itemProps);
  };
  const renderItem = (result: { item: ItemProps }) => {
    return (
      <Pressable
        onPress={() => {
          goDetail(result.item);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 210, 210)' : 'white',
          },
        ]}
      >
        <Item {...result.item} />
      </Pressable>
    );
  };
  return (
    <FlatList
      data={DummyData}
      renderItem={renderItem}
      keyExtractor={(item) => item.itemInfo.itemIdx.toString()}
    />
  );
};
{
  /* <View style={styles.header}>
        <Text style={styles.title}>나눔</Text>
      </View> */
}
const Nanum: React.FC<ItemProps> = function (props) {
  return (
    <Stack.Navigator initialRouteName="나눔">
      <Stack.Screen name="나눔" component={ItemList} />
      <Stack.Screen
        name="디테일"
        component={ItemDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// styles
let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    fontFamily: 'BMDOHYEON',
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

export default Nanum;
