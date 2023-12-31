/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 rocket.gltf --transform 
Files: rocket.gltf [74.62KB] > rocket-transformed.glb [85KB] (-14%)
Author: Felix Yadomi (https://sketchfab.com/felixyadomi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rocket-take-off-7ffebb9b0d594659b31b69e0607f6e6f
Title: Rocket Take off
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rocket(props) {
  const { nodes, materials } = useGLTF('/rocket-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0.732, 4.115, -0.618]} rotation={[-0.236, -0.456, -0.194]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial002} position={[1.406, 4.953, 0.051]} rotation={[-0.434, -1.012, -1.904]} scale={[0.388, 0.388, 0.448]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.PaletteMaterial003} position={[-0.114, 0.858, -0.061]} scale={0.573} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.PaletteMaterial004} position={[-0.233, 0.287, -0.324]} scale={4.826} />
    </group>
  )
}

useGLTF.preload('/rocket-transformed.glb')
