import React from 'react'
import {
    ScrollView, Dimensions,
  } from 'react-native';
import {useRoute} from '@react-navigation/native';
import HTML from 'react-native-render-html';
import { Title, Card } from 'native-base';
import HTMLView from 'react-native-htmlview';


const styles = {
  h1: { backgroundColor: 'red' },
  h2: { fontFamily: 'Arial' },
  img: { resizeMode: 'cover' }
}

export default function PostContent() {

    const routeParams = useRoute();

    const { id } = routeParams.params;
   
    const { post } =routeParams.params;
     
    const {title} = routeParams.params;

  
    
    

     return (
        <>
        { 
          <>
        <ScrollView style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%" }}>

        <Card style={{paddingLeft:10,paddingRight:10}}>
        <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>{title}</Title>
        <HTML 
        imagesMaxWidth={Dimensions.get('window').width}
        htmlStyles={styles}
        html={post}
        
        />
        </Card>

       
    </ScrollView>
        </>
      }
        </>
    )
}
