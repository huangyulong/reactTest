import React , { Component } from 'react'
import { Input,Icon , Button } from 'antd'
import '../assets/login.css'
import { Provider , connect } from 'react-redux' ;
import lightStore from '../store/index' ;
import * as lightActions from '../action/index'
import Test from '../page/test'
import { bindActionCreators } from 'redux';

let store = lightStore() ; 

export default class Login extends Component{

    constructor(...args){
        super(...args);
        this.state={
            username:'',
            password:''
        }

    }

  

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
      }
      onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
      }
      onChangePassword(e){
          this.setState({
              password:e.target.value
          })
      }


      login(){
          this.props.history.push('/home')
      }

      mapStateToProp(state){
        return { light : state }
      }
      mapDispatchToProps(dispatch){
        return { 
            action : bindActionCreators(lightActions , dispatch)
        }
      }
    //   Test = connent( mapStateToProp , mapDispatchToProps )(Test)

    render(){
        return(
            <Provider store = { store}>
           
            <div className='contain'>
    
      {/*}      <Input
                placeholder="Enter your username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
             
                value={this.state.userName}
                onChange={this.onChangeUserName.bind(this)}
                ref={node => this.userNameInput = node}
            />
            <br/>

            
            <Input
                placeholder="Enter your password"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
             
                value={this.state.password}
                onChange={this.onChangePassword.bind(this)}
            
            />

        <br/>*/}

            <Button onClick={this.login.bind(this)}>登陆</Button>


            <Test />

            </div>
            </Provider>
        )
    }

}