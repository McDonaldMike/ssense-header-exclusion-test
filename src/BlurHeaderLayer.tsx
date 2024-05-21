import "./App.scss";
import { useState, useEffect } from 'react'

function BlurHeaderLayer({ blur, navRef }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(navRef)
    if (navRef.current) {
      setHeight(navRef.current.clientHeight);
      setWidth(navRef.current.clientWidth);
    }
  }, [setHeight, setWidth, navRef]);

  return (
    <div
      className="header"
      style={{
        background: "inherit",
        height,
        width,
        zIndex: 1,
        opacity: 0.9,
        backdropFilter: blur,
        mixBlendMode: "exclusion",
        mask: "url(//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg)",
      }}
    >
      <div className="header-row">
        <div className="header-left">
          <p>EXCLUSION EFFECT TEST</p>
        </div>
        <div className="header-middle">
          <p>MENSWEAR</p>
          <p>WOMENSWEAR</p>
          <p>KIDSWEAR</p>
          <p>EVERYTHING ELSE</p>
          <p>SELF CARE</p>
          <p>TECH</p>
          <p>SEARCH</p>
        </div>
        <div className="header-right">
          <p>ENGLISH</p>
          <p>ACCOUNT</p>
          <p>WISHLIST</p>
          <p>BAG (0)</p>
        </div>
      </div>
      <div className="logo-row">
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
          className="logo"
        />
      </div>
      <img
        src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
        alt="SSENSE"
        className="big-logo"
      />
    </div>
  );
}
export default BlurHeaderLayer;

