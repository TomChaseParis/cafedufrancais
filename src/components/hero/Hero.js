import React from 'react';
import { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
 
}

export default Hero;