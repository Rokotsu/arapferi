import React from 'react';
import '../../css/button.css'

const GreyButton = (props) => {
    return (
        <div>
            <button className="grey-button">{props.name}</button>
        </div>
    );
};

export default GreyButton;