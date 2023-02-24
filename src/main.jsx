import React from 'react'
import ReactDOM from 'react-dom/client'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas
  camera={{
    fov: 45,
    near: 0.1,
    far: 2000,
    position: [ -0.5, 1.5, 3.6 ]
    }}
    >

    <Scene />
  </Canvas>
)
