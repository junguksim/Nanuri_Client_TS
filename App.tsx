import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Nanum from './src/components/Nanum.components';
import GroupBuying from './src/components/GroupBuying.components';
import AddItem from './src/components/AddItem.components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface Props {
  name: string;
}

const Tab = createBottomTabNavigator();
export default class App extends Component {
  async componentDidMount() {}
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;
              if (route.name === '나눔') {
                iconName = 'exchange-alt';
                return (
                  <FontAwesome5
                    name={iconName}
                    size={size}
                    color={color}
                  ></FontAwesome5>
                );
              } else if (route.name === '공동구매') {
                iconName = 'users';
                return (
                  <FontAwesome5
                    name={iconName}
                    size={size}
                    color={color}
                  ></FontAwesome5>
                );
              } else if (route.name === '물품등록') {
                iconName = focused ? 'ios-add-circle' : 'md-add';
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#7BED8D',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="나눔" component={Nanum} />
          <Tab.Screen name="공동구매" component={GroupBuying} />
          <Tab.Screen name="물품등록" component={AddItem} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 193,
    height: 110,
  },
});
