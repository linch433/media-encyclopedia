import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

function ThreeScene({src}) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  const loadGLTFModel = (url, scene) => {
    const loader = new GLTFLoader();

    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          gltf.scene.scale.set(5, 5, 5);
          scene.add(gltf.scene);
          resolve(gltf);
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the GLTF model:', error);
          reject(error);
        }
      );
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(854, 480);
    renderer.setClearColor(0xffffff, 1);
    canvas.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 96);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    loadGLTFModel(src, scene).then(() => {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target = modelRef.current.position;
      controls.enableZoom = false;
      controls.enablePan = false;
      controlsRef.current = controls;
    });

    const animate = () => {
      animationFrameId.current = requestAnimationFrame((time) => {
        renderer.render(scene, camera);
        animate();
      });
    };

    animate();
    rendererRef.current = renderer;

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      if (rendererRef.current) {
        const {domElement} = rendererRef.current;
        if (domElement && domElement.parentNode) {
          domElement.parentNode.removeChild(domElement);
        }
        rendererRef.current.dispose();
      }

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, []);

  return <div ref={canvasRef}></div>;
}

export default ThreeScene;
