import React, { useRef, useState } from "react";
import { Html, Text, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useThree, extend, useFrame } from "@react-three/fiber";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Demo from "./pages/Demo";

export default function Computer(props, htmlVisible) {
  const [hingeRotation, setHingeRotation] = useState(3.13);
  const screenRef = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  function open() {
    handleClicked();
    // console.log("running open");
  }

  useFrame((state, delta) => {
    if (clicked && screenRef.current.rotation.x >= 1.31) {
      screenRef.current.rotation.x -= delta * 1.8;
      // console.log("running rotate");
    }
    if (screenRef.current.rotation.x < 1.32) {
      handleOn();
      handleSetLight();
    }
  });

  const [currentPage, setCurrentPage] = useState("Projects");
  const [clicked, setClicked] = useState(false);
  const [on, setOn] = useState(false);
  const [lightVisible, setLightVisible] = useState(false);
  // const [lightColor, setLightColor] = useState('#FA5F55');

  const handleClicked = () => setClicked(true);
  const handleOn = () => setOn(true);
  const handleSetLight = () => setLightVisible(true);
  // const handleSetLightColor = (color) => setLightColor(color)

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Demo") {
      return <Demo />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <group {...props} dispose={null} position-y={-1}>
      <group position={[0, 0.52, 0]} scale={[0.1, 0.1, 0.1]}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
        <mesh
          geometry={nodes.Circle001_4.geometry}
          material={nodes.Circle001_4.material}
        />
        <mesh
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        {/* <mesh geometry={nodes.FrontCameraRing001.geometry} material={materials['CameraRIngBlack.002']} position={[-0.15, 19.57, -16.15,]} scale={5.8} /> */}
        <mesh
          geometry={nodes.KeyboardKeyHole.geometry}
          material={nodes.KeyboardKeyHole.material}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[0, -0.51, 0]} scale={5.8}>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={nodes.Circle006_1.material}
          />
        </group>
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
          />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <group
          ref={screenRef}
          onClick={open}
          position={[0.01, -0.47, -10.41]}
          rotation-x={hingeRotation}
          // rotation={[1.31, 0, 0,]}
          scale={5.8}
        >
          <mesh
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0, -0.111, -1.8]}
            rotation={[0, 0, 0]}
            scale={[0.58, 0.58, 0.58]}
          />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
          />
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={nodes.Circle003_1.material}
          />
        </group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={nodes.Circle009.material}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={nodes.Circle009_1.material}
          />
        </group>
      </group>

      <Html
        transform
        // wrapperClass="absolute"
        distanceFactor={1.15}
        position={[0, 1.52, -1.4]}
        rotation-x={-0.256}
      >
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          on={on}
        />
      </Html>

      <Html
        transform
        // wrapperClass="fitScreen"
        distanceFactor={1.15}
        position={[0, 1.52, -1.39]}
        rotation-x={-0.256}
      >
        {on && renderPage()}
      </Html>

      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={30}
        color={
          currentPage === "About"
            ? "#B042FF"
            : currentPage === "Contact"|| currentPage === "Demo"
            ? "#FA5F55"
            : "#22E4AC"
        }
        rotation={[-0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
        visible={lightVisible}
      />
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
);
