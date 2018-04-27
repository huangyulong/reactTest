import { createStore } from 'redux'

const store = createStore(reducer);

const state = store.getState();

const action ={
    type:'ADD_TODO',
    payload:'fdsfdsf'
}

const ADD_TODO = 'ADD_TODO'

const createAction = (text)=>{
    return{
        type:ADD_TODO,
        text
    }
}

const action = createAction(ADD_TODO);

store.dispatch(action())

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TODO':{
            return state + action.payload
        }
        default: { return state }
    }
}

// const state = reducer( state.getState() , action )



