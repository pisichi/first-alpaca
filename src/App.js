import logo from "./logo.svg";
import "./App.css";

import Backgrounds from "./components/alpaca/Backgrounds";
import Neck from "./components/alpaca/Neck";
import Accessories from "./components/alpaca/Accessories";
import Ears from "./components/alpaca/Ears";
import Eyes from "./components/alpaca/Eyes";
import Hair from "./components/alpaca/Hair";
import Leg from "./components/alpaca/Leg";
import Mouth from "./components/alpaca/Mouth";
import Nose from "./components/alpaca/Nose";

// import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { useState } from "react";

function App() {
  const [currentMenu, setCurrentMenu] = useState("background");
  const [background, setBackground] = useState("default");
  const [neck, setNeck] = useState("default");
  const [accessories, setAccessories] = useState("default");
  const [ears, setEars] = useState("default");
  const [eyes, setEyes] = useState("default");
  const [hair, setHair] = useState("elegant");
  const [leg, setLeg] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [nose, setNose] = useState("default");
  return (
    <div className="App ">
      <p className="title"> ALPACA GENERATOR </p>

      <div className="Alpaca">
        <Neck neck={neck} />
        <Backgrounds background={background} />
        <Accessories accessories={accessories} />
        <Ears ears={ears} />
        <Hair hair={hair} />
        <Leg leg={leg} />
        <Mouth mouth={mouth} />
        <Nose nose={nose} />
        <Eyes eyes={eyes} />
      </div>

      <div className="Menu1">
        <header>ACCESSORIZE THE ALPACA'S</header>
        

        <button onClick={() => setCurrentMenu("background")}>background</button>
        <button onClick={() => setCurrentMenu("neck")}>neck</button>
        <button onClick={() => setCurrentMenu("accessories")}>accessories</button>
        <button onClick={() => setCurrentMenu("ears")}>ears</button>
        <button onClick={() => setCurrentMenu("hair")}>hair</button>
        <button onClick={() => setCurrentMenu("leg")}>leg</button>
        <button onClick={() => setCurrentMenu("mouth")}>mouth</button>
        <button onClick={() => setCurrentMenu("nose")}>nose</button>
        <button onClick={() => setCurrentMenu("eyes")}>eyes</button>
      </div>

      <div className="Menu2">
        <header>STYLE</header>

        {(() => {
          switch (currentMenu) {
            case "background":
              return [
                <button onClick={() => setBackground("blue50")}>blue50</button>,
                <button onClick={() => setBackground("blue60")}>blue60</button>,
                <button onClick={() => setBackground("blue70")}>blue70</button>,
                <button onClick={() => setBackground("darkblue30")}>darkblue30</button>,
                <button onClick={() => setBackground("darkblue50")}>darkblue50</button>,
                <button onClick={() => setBackground("darkblue70")}>darkblue70</button>,
                <button onClick={() => setBackground("green50")}>green50</button>,
                <button onClick={() => setBackground("green60")}>green60</button>,
                <button onClick={() => setBackground("green70")}>green70</button>,
                <button onClick={() => setBackground("grey40")}>grey40</button>,
                <button onClick={() => setBackground("grey70")}>grey70</button>,
                <button onClick={() => setBackground("grey80")}>grey80</button>,
                <button onClick={() => setBackground("red50")}>red50</button>,
                <button onClick={() => setBackground("red60")}>red60</button>,
                <button onClick={() => setBackground("red70")}>red70</button>,
                <button onClick={() => setBackground("yellow50")}>yellow50</button>,
                <button onClick={() => setBackground("yellow60")}>yellow60</button>,
                <button onClick={() => setBackground("yellow70")}>yellow70</button>,
              ];
            case "neck":
              return [
                <button onClick={() => setNeck("default")}>default</button>,
                <button onClick={() => setNeck("bendbackward")}>bendbackward</button>,
                <button onClick={() => setNeck("bendforward")}>bendforward</button>,
                <button onClick={() => setNeck("thick")}>thick</button>,
              ];
            case "accessories":
              return [
                <button onClick={() => setAccessories("earings")}>earings</button>,
                <button onClick={() => setAccessories("flower")}>flower</button>,
                <button onClick={() => setAccessories("glasses")}>glasses</button>,
                <button onClick={() => setAccessories("headphone")}>headphone</button>,
              ];
            case "ears":
              return [
                <button onClick={() => setEars("default")}>default</button>,
                <button onClick={() => setEars("tiltbackward")}>tiltbackward</button>,
                <button onClick={() => setEars("tiltforward")}>tiltforward</button>,
              ];
            case "hair":
              return [
                <button onClick={() => setHair("default")}>default</button>,
                <button onClick={() => setHair("curls")}>curls</button>,
                <button onClick={() => setHair("elegant")}>elegant</button>,
                <button onClick={() => setHair("fancy")}>fancy</button>,
                <button onClick={() => setHair("quiff")}>quiff</button>,
                <button onClick={() => setHair("short")}>short</button>,
                <button onClick={() => setHair("bang")}>bang</button>,
              ];
            case "leg":
              return [
                <button onClick={() => setLeg("default")}>default</button>,
                <button onClick={() => setLeg("bubbletea")}>bubbletea</button>,
                <button onClick={() => setLeg("cookie")}>cookie</button>,
                <button onClick={() => setLeg("gameconsole")}>gameconsole</button>,
                <button onClick={() => setLeg("tiltbackward")}>tiltbackward</button>,
                <button onClick={() => setLeg("tiltforward")}>tiltforward</button>,
              ];
            case "mouth":
              return [
                <button onClick={() => setMouth("default")}>default</button>,
                <button onClick={() => setMouth("eating")}>eating</button>,
                <button onClick={() => setMouth("laugh")}>laugh</button>,
                <button onClick={() => setMouth("tongue")}>tongue</button>,
                <button onClick={() => setMouth("astonished")}>astonished</button>,
              ];
            case "nose":
              return [<button onClick={() => setNose("default")}>default</button>];
            case "eyes":
              return [
                <button onClick={() => setEyes("default")}>default</button>,
                <button onClick={() => setEyes("naughty")}>naughty</button>,
                <button onClick={() => setEyes("panda")}>panda</button>,
                <button onClick={() => setEyes("smart")}>smart</button>,
                <button onClick={() => setEyes("star")}>star</button>,
                <button onClick={() => setEyes("angry")}>angry</button>,
              ];
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
