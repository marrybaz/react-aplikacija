import React from 'react';

import OpenWeather from './OpenWeather';

export default function Footer(props){
    return(
        <footer>
        Sva prava bla bla bla -{props.ime} Preduzece osnovano {props.osnovano} 
        <OpenWeather city="Belgrade" />
      </footer>
    )
}