import React,{Component} from 'react'
import {  Route, Switch } from 'react-router-dom'

import Login from '../page/login'
import Home from '../page/home'
import testIndex from '../test/testIndex'
import FuwenBen from '../page/editor'
import Banners from '../page/banner'
export default class FullPage extends Component{


    render(){
        return(
            <div id='move'>
                <Switch>
                    <Route path='/editor' component={FuwenBen}/>
                    <Route path='/banner' component={Banners}/>
                    
                    <Route path='/home' component={ Home }/>
                    <Route path='/test' component={testIndex} />
                    <Route path='/' component={ Login }/>
                </Switch>
            </div>
        )
    }
}