import React from 'react';
import InfoCards from "./InfoCards";
import '../css/info-card.css'
import bgImg1 from '../UI/img/cards_img/Rectangle3.png'
import Img2 from '../UI/img/cards_img/28.png'
import Img3 from '../UI/img/cards_img/18.png';
import bgImg2 from '../UI/img/cards_img/Rectangle2.png';
import bgImg3 from '../UI/img/cards_img/Rectangle4.png';
import GreyButton from "../UI/btn/GreyButton";



const InfoCard = (props) => {
    return (
        <div className={'info-card'}>
            <InfoCards background={bgImg1} title={'Индекс\n' +
                'инновационного\n' +
                'развития WIPO'} text={'Как Arapferi повлияет на статистику'}
                       buttons={[
                           <GreyButton key='1' name={'индекс инноваций'}/>,
                           <GreyButton key='2' name={'культурное влияние'}/>,
                       ]}
            />
            <InfoCards background={bgImg2}  title={'Евроинтеграция\n' +
                'и престиж\n' +
                'Грузии'} text={'Arapferi как визитная карточка Грузии'}
                       buttons={[
                           <GreyButton key='1' name={'международный образ'}/>,
                           <GreyButton key='2' name={'культурное влияние'}/>,
                       ]}/>
            <InfoCards background={bgImg3} title={'Arapferi\n' +
                'за глобальные\n' +
                'цели'} text={'Достигаемые цели устойчивого развития'}
                       buttons={[
                           <GreyButton key='1' name={'цели оон'}/>,
                           <GreyButton key='2' name={'международный образ'}/>,
                       ]}
            />
        </div>
    );
};

export default InfoCard;