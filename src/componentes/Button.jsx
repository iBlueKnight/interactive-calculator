import React from 'react';
import '../css/Button.css';
function Button( props ){

    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };
    return(
        
        //Here we want to define the class name with JS so we use {} to tell React that ther will be JS code
        //Inside the brackets we are using `` this allow us to create template literals this allow us to create a 
        //String that contains JS code to define the result
        <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.handleClick(props.children)}> 
            
            {props.children}
        </div>
    );
}

export default Button;