import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import Three from "./component/three"

import "./App.css"

function App() {
  return (
    <Canvas id="three-canvas-container">
      <Suspense fallback={null}>
        <Three/>
      </Suspense>
    </Canvas>
  )
}

export default App
