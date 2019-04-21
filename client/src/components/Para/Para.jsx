import React from "react";
import { Parallax } from 'react-materialize';
import "./style.css";

const Para = () => {

    return (
        <div>
            <Parallax className="paraImportant" imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Willem_Troost-_fantasy_Rhine_landscape_with_castle_town.jpg/1191px-Willem_Troost-_fantasy_Rhine_landscape_with_castle_town.jpg" />
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                        Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
                        </p>
                    </div>
                </div>
            {/* <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" /> */}
        </div>
            )
}

export default Para;