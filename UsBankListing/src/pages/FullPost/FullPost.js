import React,{useEffect} from 'react'
import { Container } from 'native-base'
import Header from './Components/Header'
import PostContent from './Components/PostContent'




export default function FullPost() 
 {


    return (
        <Container>
         <Header/>
         <PostContent />
        </Container>
       
    )
}
