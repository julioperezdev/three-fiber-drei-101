import {useRef, useEffect} from "react"
import {PerspectiveCamera, OrbitControls} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {angleToRadians} from "../../utils/angle";

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
            <PerspectiveCamera makeDefault position={[0,1,5]} />
            <OrbitControls 
            ref={orbitControlsRef}
            minPolarAngle={angleToRadians(60)}
            maxPolarAngle={angleToRadians(80)}/>

            {/* Ball */}
            <mesh position={[0,0.5,0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>

            {/* floor */}
            <mesh rotation={[-(angleToRadians(90)),0,0]}>
                <planeGeometry args={[7,7]}/>
                <meshStandardMaterial color="green" />
            </mesh>

            {/* ambientLight */}
            <ambientLight args={["#ffffff", 1]} />
        </>
    )
}