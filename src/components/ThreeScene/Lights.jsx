export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.1}/>
      <directionalLight
        color="white"
        position={[0, 0, 0]}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
}