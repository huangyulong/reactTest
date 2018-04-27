
import state from '../store/index'
import { CHANGE_RED , CHANGE_GREEN , CHANGE_YELLOW } from '../action/index'


const initstate = {
    color:'red',
    time:'7'
}
 
export default function lightReducer(state=initstate , action){
    switch(action.type){
        case CHANGE_GREEN : 
            return {
                color:'green',
                time:'7'
            }
        case CHANGE_YELLOW: return{
            color:'yellow',
            time:'3'
        }
        // case CHANGE_RED : object.assign({},initstate );
        default : return state ;
    }
}


// export default 

// export default ( state, action ) => {
//     switch(action.type){
//         case 'age':{
//             return state+1
//         };
//         default:{ return state}
//     }
// }