import React, { useEffect, useState } from "react";
import CanvasHolder from "./CanvasHolder.component";
import Iframe from "./Iframe.component";

const SceneSwitcher = () => {
  const [switcher, setSwitcher] = useState(true);
  const [switcherIFrame, setSwitcherIFrame] = useState(true);
  const [switcherCanvas, setSwitcherCanvas] = useState(false);
  const [unlockButton, setUnlockButton] = useState(true);

  const switcherHandler = () => {
    setUnlockButton(false);
    if (switcher) {
      setSwitcherIFrame((prev) => !prev);
      setTimeout(() => {
        setSwitcherCanvas((prev) => !prev);
      }, 1500);
    } else {
      setSwitcherCanvas((prev) => !prev);
      setTimeout(() => {
        setSwitcherIFrame((prev) => !prev);
      }, 1500);
    }
    setTimeout(() => {
      setSwitcher((prev) => !prev);
    }, 1000);

    setTimeout(() => {
      setUnlockButton(true);
    }, 2500);
  };

  return (
    <>
      {unlockButton && (
        <button className="button-Switcher" onClick={switcherHandler} />
      )}

      {switcher ? (
        <div
          style={{
            height: "100%",
            opacity: switcherIFrame ? 1 : 0,
            transition: "opacity 1s",
          }}
        >
          <Iframe />
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            opacity: switcherCanvas ? 1 : 0,
            transition: "opacity 1s",
          }}
        >
          <CanvasHolder />
        </div>
      )}
    </>
  );
};

export default SceneSwitcher;
