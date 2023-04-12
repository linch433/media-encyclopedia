import {useEffect, useRef} from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(640, 480);
    renderer.setClearColor(0xffffff, 0);
    canvas.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 96;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const geometry = new THREE.BoxGeometry(16, 16, 16);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;

      renderer.render(scene, camera);
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
    };
  }, []);


  return <div ref={canvasRef}/>;
}

export default ThreeScene;
