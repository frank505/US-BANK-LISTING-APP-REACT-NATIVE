import React,{useEffect} from 'react'
import { Container } from 'native-base'
import Header from './Components/Header'
import StateList from './Components/StateList'




export default function States() 
 {

  
   

    return (
        <Container>
         <Header/>
         <StateList/>
        </Container>
       
    )
}
