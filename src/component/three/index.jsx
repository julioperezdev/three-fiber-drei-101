import {useRef, useEffect} from "react"
import {PerspectiveCamera, OrbitControls, Environment} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {angleToRadians} from "../../utils/angle";
import * as THREE from "three"

export default function Three() {

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

    useEffect(() => {
      if(!!orbitControlsRef.current){
        console.log(orbitControlsRef.current)
      }
    }, [orbitControlsRef.current])
    

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
            position={[0,0.5,0]}
            castShadow>
                <sphereGeometry 
                args={[0.5, 32, 32]} />
                
                <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.6}
                roughness={0.2}/>
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
            position={[-3,1,0]}
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