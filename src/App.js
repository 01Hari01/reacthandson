import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
