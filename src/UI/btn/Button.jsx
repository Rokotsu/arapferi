import React from 'react';
import '../../css/button.css'

const Button = (props) => {
    return (
        <div>
            <button className={'button-all'}><img src={props.img} alt={props.alt} height={props.imgHeight} width={props.imgWidth}/> {props.title}</button>
        </div>
    );
};

export default Button;