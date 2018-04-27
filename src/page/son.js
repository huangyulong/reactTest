import React , { Component } from 'react'

export default class Son extends Component{

    onChangeInput(e){
        console.log(e.target.value)
    }
    render(){
        return(
            <div>
				为了测试git
                <input type="text" onChange={this.onChangeInput.bind(this)}/>
            </div>
        )
    }
}

