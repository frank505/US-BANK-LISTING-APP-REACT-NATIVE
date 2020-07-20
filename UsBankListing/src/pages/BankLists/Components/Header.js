import React from 'react'
import { Container, Header as BankListsHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import {styles} from '../styles'
import {useNavigation,useRoute} from '@react-navigation/native';
import { Platform } from 'react-native';
 
export default function Header() {

    const navigation = useNavigation();
 
    const routeParams = useRoute();
 
    const { name } = routeParams.params;

    const { id } = routeParams.params;

     const goBackToPrevPage = () =>
     {
        navigation.goBack();
     }

     const moveToSearchPostPage = () =>
     {
       
     }
    
    return (
        <BankListsHeader>
          
          <Left>
            {
              Platform.OS=='android'?
              <Icon name="arrow-back" onPress={goBackToPrevPage} style={{marginLeft:10,color:'whiste'}}/>
              :
              <Icon name="arrow-back" onPress={goBackToPrevPage}  style={{marginLeft:10}}/>
            }
          
         
          </Left>
          <Body>
          <Title>{name}</Title>
          </Body>
          <Right>
          <Icon name="ios-search" onPress={moveToSearchPostPage} style={{marginRight:10,fontSize:20}} />
          </Right>
          
        </BankListsHeader>
    )
}
