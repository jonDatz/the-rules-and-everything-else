import React from "react";
import {Slider, Slide, Caption} from "react-materialize";
import castle from "../../images/castle.jpg";
import castle2 from "../../images/castle2.jpg";
import rock from "../../images/fantasy-rock.jpg";
import river from "../../images/river.jpg";


const Head = () => {

    return (
        <div>
            <Slider options={{indicators: false}}>

                <Slide image={<img src={castle} alt="headIMG" />}>
                </Slide>

                <Slide image={<img src={castle2} alt="headIMG" />}>
                </Slide>

                <Slide image={<img src={rock} alt="headIMG" />}>
                </Slide>

                <Slide image={<img src={river} alt="headIMG" />}>
                </Slide>


                
            </Slider>
        </div>
    )
}

export default Head;