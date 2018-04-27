import { createStore } from 'redux'
// import changeAge from '../reducer/index'
import lightReducer from '../reducer/index'

// export default state = {
//     name:'',
//     age:10
// }


export default function lightStore(initstate){
    return createStore(lightReducer,initstate)
}


