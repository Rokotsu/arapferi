import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBot from "./components/main-bot";
import VideoPlayer from "./components/VideoPlayer";
import InfoContent from "./components/InfoContent";
import insites from "./components/insites";
import Insites from "./components/insites";
import InfoCard from "./components/InfoCard";
import Line2 from './UI/img/Line 2.png'
import Line3 from './UI/img/Line 3.png'
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Contacts from "./components/Contacts";


function App() {
  return (
    <div>
      <div className="main-page">
          <Header />
          <MainBot />
      </div>
        <div className={'vd'}>
            <VideoPlayer />
        </div>
        <div className={'info'}>
            <InfoContent />
        </div>
        <div className={'insites'}>
            <Insites />
        </div>
        <div className={'cards'}>
            <InfoCard />
            <img src={Line2} />
            <img src={Line3} />
        </div>
        <div className={'roadmap'}>
            <Roadmap />
            <h1>Карта фестиваля</h1>
        </div>
        <div className={'team-section'}>
            <Team />
        </div>
        <div className={'contacts'}>
            <Contacts />
        </div>
    </div>
  );
}

export default App;
