'use client'

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, OrbitControls } from "@react-three/drei";

function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
    return (
        <Canvas 
            camera={{ fov: 40, near: 0.1, far: 1000, position: [3, 6, 6] }}
            className="relative"
        >
            {/*Lighting Need More Adjustment*/}
            <ambientLight intensity={2} />
            <directionalLight 
                position={[0, 0, 3]}
                intensity={1.5} 
            />

            <Suspense fallback={<Loader />}>
                <Model />
            </Suspense>
            
            <OrbitControls 
                enablePan={true}
                enableZoom={false}
                screenSpacePanning={true}
                panSpeed={6}
            />
        </Canvas>
    )
}
