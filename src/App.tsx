import { useState } from "react";
import imgSkus from "./images.js";
import Logo from "./assets/ssense_logo_v2.svg?react";
import HeaderLayer from "./HeaderLayer.js";

import "./App.scss";

function App() {
  const [brightness, setBrightness] = useState(0);
  const [blackAndWhite, setBlackAndWhite] = useState(0);
  const [overlay, setOverlay] = useState(0);
  const [overlayInvert, setOverlayInvert] = useState(0);
  const [softLight, setSoftLight] = useState(0);
  return (
    <div>
      <form className="options">
        <input
          type="number"
          min="0"
          max="1"
          step=".01"
          onChange={(e) => setSoftLight(+e.target.value)}
          value={softLight}
        />
        <label>Brighten</label>

        <input
          type="number"
          min="0"
          max="1"
          step=".01"
          onChange={(e) => setBrightness(+e.target.value)}
          value={brightness}
        />
        <label>Darken</label>

        <input
          type="number"
          min="0"
          max="1"
          step=".01"
          onChange={(e) => setBlackAndWhite(+e.target.value)}
          value={blackAndWhite}
        />
        <label>Saturation</label>

        <input
          type="number"
          min="0"
          max="1"
          step=".01"
          onChange={(e) => {
            setOverlay(+e.target.value);
          }}
          value={overlay}
        />
        <label>"Overlay"</label>

        <input
          type="number"
          min="0"
          max="1"
          step=".01"
          onChange={(e) => {
            setOverlayInvert(+e.target.value);
          }}
          value={overlayInvert}
        />
        <label>"Overlay" (invert)</label>

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
        opacity={`${brightness}`}
        filter="unset"
      />

      <HeaderLayer
        blendMode="hue"
        z="9"
        filter="unset"
        opacity={`${blackAndWhite}`}
      />

      <HeaderLayer
        blendMode="overlay"
        z="4"
        filter="unset"
        opacity={`${overlay}`}
      />

      <HeaderLayer blendMode="overlay" z="4" opacity={`${overlayInvert}`} />
      <HeaderLayer
        blendMode="soft-light"
        filter="unset"
        z="1"
        opacity={`${softLight}`}
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
