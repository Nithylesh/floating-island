import { Canvas } from '@react-three/fiber';
import {SceneContainer} from './SceneContainer';
import FloatingIsland from './FloatingIsland';
import Rocks from './Rocks';
import Portal from './Portal';
import FloatingRocks from './FloatingRocks';
function App() {
    return <Canvas>
        <SceneContainer/>
        <FloatingIsland/>
        <Rocks/>
        <Portal/>
        <FloatingRocks/>
    </Canvas>;
}

export default App;