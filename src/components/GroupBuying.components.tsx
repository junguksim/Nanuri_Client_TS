import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Item from './Item.components';
import { ItemProps } from '../interfaces/Item.interface';
import { Picture } from '../classes/Picture.class';

const pic = {
  uri:
    'https://contents.lotteon.com/itemimage/_v031714/LM/88/06/37/99/98/57/1_/00/1/LM8806379998571_001_1.jpg/dims/resizef/824X824',
  width: 50,
  height: 50,
};
const DummyData = [
  {
    itemIdx: 2,
    title: '샤워볼 개당 2천원에 공구하실분~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: 'hi',
  },
  {
    itemIdx: 3,
    title: '샤워볼 개당 2천원에 공구하실분~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: 'hi',
  },
  {
    itemIdx: 4,
    title: '샤워볼 개당 2천원에 공구하실분~',
    pic,
    address: '중랑구 신내2동',
    uploadTime: '방금 전',
    price: 15000,
    description: 'hi',
  },
];
const GroupBuying: React.FC<ItemProps> = (props) => {
  const renderItem = (result: { item: ItemProps }) => <Item {...result.item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>공동구매</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DummyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.itemIdx.toString()}
        />
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

export default GroupBuying;
