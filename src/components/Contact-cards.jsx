import React from 'react';
import '../css/contacts.css'
import Button from "../UI/btn/Button";
import TelegramImg from '../UI/img/contact-cards-img/Vector.png'

const ContactCards = (props) => {

    if (!Array.isArray(props.buttons)) {
        return null;
    }

    return (
        <div className={'contact-card-field'}>
            <div className={'contact-card'}>
                <h2>{props.m}</h2>
                <div className={'contact-button-section'}>
                    {props.buttons.map((btn, index) => (
                        <React.Fragment key={index}>{btn}</React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactCards;