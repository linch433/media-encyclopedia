export default function Ground() {
  return (
    <mesh
      castShadow={true}
      receiveShadow={true}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[100, 100, 1, 1]}/>
      <shadowMaterial opacity={1}/>
    </mesh>
  )
}