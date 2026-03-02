import { useLoader } from "@react-three/fiber";
import { useEffect }from "react";
import { BufferAttribute, Color } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function FloatingIsland() {
    const gltf = useLoader(GLTFLoader, "models/floating_island.glb");

    useEffect(() => {
        if (!gltf) return;

        let mesh = gltf.scene.children[0]; // Assuming the island is the first child

        var uvs = mesh.geometry.attributes.uv.array;
        mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2)); // Create uv2 attribute for lightmapping

        mesh.material.lightMap = mesh.material.map; // Use the same texture for lightmap
        mesh.material.lightMapIntensity = 400; // Adjust lightmap intensity as needed
        mesh.material.color = new Color(0.04, 0.06, 0.1);
    }, [gltf]);

    return (
        <primitive object={gltf.scene} />
    )
}