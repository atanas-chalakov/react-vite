import { useState } from 'react'
// import beep from './assets/audio/electronic-school-bell-81033.mp3';

// const alarm = new Audio(beep);
let path = "./assets/audio/electronic-school-bell-81033.mp3";
let audio = new Audio(path);


function Alarm() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  //reset counter 
  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="Alarm">
      <button onClick={increase}>+</button>
      <span>{counter}</span>
      <button onClick={decrease}>-</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      {/* audioPlayer = ( */}
      <div className="count-number-equivelance-audioPlayer">
        <button id="equivalence-audio-button" onClick={() => audio.play()}>Soundclip!</button>
      </div>
      {/* );  */}
      <audio controls>
        <source src="./electronic-school-bell-81033.mp3" type="audio/mp3"></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Alarm
