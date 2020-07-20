import React,{useState} from 'react'
import { Container ,Root } from 'native-base';
import SearchBar from './components/SearchBar';
import SearchBankList from './components/SearchBankList';



export default function BankListSearch() {

 
   const [searchValue, setSearchValue] = useState("");

    const getSearchData = (Value) =>
    {
      setSearchValue(Value);
    }

    return (
    
      <Container>
       <SearchBar parentCallBack={getSearchData}/>
       
   <SearchBankList props={searchValue}/>
      
       

      </Container>
   
    )
}
