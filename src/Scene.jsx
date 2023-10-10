import {
  ContactShadows,
  Float,
  PresentationControls,
  Environment
} from "@react-three/drei";
import Computer from "./components/Computer";

function Scene() {
  return (
    <mesh position-z={0}>

      <Environment preset="park"/>
      <Float rotationIntensity={0.3}>
        <PresentationControls
          polar={[-0.2, 0.2]}
          azimuth={[-1.5, 1.3]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          center
        >
          <Computer />
        </PresentationControls>
      </Float>

      <ContactShadows position-y={-1.5} opacity={0.6} scale={5} blur={2.4} />
    </mesh>
  );
}

export default Scene;
