import { ContactShadows, Float, Html, Text, PresentationControls, OrbitControls, Sky, useGLTF, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import * as THREE from 'three'
import Computer from './components/Computer'


// https://brandonkylely.github.io/practice-portfolio/
function Scene() {
  // model imports
  const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  // const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  // perf toggle
  const { perfVisible } = useControls('performance', {
    perfVisible: true
  })

// const { namePostion } = useControls('debug', {
//   namePostion: [0, 1.5, -1.2]
// })

const {scenePosition} = useControls('Camera', {
  scenePosition:     {
    value: 0,
    step: 0.01,
    min: -2,
    max: 2
}
})

    return (
    <mesh position-z={scenePosition}>
    {/* <ambientLight intensity={0.5}/> */}
    {/* <OrbitControls makeDefault/> */}
    { perfVisible && <Perf position="top-left" /> }

    <Stage
            shadows={ { type: 'contact', opacity: 0.2, blur: 3 } }
            environment="sunset"
            preset="portrait"
            intensity={ 2 }
        />

    {/* <Spotlight
       distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}
  <Float rotationIntensity={ 0.6 } >  
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
              font="/schoolbell-v18-latin-regular.woff"
              color={'black'}
              fontSize={ 0.1 }
              // position={ [ 0, 0, 0.03 ] }
              position={[0.1, 0.7, -0.08]}
              rotation={[-0.2, 0, 0]}
              maxWidth={ 0.6 }
              textAlign= 'center'
            >
              "Hello World."
              ~~~~~
              Brandon Ly,
              Software Developer
            </Text>
    </PresentationControls>
    </mesh>
    </Float>
    <Float rotationIntensity={ 0.3 } >  
        {/* <primitive 
          object={computer.scene} 
          position={[0, -1, 0]}
          > */}
        <PresentationControls
            // global
            // rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.2, 0.2 ] }
            azimuth={ [ - 1.5, 1.3 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
            center
            >
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 30 }
            color={ 'orange' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ 0, 0.55, - 1.15 ] }

          />
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

      <ContactShadows
            position-y={ - 1 }
            opacity={ 0.6 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </mesh>
    )
}

export default Scene
