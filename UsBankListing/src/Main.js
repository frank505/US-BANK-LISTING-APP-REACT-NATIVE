import React, { useState,useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { Appearance, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import States from './pages/States'
import { DrawerContent } from './DrawerContent';
import {navigationRef } from './NavigationRootRef'
import About from './pages/About';
import Privacy from './pages/Privacy';
import { createStackNavigator } from '@react-navigation/stack';
import BankLists from './pages/BankLists';
import {useSelector} from 'react-redux';
import FullPost from './pages/FullPost';
import StateSearch from './pages/StateSearch';
import BankListSearch from './pages/BankListSearch'



const Stack = createStackNavigator();

 function loadStackScreen()
 {
   return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
      <Stack.Screen name="State" component={States} />
     <Stack.Screen name="BankLists" component={BankLists} />
     <Stack.Screen name="FullPost" component={FullPost} />
     <Stack.Screen name="StateSearch" component={StateSearch} />
     <Stack.Screen name="BankListSearch" component={BankListSearch} />
  </Stack.Navigator>
   );
 }



export default function Main(props) {

  const Drawer = createDrawerNavigator();

  const colorScheme = Appearance.getColorScheme();

  const unknownErr = useSelector(state => state.unknownErr.unknownErr);
   
   useEffect(() => {
     if(unknownErr==true)
     {
      Alert.alert(
        "Oops! Unknown Error",
        "Please check your network connection",
        [
           {
               text:"OK"
           },
        ]
    )
     }
     return () => {

     }
   }, [unknownErr])

    return (
      
      <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      
    <Drawer.Navigator
        initialRouteName="States"
        drawerContent={(props) => <DrawerContent  props={props}/>}
        >
           <Drawer.Screen name="About" component={About} />

        <Drawer.Screen name="States" component={loadStackScreen} />

        <Drawer.Screen name="Privacy" component={Privacy}  />

    </Drawer.Navigator>
</NavigationContainer>

    )
}
