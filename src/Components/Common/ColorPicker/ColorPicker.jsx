import {HexColorInput, HexColorPicker, RgbaColorPicker} from "react-colorful";
import "react-colorful/dist/index.css";
import React from "react";
import './ColorPicker.css';

const ColorPicker = (props) => {

    return (
        <div>
            <HexColorPicker color={props.color} onChange={props.setColor} className="custom-layout"/>
            <HexColorInput
                color={props.color}
                onChange={props.setColor}
                className="inp"
            />
        </div>
    );
};

export default ColorPicker;

