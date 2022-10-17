import './App.css';
import playButtonIcon from "./assets/play-button.svg"
import stopIcon from "./assets/stop.svg"
import CardDay from './components/CardDay';

function App() {
  return (
    <div className="App">
      <div className='container-inputs'>
        <input className='description-bar-input' placeholder='What are you working on?'/>
        <input className='cicle-input'/>
        <span className='double-points'>:</span>
        <input className='cicle-input'/>
        <span className='double-points'>:</span>
        <input className='cicle-input'/>
        <button className='button-action'><img className='img-button' src={stopIcon} alt='icon'/></button>
      </div>
      <div className='container-day-cards'>
        <CardDay/>
      </div>
    </div>
  );
}

export default App;
