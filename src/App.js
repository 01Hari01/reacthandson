import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <div style={{display:"flex"}}>
                <Navbar/>
            </div>
        </Router>
    );
}

export default App;
