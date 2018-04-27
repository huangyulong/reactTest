import React, {Component} from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import FullPage from './router-fullPage'

export default class RouteIndex extends Component{
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={FullPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
