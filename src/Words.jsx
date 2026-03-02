import { Text3D } from "@react-three/drei";

export default function Words() {
    return (
        <>
            <Text3D
                font="fonts/Roboto_Regular.json"
                size={0.5}
                height={0.065}
                curveSegments={12}
                position={[1,6,1]}
            >
                Floating Island
                <meshStandardMaterial color={[1, 0.15, 0.1]}
                    emissive={[1, 0.15, 0.1]} emissiveIntensity={0.5} />
            </Text3D>

            <Text3D
                font="fonts/Roboto_Regular.json"
                size={0.5}
                height={0.065}
                curveSegments={12}
                position={[-3,6,1]}
            >
                PORTAL 
                <meshStandardMaterial color={[0.1, 0.15, 1]}
                    emissive={[1, 0.15, 0.1]} emissiveIntensity={0.5} />
            </Text3D>
        </>
    )
}
