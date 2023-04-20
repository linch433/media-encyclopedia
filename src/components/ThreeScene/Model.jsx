import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {useRef} from "react";

function useGLTFModel(src) {
  const {gl} = useThree();
  const loader = new GLTFLoader();

  // Set the correct path to your assets folder
  loader.setResourcePath("/assets/");

  return useLoader(GLTFLoader, src, (ext) => loader.parse(ext, gl));
}

export default function Model({src}) {
  const gltf = useGLTFModel(src);
  const modelRef = useRef(null);

  return <primitive ref={modelRef} object={gltf.scene} scale={[5, 5, 5]}/>;
}
