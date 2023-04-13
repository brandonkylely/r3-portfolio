import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Scene from "./Scene";
import Loading from "./components/Loading";
import { Canvas } from "@react-three/fiber";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-0.5, 1.7, 3.2],
    }}
  >
  <Suspense fallback={<Loading />}> 
    <Scene />
  </Suspense>
  </Canvas>
);
