import {HexColorInput, HexColorPicker, RgbaColorPicker} from "react-colorful";
import "react-colorful/dist/index.css";
import React from "react";
import './ColorPicker.css';

const ColorPicker = (props) => {

    return (
        <div>
            <HexColorPicker color={props.color} onChange={props.setColor} className="custom-layout"/>
            <div className="choseColor">
                <HexColorInput
                    color={props.color}
                    onChange={props.setColor}
                    className="inp flex-item"
                />
                <button className="flex-item" onClick={() => props.saveColor()}>Save</button>
            </div>
        </div>
    );
};

export default ColorPicker;

