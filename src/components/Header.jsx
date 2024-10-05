import React from 'react';
import '../css/header.css'
import '../UI/btn/Button'
import Button from "../UI/btn/Button";
import lockIcon from '../UI/img/lock.png';

const Header = () => {
    return (
        <div className={'header-flex'}>
            <div className={'header-item-flex'}>
                <p>О проекте</p>
                <p>Roadmap проекта</p>
                <p>Карта фестиваля</p>
                <p>Команда и партнеры</p>
                <img src={lockIcon} className={'nav-lock-icon'}/><p>Аналитика</p>
                <p>Контакты</p>
            </div>

            <div className={'header-item-flex'}>
                <Button title={'Ru >'} alt={''}/>
            </div>
        </div>
    );
};

export default Header;