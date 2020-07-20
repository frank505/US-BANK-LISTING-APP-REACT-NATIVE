import React from 'react'
import { Container, Header as PrivacyHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
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
        <PrivacyHeader style={{backgroundColor:"#d9534f"}}>
          
          <Left>
            {
              Platform.OS=='android'?
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10,color:'white'}}/>
              :
              <Icon name="menu" onPress={showDrawerNav} style={{marginLeft:10}}/>
            }
          
         
          </Left>
          <Body>
            <Title>Privacy Policy</Title>
          </Body>
          <Right>
            
          </Right>
          
        </PrivacyHeader>
    )
}
