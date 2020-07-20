import React,{useEffect} from 'react'
import { Container } from 'native-base'
import Header from './Components/Header'
import BankListsTitle from './Components/BankListsTitle'




export default function BankLists() 
 {


    return (
        <Container>
         <Header/>
         <BankListsTitle />
        </Container>
       
    )
}
