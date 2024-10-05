import React from 'react';
import '../css/team.css'
import ArrowDown from '../UI/img/team/arrow-down.png'
import Ellipse from '../UI/img/team/Ellipse10.png'
import PhotoCard from '../UI/img/team/Ellipse7.png'

const Team = () => {
    return (
        <div className={'team'}>
            <div className={'team-header'}>
                <p id={'first'}>Команда</p>
                <p>Партнеры</p>
                <p>Друзья</p>
            </div>
            <div className={'team-container'}>
                <div className={'team-text'}>
                    <p>Наша команда - это основа успеха фестиваля.</p>
                    <p>Мы гордимся тем, что собрали команду высокопрофессиональных специалистов, обладающих глубокими знаниями и богатым опытом в самых разных областях. От праздничной режиссуры и продюсирования до финансово-юридических аспектов - каждый член нашей команды имеет более 15 лет опыта работы в своей сфере.</p>
                    <p>Мы объединили усилия для создания уникального и запоминающегося события.</p>
                </div>
                <div className={'btn-switch'}>
                    <img src={ArrowDown} width="45" height="45" className={'arrow-top'}/>
                    <img src={Ellipse} width={9} height={9} id={'img-1'}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={Ellipse} width={9} height={9}/>
                    <img src={ArrowDown} />
                </div>
                <div className={'team-content'}>
                    <img src={PhotoCard} width={206} height={206}/>
                    <div className={'team-content-text'}>
                        <h2>Владислав Киселев</h2>
                        <p>создатель проекта, режиссер и продюссер</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;