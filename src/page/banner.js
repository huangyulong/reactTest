import React , {Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
export default class Banners extends Component{
    render(){
        return(
            <div style={{width:'800px', height:'500px'}}>
                <BannerAnim>
                    <Element key="demo1">
                        <div style={{width:'100%',height:'80%',background:'red'}}></div>
                        <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
                    </Element>
                    <Element key="demo2"  >
                    <div style={{width:'100%',height:'80%',background:'blue'}}></div>
                        <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion 2222222</TweenOne>
                    </Element>
                </BannerAnim>
            </div>
        )
    }
}
