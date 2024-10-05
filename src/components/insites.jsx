import React from 'react';
import '../css/insites.css'
import Lypa from '../UI/img/lypa.png';
import GreyButton from "../UI/btn/GreyButton";

const Insites = () => {
    return (
        <div>
            <div className={'insites-container'}>
                <h2>Инсайты Arapferi</h2>
                <p>В этом разделе мы раскрываем глубину и многогранность нашего фестиваля. Здесь каждая карточка посвящена уникальным аспектам Arapferi и их влиянию на культурную, инновационную и социальную сферы Грузии. От индекса инновационного развития до целевой аудитории фестиваля – узнайте, как Arapferi вдохновляет и способствует росту национального наследия.</p>
                <div className={'insites-input-section'}>
                    <div className={'content'}>
                        <img src={Lypa} width={25} height={25}/>
                        <input type={'text'} placeholder={'введите свой вопрос или интересующую тематику'} />
                        {/*<GreyButton />*/}
                    </div>
                    <GreyButton name={'поиск по тегам >'}/>
                </div>
            </div>
        </div>
    );
};

export default Insites;