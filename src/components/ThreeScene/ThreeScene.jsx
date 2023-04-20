import {useMemo, Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

import Model from "./Model.jsx";

function ThreeScene({src}) {
  const size = useMemo(() => ({width: 854, height: 480}), []);

  return (
    <Canvas
      style={{width: size.width, height: size.height}}
      camera={{fov: 20, aspect: window.innerWidth / window.innerHeight, near: 1, far: 1000, position: [0, 0, 96]}}
      shadows
    >
      <Suspense fallback={null}>
        <Model src={src}/>
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={false}/>
    </Canvas>
  );
}

export default ThreeScene;
