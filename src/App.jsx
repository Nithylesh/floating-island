import { Canvas } from '@react-three/fiber';
import {SceneContainer} from './SceneContainer';

function App() {
    return <Canvas>
        // double check if this should be inside 
        <SceneContainer/>
    </Canvas>;
}

export default App;