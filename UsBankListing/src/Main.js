import React, { useState,useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { Appearance } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import States from './pages/States'
import { DrawerContent } from './DrawerContent';
import {navigationRef } from './NavigationRootRef'
import About from './pages/About';
import Privacy from './pages/Privacy';







export default function Main(props) {

  const Drawer = createDrawerNavigator();

  const colorScheme = Appearance.getColorScheme();
    
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

        <Drawer.Screen name="States" component={States} />

        <Drawer.Screen name="Privacy" component={Privacy}  />

    </Drawer.Navigator>
</NavigationContainer>

    )
}
