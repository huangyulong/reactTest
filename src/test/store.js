
import { createStore, bindActionCreators } from 'redux' ;
import todoApp from './reducer' ;


export default function lightStore(initStore){
    return createStore(todoApp , initStore)
}