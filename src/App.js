import { useState } from "react";
import "./App.css";
import playButtonIcon from "./assets/play-button.svg";
import stopIcon from "./assets/stop.svg";
import CardDay from "./components/CardDay";

function App() {
  const [formState, setFormState] = useState({
    task: "",
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "task"){
      setFormState({ ...formState, [name]: value });
      return
    }
    const timeToSet = Number(value)

    if (name === "hours" && (timeToSet > 24 || timeToSet < 0)) return;
    if (name === "minutes" && (timeToSet > 59|| timeToSet < 0)) return;
    if (name === "seconds" && (timeToSet > 59|| timeToSet < 0)) return;

    setFormState({ ...formState, [name]: timeToSet }); 
  };
  return (
    <div className="App">
      <div className="container-inputs">
        <input
          name="task"
          className="description-bar-input"
          placeholder="What are you working on?"
          onChange={handleChange}
          value={formState.task}
        />
        <input
          name="hours"
          className="cicle-input"
          type="Number"
          onChange={handleChange}
          value={formState.hours}
        />
        <span className="double-points">:</span>
        <input
          name="minutes"
          className="cicle-input"
          type="Number"
          onChange={handleChange}
          value={formState.minutes}
        />
        <span className="double-points">:</span>
        <input
          name="seconds"
          className="cicle-input"
          type="Number"
          onChange={handleChange}
          value={formState.seconds}
        />
        <button className="button-action">
          <img className="img-button" src={stopIcon} alt="icon" />
        </button>
      </div>
      <div className="container-day-cards">
        <CardDay />
      </div>
    </div>
  );
}

export default App;
