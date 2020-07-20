import React,{useState} from 'react'
import { Container ,Root } from 'native-base';
import SearchBar from './components/SearchBar';
import SearchStateList from './components/SearchStateList';



export default function StateSearch() {

 
   const [searchValue, setSearchValue] = useState("");

    const getSearchData = (Value) =>
    {
      setSearchValue(Value);
    }

    return (
    
      <Container>
       <SearchBar parentCallBack={getSearchData}/>
       
   <SearchStateList props={searchValue}/>
      
       

      </Container>
   
    )
}
