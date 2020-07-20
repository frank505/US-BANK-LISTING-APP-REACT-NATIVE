import React from 'react'
import {Card,Title,Text,ListItem,List,Icon
} from 'native-base'

export default function AboutCard() {
    return (
        <>
        <Card style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%",
        paddingLeft:10,paddingRight:10,maxHeight:300
        }} >

        <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>
          About Us
        </Title>
        <Text style={{marginTop:20}}>
        cleversoftwares is a company that focuses on providing enterprise solutions to individuals and organizations
        to help them grow thier bussiness, thier dream, thier finances and thier lives as they want and how they want
        with a wealth of experience in ICT making this possible to be achieved.
         cleversoftwares even though majorly is focused on enterprise solutions, also has a focus for teaching tech
         as well as discussing latest technologies and how they can be useful now and in the future.
        </Text>
        </Card>
        <Card style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%",
        paddingLeft:10,paddingRight:10,height:80,textAlign:"center",maxHeight:240
        }} >

        <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>
        Contact Us
        </Title>

        <List style={{marginTop:20}}>
        <ListItem><Text><Icon name="call-outline" style={{fontSize:20,padding:5,fontWeight:"bold"}}/>
        &nbsp;
        07067247419</Text></ListItem>
        <ListItem ><Text><Icon name="globe-outline" style={{fontSize:20,padding:5,fontWeight:"bold"}}/>&nbsp;
        http://www.cleversoftwares.com</Text></ListItem>
        <ListItem><Text><Icon name="mail-outline" style={{fontSize:20,padding:5,fontWeight:"bold"}}/>&nbsp;
        hello@cleversoftwares.com</Text></ListItem>
        </List>
        
        </Card>
        </>
        
    )
}
