import React from 'react'
import ReactDOM from 'react-dom/client'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas>
    <Scene />
  </Canvas>
)
