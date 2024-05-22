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
  const [bigLogoToggle, setbigLogoToggle] = useState(true);

  return (
    <div>
      <form className="options">
        <div>
          <label>Brighten</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => setSoftLight(+e.target.value)}
            value={softLight}
          />
          <input
            className="number-input"
            type="number"
            min="0"
            max="100"
            onChange={(e) => setSoftLight(+e.target.value)}
            value={softLight}
          />
        </div>
        <div>
          <label>Darken</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => setBrightness(+e.target.value)}
            value={brightness}
          />
          <input
            className="number-input"
            type="number"
            min="0"
            max="100"
            onChange={(e) => setBrightness(+e.target.value)}
            value={brightness}
          />
        </div>
        <div>
          <label>Saturation</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => setBlackAndWhite(+e.target.value)}
            value={blackAndWhite}
          />

          <input
            className="number-input"
            type="number"
            min="0"
            max="100"
            onChange={(e) => setBlackAndWhite(+e.target.value)}
            value={blackAndWhite}
          />
        </div>
        <div>
          <label>"Overlay"</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              setOverlay(+e.target.value);
            }}
            value={overlay}
          />

          <input
            className="number-input"
            type="number"
            min="0"
            max="100"
            onChange={(e) => {
              setOverlay(+e.target.value);
            }}
            value={overlay}
          />
        </div>
        <div>
          <label>"Overlay" (invert)</label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              setOverlayInvert(+e.target.value);
            }}
            value={overlayInvert}
          />

          <input
            className="number-input"
            type="number"
            min="0"
            max="100"
            onChange={(e) => {
              setOverlayInvert(+e.target.value);
            }}
            value={overlayInvert}
          />
        </div>
        <div>
          <button
            style={{ opacity: 0 }}
            onClick={(e) => e.preventDefault()}
            onSubmit={(e) => e.preventDefault()}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBlackAndWhite(100);
              setSoftLight(0);
              setBrightness(0);
              setOverlay(0);
              setOverlayInvert(0);
            }}
          >
            Reset
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setbigLogoToggle(!bigLogoToggle);
            }}
          >
            Toggle Big Logo
          </button>
        </div>
      </form>
      <HeaderLayer bigLogoToggle={bigLogoToggle} blendMode="exclusion" z="3" />
      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
        blendMode="unset"
        z="10"
        opacity={`${integerToDecimal(brightness)}`}
        filter="unset"
      />

      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
        blendMode="hue"
        z="9"
        filter="unset"
        opacity={`${integerToDecimal(100 - blackAndWhite)}`}
      />

      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
        blendMode="overlay"
        z="4"
        filter="unset"
        opacity={`${integerToDecimal(overlay)}`}
      />

      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
        blendMode="overlay"
        z="5"
        opacity={`${integerToDecimal(overlayInvert)}`}
      />
      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
        blendMode="soft-light"
        filter="unset"
        z="1"
        opacity={`${integerToDecimal(softLight)}`}
      />
      <HeaderLayer
        bigLogoToggle={bigLogoToggle}
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
