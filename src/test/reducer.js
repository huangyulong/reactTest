import { combineReducers } from 'redux' ;
import { ADD_TODO , COMPLETE_TODO , SET_VISIBILITY_FILTER , VisibilityFilters } from './action'
const { SHOW_ALL } = VisibilityFilters ;

function visibilityFilter(state = SHOW_ALL , action){
    switch( action.type ){
        case SET_VISIBILITY_FILTER :
         return action.filter
        default :
            return state
    }
}
const initStore = {
     num : 0 ,
    color: 'red'
}


function todos(state=initStore , action ){
    switch( action.type ){
        case ADD_TODO:
            console.log(state)
            return {
                 
                    num:1 ,
                    color:action.text
                  
            }
                // Object.assign( {} , state[action.text] ,{
                    // color: action.text
                // }),
               
            // return[
            //     ...state,
            //     {
            //         text: action.text,
            //         completed: false
            //     }
            // ]
        // case COMPLETE_TODO:
        //     return [
        //         ...state.slice(0,action.index),
        //         Object.assign( {} , state[action.index] ,{
        //             completed: true
        //         }),
        //         ...state.slice( action.index + 1)
        //     ]
        default : 
            return state
    }
}


const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp ;