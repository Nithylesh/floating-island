import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function FloatingRocks() {
    const rock1 = useLoader(GLTFLoader, "models/floating_rock_1.glb");
    const rock2 = useLoader(GLTFLoader, "models/floating_rock_2.glb");
    const rock3 = useLoader(GLTFLoader, "models/floating_rock_3.glb");

    return (
        <>
            <primitive object={rock1.scene} position={[-10.5, 6, -10]}/>
            <primitive object={rock2.scene} position={[5, 10, -15]}/>
            <primitive object={rock3.scene} position={[8, 3.5, 9]}/>
        </>
    )
}