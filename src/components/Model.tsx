import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/models/untitled.glb");

export default function Model() {
    const group = useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF("/models/untitled.glb");
    return (
        <group ref={group}>
            <primitive 
                object={scene}
            />
        </group>
    )
}
