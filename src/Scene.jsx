import { Text, PresentationControls, OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import * as THREE from 'three'

function Scene() {
  // model imports
  const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  // perf toggle
  const { perfVisible } = useControls('performance', {
    perfVisible: true
})

// const { namePostion } = useControls('debug', {
//   namePostion: [0, 0, 1]
// })

    return <>
    {/* <OrbitControls makeDefault/> */}
    { perfVisible && <Perf position="top-left" /> }

    <Stage
            shadows={ { type: 'contact', opacity: 0.2, blur: 3 } }
            environment="sunset"
            preset="portrait"
            intensity={ 1 }
        />

    {/* <Spotlight
       distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}
      <mesh 
      position={[-3, -1, 0]}>
        <PresentationControls
            // global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 4, 4 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
            center
            >
        <primitive 
          object={phone.scene} 
          scale={0.5}
          rotation={[-0.2, 0, 0]}
          />
            <Text
              // font=""
              color={'black'}
              fontSize={ 0.1 }
              // position={ [ 0, 0, 0.03 ] }
              position={[0.1, 0.7, -0.08]}
              rotation={[-0.2, 0, 0]}
              maxWidth={ 0.6 }
              textAlign= 'center'
            >
              "Hello World."
              ~~~
              Brandon Ly,
              Software Developer
            </Text>
    </PresentationControls>
    </mesh>
        <primitive 
          object={computer.scene} 
          position={[0, -1, 0]}
          />
    </>
}

export default Scene
