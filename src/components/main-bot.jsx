import React from 'react';
import "../css/main-bot.css"
import logoPNG from '../UI/img/logo.png'
import Button from "../UI/btn/Button";
import chatLogo from '../UI/img/logochat.png'
import voiceLogo from '../UI/img/logovoice.png'
import document from '../UI/img/document.png'
import userAdd from '../UI/img/user-add.png'

const MainBot = () => {
    return (
        <div className="main-bot">
            <img src={logoPNG} alt={'Logo png'} className={'img-logo'}/>
            <p className={'tagline'}>встреча с невидимыми</p>
            <div className={'right-block'}>
                <p>Kvekana Ваш<br/>
                    проводник<br/>
                    в мире Arapferi.<br/>
                    Спросите её<br/>
                    о чём угодно<br/>
                    или общайтесь
                    в чате.</p>
            </div>
            <div className={'kvekana-buttons'}>
                <Button title={'чат'} img={chatLogo} imgHeight={20} imgWidth={20}/>
                <Button title={'голос'} img={voiceLogo} imgHeight={20} imgWidth={20}/>
            </div>
            <div className={'kvekana-buttons-2'}>
                <Button title={'получить презентацию проекта'} img={document} imgHeight={20} imgWidth={20}/>
                <Button title={'стать партнером проекта'} img={userAdd} imgHeight={20} imgWidth={20}/>
            </div>
        </div>
    );
};

export default MainBot;