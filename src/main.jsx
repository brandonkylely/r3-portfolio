import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Scene from "./Scene";
import Loading from "./components/Loading";
import { Canvas } from "@react-three/fiber";
import "./index.css";

/*
 * Mobile detection
 **/

function isMobile() {
  if (window.innerWidth <= 1024) {
    return true;
  } else {
    return false;
  }
}

window.onresize = isMobile;

if (isMobile()) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-0.5, 1.5, 5.6],
      }}
    >
      <Suspense fallback={<Loading />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-0.5, 1.5, 4.6],
      }}
    >
      <Suspense fallback={<Loading />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
