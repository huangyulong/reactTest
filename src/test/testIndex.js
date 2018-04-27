import React , { Component } from 'react' ;

import { Provider } from 'react-redux' ;

import TestPage from './testPage' ;
import lightStore from './store'


let store = lightStore() ;

export default class testIndex extends Component{

    render(){
       return(
            <Provider store={store}>
                <TestPage/>
            </Provider>
       )
           
        
    }
  
}