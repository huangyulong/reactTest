import React , { Component } from 'react'
// import style from '../assets/home.css'
import Son from './son'
import state from '../store/index'

import {style} from './homeCss'

import { Calendar } from 'antd'
export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            selectWord:'',
            selectDivShow:0,
            userSelect:'text'
        }
    }

    mouseUp(){
     
        if(window.getSelection().toString()){
            let word = window.getSelection().toString();
            this.setState({
                selectWord:word,
                selectDivShow:0
            })
        }
    }
  
    mouseDown(e){
        let wordTop = window.getComputedStyle(this.refs.word).top;
        let wordleft = window.getComputedStyle(this.refs.word).left;

            let mouse = e || window.event ;
            console.log(mouse.clientX)
            console.log(mouse.clientY)
        
            this.setState({
                selectWord:'',
                selectDivShow:0,
                userSelect:'text',
                top:mouse.clientY - 15 +'px',
                left:mouse.clientX + 'px'
            })
           
    }
    wordMouseDown(){
        let _this = this;
        _this.setState({
            selectDivShow:1,
            userSelect:'none'
        
        },()=>{
            document.onmousemove = (e)=>{
                let mouse = e || window.event ;
                _this.setState({
                    top:mouse.clientY +'px',
                    left:mouse.clientX  + 'px'
                },()=>{
                    // this.mouseMove()
                })
                e.stopPropagation()
            }
    
            document.onmouseup = function(){
                document.onmousemove = null;
            }
        })
    }
    onPanelChange(value,mode){

    }

    render(){
        return(
            <div  >{/*className={`${style.contain} color`}*/}
                <div style={{ position:'relative'}}>
                    <p  style={{position:'relative',userSelect:this.state.userSelect}} onMouseUp={this.mouseUp.bind(this)} onMouseDown={this.mouseDown.bind(this)} ref='div' >这事一段文字文字这事一
                    段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字
                    这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字这事一段文字文字</p>
                    
                    <div style={{ position:'fixed',top:this.state.top,left:this.state.left,opacity:this.state.selectDivShow ,
                    maxHeight:'100px',maxWidth:'600px',backgroundColor:'black'}}  ref='word'
                    onMouseDown={this.wordMouseDown.bind(this)}>{this.state.selectWord}</div>
                </div>

                <Calendar fullscreen={true} onPanelChange={this.onPanelChange.bind(this)}/>
            </div>
        )
    }
}