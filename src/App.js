import React, {useState} from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import theme from 'styled-theming';
import Recipe from "./Components/Recipe/Recipe";
import Search from "./Components/Search/Search";
import Options from "./Components/Options/Options";
import Navbar from "./Components/Navbar/Navbar";
import Redirect from "react-router-dom/es/Redirect";

// const elementsBackgroundColor = theme('mode', {
//     fire: '#ea6534',
//     dark: '#000'
// })

const GlobalThemeStyle = createGlobalStyle`
* {
background: ${props => {
    switch (props.theme.mode) {
        case 'dark':
            return '#000';
        default:
            return '#ea6534';
    }
}};
color: ${props => {
    switch (props.theme.mode) {
        case 'dark':
            return '#fff';
        default:
            return '#282c34';
    }
}};
}
`

function App() {

    const [themeMode, setThemeMode] = useState('fire');

    const toggleTheme = () => {
        switch (themeMode) {
            case 'fire':
                return setThemeMode('dark');
            default:
                return setThemeMode('fire');
        }
    }

    return (
        <ThemeProvider theme={{mode: themeMode}}>
            <GlobalThemeStyle/>
            <Options toggleTheme={toggleTheme}/>
            <Navbar/>
            <Redirect from={'/recipes'} to={'/'}/>
            <Switch>
                <Route exact path='/' render={() => <Search/>}/>
                <Route path='/search' render={() => <Search/>}/>
                <Route path='/recipe' render={(props) => <Recipe {...props}/>}/>
            </Switch>
        </ThemeProvider>
    )
}

export default App;
