import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <Canvas id='three-canvas-container'>
      <Suspense fallback={null}>
        <Three/>
      </Suspense>
    </Canvas>
  )
}

export default App
