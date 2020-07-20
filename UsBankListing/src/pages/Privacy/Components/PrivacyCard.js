import React from 'react'
import {Card,Title,Text,ListItem,List,Icon
} from 'native-base'

export default function PrivacyCard() {
    return (
        <Card style={{ flex: 1,maxWidth:'94%',marginLeft:"3%",marginRight:"3%",
        paddingLeft:10,paddingRight:10,maxHeight:300
        }} >
          <Title style={{marginTop:10,textAlign:'center',color:'red',
        fontWeight:'bold',fontSize:21,borderWidth:4,borderColor:"red"}}>
            Privacy Policy
        </Title>
          <Text style={{marginTop:20}}>
          Our Service may contain links to other sites. If you click on a third-party link,
       you will be directed to that site. Note that these external sites are not operated by us. 
       Therefore, we strongly advise you to review the Privacy Policy of these websites.
        We have no control over, and assume no responsibility for the content, 
      privacy policies, or practices of any third-party sites or services.
          </Text>
        </Card>
    )
}
