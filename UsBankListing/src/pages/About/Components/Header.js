import React from 'react'
import { Container, Header as AboutHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import {styles} from '../styles'
import {useNavigation} from '@react-navigation/native';
import { Platform } from 'react-native';

export default function Header() {

    const navigation = useNavigation();
 
 

     const showDrawerNav = () =>
     {
        navigation.openDrawer();
     }
    
    return (
        <AboutHeader style={{backgroundColor:"#d9534f"}}>
          
          <Left>
            {
              Platform.OS=='android'?
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10,color:'white'}}/>
              :
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10}}/>
            }
          
         
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right>
            
          </Right>
          
        </AboutHeader>
    )
}
