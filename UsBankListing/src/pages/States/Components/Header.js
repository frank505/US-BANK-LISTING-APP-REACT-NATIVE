import React from 'react'
import { Container, Header as StateHeader, Item, Input, Icon, Button, Text } from 'native-base';
import {styles} from '../styles'
import {useNavigation} from '@react-navigation/native';
import { Platform } from 'react-native';

export default function Header() {

    const navigation = useNavigation();

     const showDrawerNav = () =>
     {
        navigation.openDrawer();
     }
  
    return (
        <StateHeader searchBar rounded>
            {
               Platform.OS=="ios"?
               <Icon name="menu" onPress={showDrawerNav} style={styles.burgerStyle}/>
               :
               <></>
            }
           
  
          <Item>
              {
                  Platform.OS=="android"?
                  <Icon name="menu"  onPress={showDrawerNav} />
                  :
                  <></>
              }
          
            <Input placeholder="Search For Your State" />
            <Icon name="ios-search" />
            
          </Item>
          
        </StateHeader>
    )
}
