import React from 'react'
import {Card,Title,Text} from 'native-base'

export default function AboutCard() {
    return (
        <>
        <Card style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%",
        paddingLeft:10,paddingRight:10,maxHeight:250
        }} >

        <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>
          About Us
        </Title>
        <Text style={{marginTop:20}}>
        Anim ut aliqua sint ullamco nisi nulla elit id excepteur esse consequat nostrud. Cillum anim et eu ipsum ullamco. Nulla commodo eiusmod labore eu in sint amet ad. Excepteur cupidatat culpa commodo aliquip incididunt mollit laboris excepteur in nostrud voluptate Lorem exercitation deserunt. Adipisicing ullamco in officia mollit qui ullamco ex ad reprehenderit consectetur magna.
        </Text>
        </Card>
        {/* <Card style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%",
        paddingLeft:10,paddingRight:10,height:80,textAlign:"center"
        }} >

        <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>
        Contact Us
        </Title>
        <Text style={{marginTop:20}}>07067247419</Text>
        <Text style={{marginTop:20}}>http://www.cleversoftwares.com</Text>
        <Text style={{marginTop:20}}>hello@cleversoftwares.com</Text>
        </Card> */}
        </>
        
    )
}
