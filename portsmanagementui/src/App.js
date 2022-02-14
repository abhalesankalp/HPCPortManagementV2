import './App.css';
import ShipManagement from './Components/ShipManagement';
import { useEffect } from 'react';
function App() {

    useEffect(() => {
        document.title = "HPC Port Management"
    }, [])
  return (
    <div className="App">
        <ShipManagement name= "ShipManagement"/>
    </div>
  );
}

export default App;
