
import React from 'react'
import { Container, Header as StateHeader, Item, Input, 
  Icon,Left,Right, Button,Body,Title, Text } from 'native-base';
import {styles} from '../styles'
import {useNavigation} from '@react-navigation/native';
import { Platform } from 'react-native';

export default function Header() {

    const navigation = useNavigation();

     const showDrawerNav = () =>
     {
        navigation.openDrawer();
    }
     
    const moveToSearchPage = () =>
    {
      navigation.navigate("StateSearch");
    }


    return (
        <StateHeader>

            <Left>
            {
              Platform.OS=='android'?
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10,color:'white'}}/>
              :
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10}}/>
            }
          
         
          </Left>
          <Body>
            <Title>Us States</Title>
          </Body>
          <Right>
             <Icon name="ios-search" onPress={moveToSearchPage} style={{marginRight:10,fontSize:20}} />

          </Right>    
          
        </StateHeader>
    )
}

