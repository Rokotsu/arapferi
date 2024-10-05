import React from 'react';
import '../css/contacts.css'
import ContactCards from "./Contact-cards";
import Button from "../UI/btn/Button";
import TelegramImg from '../UI/img/contact-cards-img/Vector.png'
import WhatsAppImg from '../UI/img/contact-cards-img/Vector(1).png'
import MassangerImg from '../UI/img/contact-cards-img/Vector(2).png'

const Contacts = () => {
    return (
        <div className={'contact-field'}>
            <ContactCards m={'media@arapferi.ge'}
                          buttons={[
                              <Button title={'telegram'} img={TelegramImg} imgWidth={19} imgHeight={19} />,
                              <Button title={'whatsapp'} img={WhatsAppImg} imgWidth={19} imgHeight={19} />,
                              <Button title={'massanger'} img={MassangerImg} imgWidth={19} imgHeight={19} />
                          ]}
            />
            <ContactCards m={'partner@arapferi.ge'}
                          buttons={[
                              <Button title={'telegram'} img={TelegramImg} imgWidth={19} imgHeight={19} />,
                              <Button title={'whatsapp'} img={WhatsAppImg} imgWidth={19} imgHeight={19} />,
                              <Button title={'massanger'} img={MassangerImg} imgWidth={19} imgHeight={19} />
                          ]}
            />
        </div>
    );
};

export default Contacts;