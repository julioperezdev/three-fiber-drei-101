import {PerspectiveCamera} from "@react-three/drei"
import {angleToRadians} from "../../utils/angle";

export default function Three() {
    return(
        <>
            <PerspectiveCamera makeDefault position={[0,1,5]} />

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