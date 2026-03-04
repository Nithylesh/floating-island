import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide, EquirectangularReflectionMapping, WebGLRenderTarget, Scene, LinearEncoding, TextureLoader, AlwaysStencilFunc, ReplaceStencilOp } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FillQuad } from "./FillQuad";

const scene = new Scene();
scene.background = new TextureLoader().load(
    "/textures/galaxy.jpg",
    (texture) => {
        texture.encoding = LinearEncoding;
        texture.mapping = EquirectangularReflectionMapping;
    }
);

const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
    target.setSize(window.innerWidth, window.innerHeight);
});

export default function Portal() {
    const model = useLoader(GLTFLoader, "models/portal.glb");
    const mask = useLoader(GLTFLoader, "models/portal_mask.glb");

    useFrame((state) => {
        state.gl.setRenderTarget(target);
        state.gl.render(scene, state.camera);
        state.gl.setRenderTarget(null);
    });

    useEffect(() => {
        if (!model) return;

        // Set the mask material to be double-sided and transparent
        let mesh = model.scene.children[0]; // Assuming the portal is the first child
        mesh.material.envMapIntensity = 3.5;

        let maskMesh = mask.scene.children[0]; // Assuming the mask is the first child
        maskMesh.material.side = DoubleSide;
        maskMesh.material.transparent = false;
        maskMesh.material.stencilWrite = true;
        maskMesh.material.stencilRef = 1;
        maskMesh.material.stencilFunc = AlwaysStencilFunc;
        maskMesh.material.stencilZPass = ReplaceStencilOp;
    }, [model, mask]);

    return (
        <>
            <primitive object={model.scene} />
            <primitive object={mask.scene} />
            <FillQuad map={target.texture} maskId={1} />
        </>
    )
}