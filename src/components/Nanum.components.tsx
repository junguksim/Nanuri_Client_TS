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

const pic = {
  uri:
    'https://contents.lotteon.com/itemimage/_v031714/LM/88/06/37/99/98/57/1_/00/1/LM8806379998571_001_1.jpg/dims/resizef/824X824',
  width: 100,
  height: 100,
};
const DummyData = [
  {
    itemIdx: 1,
    title: '샤워볼 개당 2천원',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: '샤워볼 설명설명',
  },
  {
    itemIdx: 2,
    title: '샤워볼 개당 2천원에 나눔합니다~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: '해위해위 나는 코트를 팔러왔다구',
  },
  {
    itemIdx: 3,
    title: '샤워볼 개당 2천원에 나눔합니다~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: '해위해위 나는 코트를 팔러왔다구',
  },
  {
    itemIdx: 4,
    title: '샤워볼 개당 2천원에 나눔합니다~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: '해위해위 나는 코트를 팔러왔다구',
  },
  {
    itemIdx: 5,
    title: '샤워볼 개당 2천원에 공구하실분~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
  },
  {
    itemIdx: 6,
    title: '샤워볼 개당 2천원에 공구하실분~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
  },
];
const Stack = createStackNavigator();

const ItemList: React.FC<any> = function (props) {
  const { navigate } = props.navigation;
  const goDetail = (itemProps: ItemProps) => {
    console.log(props);
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
      keyExtractor={(item) => item.itemIdx.toString()}
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
