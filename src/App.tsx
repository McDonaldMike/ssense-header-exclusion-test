import { useState } from "react";
import imgSkus from "./images.js";
import HeaderLayer from "./HeaderLayer.js";
import { integerToDecimal } from "./utils.js";

import "./App.scss";

function App() {
  const [brightness, setBrightness] = useState(0);
  const [blackAndWhite, setBlackAndWhite] = useState(100);
  const [overlay, setOverlay] = useState(0);
  const [overlayInvert, setOverlayInvert] = useState(0);
  const [softLight, setSoftLight] = useState(0);
  return (
    <div>
      <form className="options">
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setSoftLight(+e.target.value)}
          value={softLight}
        />
        <label>Brighten</label>
        <p>{softLight}</p>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setBrightness(+e.target.value)}
          value={brightness}
        />
        <label>Darken</label>
        <p>{brightness}</p>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setBlackAndWhite(+e.target.value)}
          value={blackAndWhite}
        />
        <label>Saturation</label>
        <p>{blackAndWhite}</p>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => {
            setOverlay(+e.target.value);
          }}
          value={overlay}
        />
        <label>"Overlay"</label>
        <p>{overlay}</p>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => {
            setOverlayInvert(+e.target.value);
          }}
          value={overlayInvert}
        />
        <label>"Overlay" (invert)</label>
        <p>{overlayInvert}</p>
        <button
          style={{ opacity: 0 }}
          onClick={(e) => e.preventDefault()}
          onSubmit={(e) => e.preventDefault()}
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setBlackAndWhite(0);
            setSoftLight(0);
            setBrightness(0);
            setOverlay(0);
            setOverlayInvert(0);
          }}
        >
          Reset
        </button>
      </form>
      <HeaderLayer blendMode="exclusion" z="3" />
      <HeaderLayer
        blendMode="unset"
        z="10"
        opacity={`${integerToDecimal(brightness)}`}
        filter="unset"
      />

      <HeaderLayer
        blendMode="hue"
        z="9"
        filter="unset"
        opacity={`${integerToDecimal(100 - blackAndWhite)}`}
      />

      <HeaderLayer
        blendMode="overlay"
        z="4"
        filter="unset"
        opacity={`${integerToDecimal(overlay)}`}
      />

      <HeaderLayer
        blendMode="overlay"
        z="5"
        opacity={`${integerToDecimal(overlayInvert)}`}
      />
      <HeaderLayer
        blendMode="soft-light"
        filter="unset"
        z="1"
        opacity={`${integerToDecimal(softLight)}`}
      />
      <HeaderLayer
        blendMode="soft-light"
        filter="unset"
        z="1"
        opacity={`${integerToDecimal(softLight)}`}
      />

      <div className="main">
        {Object.keys(imgSkus).map((section: string) => {
          return (
            <div className="img-section">
              <p className="section-title">{section}</p>
              {imgSkus[section].map((sku: string, index: number) => (
                <div
                  className="image-container"
                  style={{
                    width: `${
                      index < 3
                        ? `calc(33.333% - 10px)`
                        : index < 7
                        ? `calc(25% - 10px)`
                        : `calc(11.111% - 10px)`
                    }`,
                  }}
                >
                  <div className="new-filter" />
                  <img
                    src={`https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_3.0/${sku}_1`}
                  ></img>
                </div>
              ))}
            </div>
          );
        })}
        <div style={{ width: "100vw", height: "100vh" }} />
      </div>
    </div>
  );
}
export default App;
