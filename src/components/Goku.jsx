import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Goku(props) {
  const { nodes, materials } = useGLTF('/goku-transformed.glb')
  return (
    <group {...props} dispose={null} scale={5}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} position={[-0.02, 0, -0.01]} rotation={[-Math.PI / 2, 0, 3]} />
    </group>
  )
}

useGLTF.preload('/goku-transformed.glb')
