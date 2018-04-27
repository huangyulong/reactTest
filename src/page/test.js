import React , { Component } from 'react' ;
// import { Provider , connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ;
import * as lights from '../action/index' ;
// import lightStore from '../store/index' ;

// let store = lightStore() ;

export default class Test extends Component{

    _bind(...methods){
        methods.forEach((method)=>this[method] = this[method].bind(this))
    } //constructor 方法引用了 _bind方法，方便一次性绑定 this 上下文，

    constructor(props){
        super(props);
        this._bind('autoChange' , 'handleClick');
        this.state = {
            count: 0 ,
            timeId: null 
        }
    }

    autoChange(){
        let _self = this ;
        this.state.timeId = setTimeout(function(){
            //递归调用，实现setInterval方法
            _self.autoChange();
        },1000)
    }

    handleClick(e){
        if(this.state.timeId){
            clearTimeout(this.state.timeId) ; 
            this.state.timeId = null ;
        }else{
            this.autoChange();
        }
    }

    render(){
        return (
            <div>

            </div>
        )
    }

}