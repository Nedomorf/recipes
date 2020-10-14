import style from "./Options.module.css";
import React, {useState} from "react";
import ColorPicker from "../Common/ColorPicker/ColorPicker";

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
                <div className={style.buttons}>
                    <ColorPicker color={props.color} setColor={props.setColor}/>
                </div>
            </div>
        </div>
    )
}

export default Options;