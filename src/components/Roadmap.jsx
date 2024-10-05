import React from 'react';
import '../css/roadmap.css'
import roadmapImg from '../UI/img/Group16.png'
import Line2 from '../UI/img/Line 2.png'
import Line3 from '../UI/img/Line 3.png'

const Roadmap = () => {
    return (
        <div className={'roadmap-main'}>
            <div className={'roadmap-header'} >
                <h1>Roadmap проекта</h1>
                <p>Для просмотра поинтов дорожной карты, наведите курсор на временной отрезок</p>
            </div>
            <div className={'map-container'}>
                <img src={roadmapImg} width={'90%'}/>
                <div className={'scroll'}>
                    <p>Управление roadmap проекта</p>
                    <img src={Line2} />
                    <img src={Line3} />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;