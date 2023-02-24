/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React, { useRef, useState } from 'react'
import { Html, Text, useGLTF} from '@react-three/drei'
import {useControls} from 'leva'
import {useThree, extend, useFrame} from '@react-three/fiber'


export default function Computer(props, htmlVisible) {
  const [hingeRotation, setHingeRotation] = useState(3.13);
  const screenRef = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  let clicked=false;
  function open() {
    clicked=true;
    console.log("running open")
  }
  //   [3.13, 0, 0,]
//   const { screenRotation, logoRotation, logoPosition } = useControls('screen', {
//     screenRotation: [hingeRotation, 0, 0,],
//     logoRotation: [-Math.PI, 0, -Math.PI,],
//     logoPosition: [0, -0.112, -1.8,]
//   })

    useFrame((state, delta) => 
      {
          if (clicked && screenRef.current.rotation.x>=1.31){
              screenRef.current.rotation.x -= delta*0.8
              console.log("running rotate")
            }
        })

  return (
  <group {...props} dispose={null} position-y={-1}>
    {/* <Text
      // font=""
      color={'white'}
      fontSize={ 0.5 }
      position={[0, 1.2, 0]}
      rotation={[-0.2, 0, 0]}
      maxWidth={ 0.6 }
      textAlign= 'center'
    //   onClick={open}
    //   visible={textVisible}
    visible={false}
    >
      open?
    </Text> */}
<group position={[0, 0.52, 0,]} scale={[0.1, 0.1, 0.1,]} >
<mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} />
<mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
<mesh geometry={nodes.Circle001_2.geometry} material={materials.HeadPhoneHole} />
<mesh geometry={nodes.Circle001_3.geometry} material={nodes.Circle001_3.material} />
<mesh geometry={nodes.Circle001_4.geometry} material={nodes.Circle001_4.material} />
<mesh geometry={nodes.Circle001_5.geometry} material={materials.TouchbarBorder} />
<mesh geometry={nodes.Circle001_6.geometry} material={materials.Keyboard} />
{/* <mesh geometry={nodes.FrontCameraRing001.geometry} material={materials['CameraRIngBlack.002']} position={[-0.15, 19.57, -16.15,]} scale={5.8} /> */}
<mesh geometry={nodes.KeyboardKeyHole.geometry} material={nodes.KeyboardKeyHole.material} position={[-11.79, -0.15, -8.3,]} scale={5.8} />
<mesh geometry={nodes.RubberFoot.geometry} material={materials.DarkRubber} position={[-11.95, -0.75, 7.86,]} scale={5.8} />
<group position={[0.01, -0.21, -10.56,]} scale={5.8} >
<mesh geometry={nodes.Circle012.geometry} material={materials.HingeBlack} />
<mesh geometry={nodes.Circle012_1.geometry} material={materials.HingeMetal} />
</group>
<group position={[0, -0.51, 0,]} scale={5.8} >
<mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
<mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
</group>
<group position={[-11.79, -0.15, -8.3,]} scale={5.8} >
<mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
<mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
<mesh geometry={nodes.Circle_2.geometry} material={materials.Touchbar} />
</group>
<group ref={screenRef} 
// onClick={open} 
position={[0.01, -0.47, -10.41,]}
// rotation-x={hingeRotation} 
rotation={[1.31, 0, 0,]} 
scale={5.8} >
<mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} />
<mesh geometry={nodes.Circle002_1.geometry} material={materials.Screen} />
<mesh geometry={nodes.Circle002_2.geometry} material={materials.ScreenGlass} />
<mesh geometry={nodes.Circle002_3.geometry} material={materials.Rubber} />
<mesh geometry={nodes.Circle002_4.geometry} material={materials.DisplayGlass} />
<mesh geometry={nodes.AppleLogo000.geometry} material={materials['AppleLogo.004']} position={[0, -0.111, -1.8,]} rotation={[0, 0, 0,]} scale={[0.58, 0.58, 0.58,]} />
</group>
<group position={[12.2, 0.03, 0.6,]} scale={5.8} >
<mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} />
<mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
</group>
<group position={[-15.03, 0.03, 0.6,]} scale={5.8} >
<mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} />
<mesh geometry={nodes.Circle009_1.geometry} material={nodes.Circle009_1.material} />
</group>
</group>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1.15 }
          position= {[0, 1.52, -1.4]}
          rotation-x={ - 0.256 }
          >
          <iframe src="https://brandonkylely.github.io/practice-portfolio/"/>
        </Html>


    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')