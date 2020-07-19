import React,{useEffect} from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux';
import { store } from './src/CreateStore';
import {Root} from 'native-base'



export default function App() {

  

  return (
    <Provider store={store}>
      <Root>
    <Main/>
    </Root>
    </Provider>
  )
}
