import React from 'react'
import { Container, Header as FullPostHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import {styles} from '../styles'
import {useNavigation,useRoute} from '@react-navigation/native';
import { Platform } from 'react-native';
 
export default function Header() {

    const navigation = useNavigation();
 
    const routeParams = useRoute();
 
    const { title } = routeParams.params;

    const { id } = routeParams.params;

     const goBackToPrevPage = () =>
     {
        navigation.goBack();
     }
    
    return (
        <FullPostHeader>
          
          <Left>
            {
              Platform.OS=='android'?
              <Icon name="arrow-back" onPress={goBackToPrevPage} style={{marginLeft:10,color:'whiste'}}/>
              :
              <Icon name="arrow-back" onPress={goBackToPrevPage}  style={{marginLeft:10}}/>
            }
          
         
          </Left>
          <Body>
          <Title>{title}</Title>
          </Body>
          <Right>
            
          </Right>
          
        </FullPostHeader>
    )
}
