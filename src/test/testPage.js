import React , { Component , PropTypes } from 'react' ;
import { connect } from 'react-redux' ; 
import { bindActionCreators } from 'redux'
import { addTodo , completeTodo , setVisibilityFilter , VisibilityFilters } from './action' ;
import lightStore from './store'

 class TestPage extends Component{
 
    click(){
        const { light , actions } = this.props ;
        console.log(this.props)
        actions('green');
    }
  
    render(){
        return(
            <div>
                <button onClick={this.click.bind(this)}>点击</button>
                <p>{this.props.light.todos.color}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
     return { light:state }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(addTodo , dispatch) }
}

TestPage = connect( mapStateToProps , mapDispatchToProps )(TestPage)

export default TestPage ;


