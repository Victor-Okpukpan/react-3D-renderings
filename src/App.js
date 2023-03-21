import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import AnimatedSphere from './components/AnimatedSphere';
import Goku from './components/Goku'

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <Box />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <Goku />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
