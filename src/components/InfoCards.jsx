import React from 'react';
import '../css/cards.css'
import GreyButton from "../UI/btn/GreyButton";

const InfoCards = (props) => {
    const divBackground = {
        backgroundImage: 'url(' + props.background + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        float: 'left',
        margin: '0 20px 20px 0'
    }


    if (!Array.isArray(props.buttons)) {
        return null;
    }


    return (
        <div>
            <div className={'card'} style={divBackground}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className={'button-section'}>
                    {props.buttons.map((button, index) => (
                        <React.Fragment key={index}>{button}</React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoCards;