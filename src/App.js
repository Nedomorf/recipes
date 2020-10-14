import React, {useState} from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Recipe from "./Components/Recipe/Recipe";
import Search from "./Components/Search/Search";
import Options from "./Components/Options/Options";
import Navbar from "./Components/Navbar/Navbar";
import Redirect from "react-router-dom/es/Redirect";

function App() {

    const [color, setColor] = useState("#ea6534");

    return (
        <div className="App">
            <Options color={color} setColor={setColor}/>
            <Navbar color={color}/>
            <Redirect from={'/recipes'} to={'/'}/>
            <Switch>
                <Route exact path='/' render={() => <Search/>}/>
                <Route path='/search' render={() => <Search/>}/>
                <Route path='/recipe' render={(props) => <Recipe {...props}/>}/>
            </Switch>
        </div>
    )
}

export default App;
