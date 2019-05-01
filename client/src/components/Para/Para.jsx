import React from "react";
import { Parallax } from 'react-materialize';
import "./style.css";

const Para = (props) => {

    return (
        <div>
            <Parallax className="paraImportant" imageSrc={props.imageSource} />
            {/* <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" /> */}
        </div>
            )
}

export default Para;