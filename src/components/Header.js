import React from 'react';
import logo from '../assets/micro.jpg'


export default function Header(props){
    return(
        <header className="header">
        
         <h1><img src={logo} alt="mikrokontroleri" width ="50"/> {props.ime.toUpperCase()}</h1>
         <p>{props.slogan}</p>
        </header>
    )
}