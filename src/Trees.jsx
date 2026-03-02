import { useLoader } from "@react-three/fiber";
import { use, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Trees() {
    const gltf = useLoader(GLTFLoader, "models/trees.glb");
    useEffect(() => {
        if (!gltf) return;

        let mesh = gltf.scene.children[0];
        mesh.material.envMapIntensity = 3.5;
    }, [gltf]);

    return (
        <primitive object={gltf.scene} />
    )
}