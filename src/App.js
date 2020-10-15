import React, {useEffect, useState} from "react";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Recipe from "./Components/Recipe/Recipe";
import Search from "./Components/Search/Search";
import Options from "./Components/Options/Options";
import Navbar from "./Components/Navbar/Navbar";
import {getJsonDB} from "./utils/serverRequest";

function App() {

    const [color, setColor] = useState('');

    useEffect(() => {
        getJsonDB.getTheme('theme')
            .then(data => {
                setColor(data);
            })
        console.log('123')
        // return () => {
        //     getJsonDB.getTheme('theme')
        //         .then(data => {
        //             if (data !== color) alert('whyyy')
        //         })
        //     getJsonDB.saveTheme('theme', color)
        //         .then(data => {
        //             console.log('saved ' + data)
        //         })
        // }
    }, [])

    const saveColor = () => {
        return getJsonDB.saveTheme('theme', color)
            .then(data => {
                console.log('saved ' + data)
            })
    }

    return (
        <div className="App">
            <Options color={color} setColor={setColor} saveColor={saveColor}/>
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
