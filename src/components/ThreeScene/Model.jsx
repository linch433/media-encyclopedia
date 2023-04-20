import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {useRef} from "react";

export default function Model({src}) {
  const gltf = useLoader(GLTFLoader, src);
  const modelRef = useRef(null);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[5, 5, 5]}
    />
  );
}