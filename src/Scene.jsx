import {
  ContactShadows,
  Float,
  PresentationControls,
  Environment,
  Html,
} from "@react-three/drei";
import { useState, useEffect } from "react";
import Computer from "./components/Computer";
import SafariWarning from "./components/SafariWarning";

function Scene() {
  function isMobile() {
    if (window.innerWidth <= 1024) {
      return true;
    } else {
      return false;
    }
  }

  window.onresize = isMobile;

  const [showSafariWarning, setShowSafariWarning] = useState(false);

  useEffect(() => {
    const isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf("Apple") > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("CriOS") == -1 &&
      navigator.userAgent.indexOf("FxiOS") == -1;

    if (isSafari && isMobile()) {
      setShowSafariWarning(true);
    }
  }, []);

  return (
    <mesh position-z={0}>
      <Html position={[-1, 1.5, 0]}>
        {showSafariWarning && (
          <SafariWarning onClose={() => setShowSafariWarning(false)} />
        )}
      </Html>
      <Environment preset="park" />
      <Float rotationIntensity={0.3}>
        <PresentationControls
          enabled={!isMobile()}
          polar={[-0.2, 0.2]}
          azimuth={[-1.5, 1.3]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          center
        >
          <Computer />
        </PresentationControls>
      </Float>

      <ContactShadows position-y={-1.5} opacity={0.6} scale={5} blur={2.4} />
    </mesh>
  );
}

export default Scene;
