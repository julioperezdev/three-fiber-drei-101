import {useRef, useEffect, useState} from "react"
import {PerspectiveCamera, OrbitControls, Environment, useTexture} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {angleToRadians} from "../../utils/angle";
import * as THREE from "three"
import gsap from "gsap"

import Tshirt from "./tShirt"

export default function Three() {

    //const [colorMapTexture] = useTexture([]);

    //Code to move the camera around
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if(!!orbitControlsRef.current){
            const {x,y} = state.mouse;
            const maxAngleThatMouseCanBeRotateHorizontaly = (-x * angleToRadians(45))
            const maxAngleThatMouseCanBeRotateVerticaly = ((y + 1.5) * angleToRadians(90 - 30))
            orbitControlsRef.current.setAzimuthalAngle(maxAngleThatMouseCanBeRotateHorizontaly);
            orbitControlsRef.current.setPolarAngle(maxAngleThatMouseCanBeRotateVerticaly);
            orbitControlsRef.current.update();
        }
    })

    //Animation
    const ballRef = useRef(null);
    useEffect(() =>{
        if(!!ballRef.current){
          console.log(ballRef.current)  

            //Timeline
            //docs of timeline https://greensock.com/docs/v3/GSAP/Timeline
            const timeline = gsap.timeline({paused:true});

            //x-axis motion
            timeline.to(ballRef.current.position,{
                x: 2,
                duration: 2,
                //https://greensock.com/ease-visualizer/ to visualize different eases
                //ease: "linear"
                //ease: "easeOut"
                //ease: "easeIn"
                ease: "power1.out"
            })

            //y-axis motion
            timeline.to(ballRef.current.position,{
                y: 0.5,
                duration: 1.7,
                //https://greensock.com/ease-visualizer/ to visualize different eases
                //ease: "linear"
                //ease: "easeOut"
                ease: "bounce.out"
            }, 
            //">+=3")
            "<")

            //Play
            timeline.play()
        }
    },[ballRef.current])


    const tShirtRef = useRef(null);
    useEffect(() =>{
        if(!!tShirtRef.current){
          console.log(tShirtRef.current)  

            //Timeline
            //docs of timeline https://greensock.com/docs/v3/GSAP/Timeline
            const timeline = gsap.timeline({paused:true});

            //y-axis motion to rotate
            
            timeline.to(tShirtRef.current.rotation,{
                y: 60,
                duration: 60,
                //https://greensock.com/ease-visualizer/ to visualize different eases
                ease: "linear"
            })


            //Play
            timeline.play()
        }
    },[tShirtRef.current])


    

    return(
        <>
            {/* camera */}
            <PerspectiveCamera 
            makeDefault 
            position={[0,1,5]} />

            <OrbitControls 
            ref={orbitControlsRef}
            minPolarAngle={angleToRadians(60)}
            maxPolarAngle={angleToRadians(80)}/>

            {/* Ball */}
            <mesh 
            position={[-2,2.5,0]}
            castShadow
            ref={ballRef}>
                <sphereGeometry 
                args={[0.5, 32, 32]} />
                
                <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.6}
                roughness={0.2}/>
            </mesh>

            {/* T-shirt */}
            <mesh 
            ref={tShirtRef}
            rotation={[0,0,0]}>
                <Tshirt/>
            </mesh>

            {/* floor */}
            <mesh 
            rotation={[-(angleToRadians(90)),0,0]}
            receiveShadow>
                <planeGeometry 
                args={[20,20]}/>
                
                {/* en caso de que quieras que no se refleje con el entorno, utilizar Phong material */}
                {/* <meshPhongMaterial color="#1ea3d8"/> */}
                <meshStandardMaterial 
                color="#1ea3d8" />
            </mesh>

            {/* ambientLight */}
            <ambientLight 
            args={["#ffffff", 0.25]} />

            {/* Directional light */}
            {/* <directionalLight 
            args={["#ffffff", 1]}
            position={[-4,1,0]}/> */}

            {/* pointLight */}
            {/* <pointLight 
            args={["#ffffff", 1]}
            position={[-4,1,0]} castShadow/> */}

            {/* sportLight */}
            <spotLight
            args={["#ffffff", 1.5,7,angleToRadians(45),0.4]}
            position={[-4,1,0]}
            castShadow/>

            <Environment
            background>
                <mesh>
                    <sphereGeometry 
                    args={[50,100,100]}/>
                    
                    <meshBasicMaterial
                    color="#2266cc"
                    side={THREE.BackSide}/>
                </mesh>
            </Environment>
        </>
    )
}