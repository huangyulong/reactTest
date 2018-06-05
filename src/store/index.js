import { createStore, applyMiddleware } from 'redux'
import lightReducer from '../reducer/index'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const logger = createLogger();
export default store = createStore(
    lightReducer,
    applyMiddleWare(thunkMiddleware , logger )
)

// const createStoreWithMiddleware = applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
//   )(createStore);

// export default function lightStore(initstate){
//     return createStoreWithMiddleware(lightReducer,initstate)
// }


