import style from "./Options.module.css";
import React, {useState} from "react";
import {ThemeProvider} from "styled-components";

const Options = (props) => {

    const [activeOptions, setActiveOptions] = useState(false);

    const toggleOptions = () => {
        return activeOptions
            ? setActiveOptions(false)
            : setActiveOptions(true)
    }

    return (
        <div>
            <div className={style.Options} onClick={toggleOptions}>
                <i className="fa fa-cog" aria-hidden="true"/>
            </div>
            <div className={`${activeOptions ? style.activateOptions : null} ${style.optionsArea}`}>
                <div>
                    <button onClick={props.toggleTheme}>
                        2135345
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Options;