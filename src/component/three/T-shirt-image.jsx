/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 t-shirt-image.glb
Author: hasar (https://sketchfab.com/hasar)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/white-t-shirt-with-print-3802b13a5a0b45d49b669ec5cbb32090
Title: White t-shirt with print
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {proxy, useSnapshot} from "valtio"

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
    Material109415: "yellow",
    //nit_Fleece_Terry_FRONT_109192: "yellow"
    Knit_Fleece_Terry_FRONT_109192: "green",
    //Knit_Fleece_Terry_FRONT_109192: "blue",
    //Cotton_Gabardine_FRONT_2673_1:"green",
    Cotton_Gabardine_FRONT_2673:"blue",
    //PT_FABRIC_FRONT_32035 Logo images.uri[1].uri = t-shirt-image_img1
    PT_FABRIC_FRONT_32035:"red",
    Cotton_Gabardine_FRONT_2673_0:"yellow",
    Cotton_Gabardine_FRONT_2673_1:"pink",
    Cotton_Gabardine_FRONT_2673_2:"green",
    Rib_1X1_319gsm_FRONT_2664:"grey",
    Rib_1X1_319gsm_FRONT_2664_0:"orange",
    Cotton_Gabardine_FRONT_2673_3:"purple",
    Cotton_Gabardine_FRONT_2673_4:"brown",
    Cotton_Gabardine_FRONT_2673_5:"blue",
    Cotton_Gabardine_FRONT_2673_6:"red"
  },
})

export default function Tshirtimage() {
  const snap = useSnapshot(state)
  const { nodes, materials, images } = useGLTF('/models/tshirtImage/t-shirt-image.glb')
  return (
    <group dispose={null}>
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673} geometry={nodes.Object_5.geometry} material={materials.Cotton_Gabardine_FRONT_2673} />
      <mesh material-color={snap.items.PT_FABRIC_FRONT_32035} geometry={nodes.Object_6.geometry} material={materials.PT_FABRIC_FRONT_32035} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_0} geometry={nodes.Object_7.geometry} material={materials.Cotton_Gabardine_FRONT_2673_0} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_1} geometry={nodes.Object_8.geometry} material={materials.Cotton_Gabardine_FRONT_2673_1} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_2} geometry={nodes.Object_9.geometry} material={materials.Cotton_Gabardine_FRONT_2673_2} />
      <mesh material-color={snap.items.Rib_1X1_319gsm_FRONT_2664} geometry={nodes.Object_10.geometry} material={materials.Rib_1X1_319gsm_FRONT_2664} />
      <mesh material-color={snap.items.Rib_1X1_319gsm_FRONT_2664_0} geometry={nodes.Object_11.geometry} material={materials.Rib_1X1_319gsm_FRONT_2664_0} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_3} geometry={nodes.Object_12.geometry} material={materials.Cotton_Gabardine_FRONT_2673_3} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_4} geometry={nodes.Object_13.geometry} material={materials.Cotton_Gabardine_FRONT_2673_4} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_5} geometry={nodes.Object_14.geometry} material={materials.Cotton_Gabardine_FRONT_2673_5} />
      <mesh material-color={snap.items.Cotton_Gabardine_FRONT_2673_6} geometry={nodes.Object_15.geometry} material={materials.Cotton_Gabardine_FRONT_2673_6} />
    </group>
  )
}

useGLTF.preload('/t-shirt-image.glb')
