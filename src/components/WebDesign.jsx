import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Chair from "./Chair"
import { styled } from 'styled-components';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 20px;

  @media screen and (max-width:768px){
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;

    }
`;

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
            <Chair/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      We design the products with a strong focus on both world class using React React NAtive and flutter.
    </Desc>
    </>
  )
}

export default WebDesign
