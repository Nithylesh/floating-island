import { Canvas } from '@react-three/fiber';
import {SceneContainer} from './SceneContainer';
import FloatingIsland from './FloatingIsland';
import Rocks from './Rocks';
import Portal from './Portal';
import FloatingRocks from './FloatingRocks';
import Trees from './Trees';
import Words from './Words';
import Grass from './Grass';
import { Float } from '@react-three/drei';
function App() {
    return <Canvas
        gl={{
            stencil: true
        }}>
        // double check if this should be inside 
        <SceneContainer/>
        <Float 
        speed={0.5} 
        rotationIntensity={0.6} 
        floatIntensity={0.6}>

        <SceneContainer/>
        <FloatingIsland/>
        <Rocks/>
        <Portal/>
        <FloatingRocks/>
        <Trees/>
        <Words/>
        <Grass/>
        </Float>
    </Canvas>;
}

export default App;