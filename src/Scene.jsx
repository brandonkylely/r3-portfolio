import { OrbitControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import * as THREE from 'three'

function Scene() {
  const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  const { perfVisible } = useControls('performance', {
    perfVisible: true
})

    return <>
    <OrbitControls makeDefault/>
    { perfVisible && <Perf position="top-left" /> }

    {/* <Spotlight
       distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}
    <primitive 
      object={phone.scene} 
      position={[-3, -1, 0]}/>
    <primitive 
      object={computer.scene} 
      position={[0, -1, 0]}
      />
    </>
}

export default Scene
