import React from "react";
import {Slider, Slide, Caption} from "react-materialize";


const Head = () => {

    return (
        <Slider options={{indicators: false}}>

            <Slide imageSrc="" image={<img alt="headIMG" />}>
                <Caption>
                    <h3>The Rules & Everything Else!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>

            <Slide image={<img alt="headIMG" />}>
                <Caption placement="left">
                    <h3>The Rules & Everything Else!</h3>
                    <h5 className="light grey-text text-lighten-3"> Here's our small slogan.</h5>
                </Caption>
            </Slide>
            
        </Slider>
    )
}

export default Head;