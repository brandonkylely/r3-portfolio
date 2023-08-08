import {
  Sparkles,
  Shadow,
  ContactShadows,
  Float,
  Html,
  Text,
  PresentationControls,
  OrbitControls,
  Sky,
  useGLTF,
  Stage,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import * as THREE from "three";
import { useState, useEffect } from "react";
import Computer from "./components/Computer";

// https://brandonkylely.github.io/practice-portfolio/
function Scene() {
  // model imports
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  // const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  // perf toggle

  // const { namePostion } = useControls('debug', {
  //   namePostion: [0, 1.5, -1.2]
  // })

  //     const { Performance } = useControls('Performance', {
  //       Performance: false
  //     })
  // const {Camera, Phone } = useControls('Scene', {
  //   Camera: {
  //     value: 0,
  //     step: 0.01,
  //     min: -1.5,
  //     max: 2.5
  // },
  //   // SparkleEffect: false,
  //   Phone: false
  // })

  /*
   * Mobile detection
   **/
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  return (
    <mesh position-z={0}>
      <ambientLight intensity={0.5} />
      {/* <OrbitControls makeDefault/> */}

      {/* {Performance && <Perf position="top-left" />} */}

      {/* <Stage
            shadows={ { type: 'contact', opacity: 0.2, blur: 3 } }
            environment="city"
            preset="portrait"
            intensity={ 2 }
        /> */}

      {/* <Spotlight
       distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}

      <Float rotationIntensity={0.6} visible={false}>
        <mesh position={[-3, -1, 0]}>
          <PresentationControls
            // global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-4, 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
            center
          >
            <Sparkles
              count={50}
              position-x={0.1}
              position-y={0.7}
              // noise={[1, 1, 1]}
              // visible={SparkleEffect}
              visible={false}
            />
            <primitive
              object={phone.scene}
              scale={0.5}
              rotation={[-0.2, 0, 0]}
            />
            <Text
              font="./schoolbell-v18-latin-regular.woff"
              color={"black"}
              fontSize={0.1}
              // position={ [ 0, 0, 0.03 ] }
              position={[0.1, 0.7, -0.08]}
              rotation={[-0.2, 0, 0]}
              maxWidth={0.6}
              textAlign="center"
            >
              "Hello World." ~~~~~ Brandon Ly, Software Engineer
            </Text>
          </PresentationControls>

          {/* <Shadow
              color="black"
              colorStop={0}
              opacity={0.5}
              position={[0.1, -1, 0.1]}
              /> */}
        </mesh>
      </Float>
      <Float rotationIntensity={0.3}>
        {/* <primitive 
          object={computer.scene} 
          position={[0, -1, 0]}
          > */}
        <PresentationControls
          // global
          // rotation={ [ 0.13, 0.1, 0 ] }
          polar={[-0.2, 0.2]}
          azimuth={[-1.5, 1.3]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          center
        >
          {/* <mesh>

          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={ 1.17 }
            position= {[0, 0.52, -1.4]}
            rotation-x={ - 0.256 }
            
          >
          <iframe src="https://brandonkylely.github.io/practice-portfolio/" />
          </Html>
          </mesh> */}
          {/* </primitive> */}
          <Computer />
        </PresentationControls>
      </Float>

      <ContactShadows position-y={-1.5} opacity={0.6} scale={5} blur={2.4} />
    </mesh>
  );
}

export default Scene;
