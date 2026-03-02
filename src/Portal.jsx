import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Portal() {
    const model = useLoader(GLTFLoader, "models/portal.glb");
    const mask = useLoader(GLTFLoader, "models/portal_mask.glb");

    useEffect(() => {
        if (!model) return;

        // Set the mask material to be double-sided and transparent
        let mesh = model.scene.children[0]; // Assuming the portal is the first child
        mesh.material.envMapIntensity = 3.5;
        
        let maskMesh = mask.scene.children[0]; // Assuming the mask is the first child
        maskMesh.material.side = DoubleSide;
    }, [model, mask]);

    return (
        <>
            <primitive object={model.scene} />
            <primitive object={mask.scene} />
        </>
    )
}