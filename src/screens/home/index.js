import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Block from '../../components/Block'
import TopCategories from './TopCategories'
import PopularItems from './PopularItems'
import NearByDeals from './NearByDeals'
import SearchBar from './SearchBar'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import COLORS from '../../assets/colors'
import { AuthContext } from '../login/context'
import AccountScreen from '../account'

const Tabs = createBottomTabNavigator();
const Foodtack = createStackNavigator();
const AccountStack = createStackNavigator();

const TabsName = {
    Explorer: "Explorer",
    Account: "Account",
}

const ExplorerScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView alwaysBounceVertical={false}>
                <Block block color="#F8F6F6" padding={10}>
                    <SearchBar />
                    <TopCategories />
                    <Block height={1} color="#EFEEEE" />
                    <PopularItems />
                    <Block height={1} color="#EFEEEE" />
                    <NearByDeals />
                </Block>
            </ScrollView>
        </SafeAreaView>
    )
}

const ExplorerStackScreen = () => (
    <Foodtack.Navigator>
      <Foodtack.Screen name={TabsName.Explorer} component={ExplorerScreen} />
    </Foodtack.Navigator>
  );

const AccountStackScreen = () => (
    <AccountStack.Navigator>
      <AccountStack.Screen name={TabsName.Account} component={AccountScreen} />
    </AccountStack.Navigator>
  );

const HomeScreen = () => {
    return (<Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === TabsName.Explorer) {
                    return <Ionicons name='ios-beer' size={size} color={color} />

                } else if (route.name === TabsName.Account) {
                    return <Feather name='user' size={size} color={color} />
                }
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}>

        <Tabs.Screen name={TabsName.Explorer} component={ExplorerStackScreen} />
        <Tabs.Screen name={TabsName.Account} component={AccountStackScreen} />
    </Tabs.Navigator>)
}

export default HomeScreen
