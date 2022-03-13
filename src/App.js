import "./App.css";
// import { saveAs } from "file-saver";
// import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
// import { toBlob } from "canvas-toBlob";


import Backgrounds from "./components/alpaca/Backgrounds";
import Neck from "./components/alpaca/Neck";
import Accessories from "./components/alpaca/Accessories";
import Ears from "./components/alpaca/Ears";
import Eyes from "./components/alpaca/Eyes";
import Hair from "./components/alpaca/Hair";
import Leg from "./components/alpaca/Leg";
import Mouth from "./components/alpaca/Mouth";
import Nose from "./components/alpaca/Nose";

import React, { useState } from "react";

function App() {
  const [currentMenu, setCurrentMenu] = useState("background");
  const [background, setBackground] = useState("blue50");
  const [neck, setNeck] = useState("default");
  const [accessories, setAccessories] = useState("none");
  const [ears, setEars] = useState("default");
  const [eyes, setEyes] = useState("default");
  const [hair, setHair] = useState("elegant");
  const [leg, setLeg] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [nose, setNose] = useState("default");

  const alpaca = {
    accessories: [
      { label: "Earings", value: "earings" },
      { label: "Flower", value: "flower" },
      { label: "Glasses", value: "glasses" },
      { label: "Headphone", value: "headphone" },
      { label: "None", value: "none" },
    ],
    ears: [
      { label: "Default", value: "default" },
      { label: "Tiltbackward", value: "tilt-backward" },
      { label: "Tiltforward", value: "tilt-forward" },
    ],
    hair: [
      { label: "Default", value: "default" },
      { label: "Curls", value: "curls" },
      { label: "Elegant", value: "elegant" },
      { label: "Quiff", value: "quiff" },
      { label: "Short", value: "short" },
      { label: "Bang", value: "bang" },
    ],
    leg: [
      { label: "Default", value: "default" },
      { label: "Bubbletea", value: "bubble-tea" },
      { label: "Cookie", value: "cookie" },
      { label: "Gameconsole", value: "game-console" },
      { label: "Tiltbackward", value: "tilt-backward" },
      { label: "Tiltforward", value: "tilt-forward" },
    ],
    mouth: [
      { label: "Default", value: "default" },
      { label: "Eating", value: "eating" },
      { label: "Laugh", value: "laugh" },
      { label: "Tongue", value: "tongue" },
      { label: "Astonished", value: "astonished" },
    ],
    background: [
      { label: "blue50", value: "blue50" },
      { label: "blue60", value: "blue60" },
      { label: "blue70", value: "blue70" },
      { label: "darkblue30", value: "darkblue30" },
      { label: "darkblue50", value: "darkblue50" },
      { label: "darkblue70", value: "darkblue70" },
      { label: "green50", value: "green50" },
      { label: "green60", value: "green60" },
      { label: "green70", value: "green70" },
      { label: "grey40", value: "grey40" },
      { label: "grey70", value: "grey70" },
      { label: "grey80", value: "grey80" },
      { label: "red50", value: "red50" },
      { label: "red60", value: "red60" },
      { label: "red70", value: "red70" },
      { label: "yellow50", value: "yellow50" },
      { label: "yellow50", value: "yellow50" },
      { label: "yellow70", value: "yellow70" },
    ],
    neck: [
      { label: "Default", value: "default" },
      { label: "Bend Backward", value: "bend-backward" },
      { label: "Bend Fackward", value: "bend-forward" },
      { label: "Thick", value: "thick" },
    ],
    nose: [{ label: "Default", value: "default" }],
    eyes: [
      { label: "Default", value: "default" },
      { label: "Angry", value: "angry" },
      { label: "Naughty", value: "naughty" },
      { label: "panda", value: "panda" },
      { label: "Smart", value: "smart" },
      { label: "Star", value: "star" },
    ],
  };

  return (
    <div className="w-100 m-5">
      <p className="title"> ALPACA GENERATOR </p>

      <div className="flex flex-row mt-11">
        <div className="basis-1/2">
          <div className="mx-auto" id="my-canvas">
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
        </div>
        <div className="justify-center basis-1/2">
          <div className="my-5">
            <header className="header">ACCESSORIZE THE ALPACA'S</header>

            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("background")}
            >
              background
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("neck")}
            >
              neck
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("accessories")}
            >
              accessories
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("ears")}
            >
              ears
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("hair")}
            >
              hair
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("leg")}
            >
              leg
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("mouth")}
            >
              mouth
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("nose")}
            >
              nose
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
              onClick={() => setCurrentMenu("eyes")}
            >
              eyes
            </button>
          </div>

          <div className="my-5">
            <header className="header">STYLE</header>

            {(() => {
              switch (currentMenu) {
                case "background":
                  return [
                    <div>
                      {alpaca.background.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setBackground(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "neck":
                  return [
                    <div>
                      {alpaca.neck.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setNeck(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "accessories":
                  return [
                    <div>
                      {alpaca.accessories.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setAccessories(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "ears":
                  return [
                    <div>
                      {alpaca.ears.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setEars(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "hair":
                  return [
                    <div>
                      {alpaca.hair.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setHair(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "leg":
                  return [
                    <div>
                      {alpaca.leg.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setLeg(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "mouth":
                  return [
                    <div>
                      {alpaca.mouth.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setMouth(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "nose":
                  return [
                    <div>
                      {alpaca.nose.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setNose(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                case "eyes":
                  return [
                    <div>
                      {alpaca.eyes.map((value) => {
                        return (
                          <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 my-1"
                            onClick={() => setEyes(`${value.value}`)}
                          >
                            {value.label}
                          </button>
                        );
                      })}
                    </div>,
                  ];
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/2"> </div>
        <div className="basis-1/4">
          <header className="header">Util</header>
          <div>
            {(() => {
              return (
                <button
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 red-blue-700 hover:border-red-500 rounded mx-1 my-1"
                  onClick={() => {
                    setBackground(alpaca.background[Math.floor(Math.random() * alpaca.background.length)].value);
                    setNeck(alpaca.neck[Math.floor(Math.random() * alpaca.neck.length)].value);
                    setAccessories(alpaca.accessories[Math.floor(Math.random() * alpaca.accessories.length)].value);
                    setEars(alpaca.ears[Math.floor(Math.random() * alpaca.ears.length)].value);
                    setEyes(alpaca.eyes[Math.floor(Math.random() * alpaca.eyes.length)].value);
                    setHair(alpaca.hair[Math.floor(Math.random() * alpaca.hair.length)].value);
                    setLeg(alpaca.leg[Math.floor(Math.random() * alpaca.leg.length)].value);
                    setMouth(alpaca.mouth[Math.floor(Math.random() * alpaca.mouth.length)].value);
                    setNose(alpaca.nose[Math.floor(Math.random() * alpaca.nose.length)].value);
                  }}
                >
                  Random
                </button>
              );
            })()}
          </div>

          <div>
            {(() => {
               var canvas = document.getElementById("my-canvas");
              return (
                
                <button
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 red-blue-700 hover:border-red-500 rounded mx-1 my-1"
                  onClick={() => {
                    var canvas = document.getElementById("my-canvas");
                    console.log(canvas);
                    // saveAsPng(canvas, { filename: 'Alpaca', printDate: true });
                    // var canvas = document.getElementById("my-canvas");
                    // canvas.toBlob(function (blob) {
                    //   saveAs(blob, "Alpaca.png");
                    // });
                  }}
                >
                  Save Image
                </button>
              );
            })()}
          </div>

          <div>
            {/* {process.env.REACT_APP_BITLY_KEY} */}
            {(() => {
              return (
                <button
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 red-blue-700 hover:border-red-500 rounded mx-1 my-1"
                  onClick={async () => {
                    // const BitlyClient = require('bitly').BitlyClient;
                    // const bitly = new BitlyClient(process.env.REACT_APP_BITLY_KEY);
                    // const response = await bitly.shorten('https://github.com/cool-hooks/react-shorten-url');
                    // console.log(`Your shortened bitlink is ${response.link}`);

                    // const bitly = new BitlyClient("22aba0aa901c78e5e50cc8aabf3f1e7a606537d3", {});

                    // let result;
                    // try {
                    //   result = await bitly.shorten("https://github.com/tanepiper/node-bitly");
                    // } catch (e) {
                    //   throw e;
                    // }
                    // console.log('shorten!!!!', result)
                    // return result;
                  }}
                >
                  Shorten URL
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
