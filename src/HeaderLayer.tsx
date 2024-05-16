import Logo from "./assets/ssense_logo_v2.svg?react";

import "./App.scss";

function HeaderLayer({ blendMode, z, filter = "invert(1)", opacity = "1" }) {
  return (
    <div
      className="header"
      style={{ mixBlendMode: blendMode, zIndex: z, filter, opacity }}
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
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
        <Logo className="logo" />
      </div>
      <Logo className="big-logo" />
    </div>
  );
}
export default HeaderLayer;
