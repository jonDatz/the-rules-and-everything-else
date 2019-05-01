import React from "react";
import { Parallax } from 'react-materialize';
import "./style.css";

const Para = (props) => {

    return (
        <div>
            <Parallax className="paraImportant" imageSrc={props.imageSource} />
        </div>
            )
}

export default Para;