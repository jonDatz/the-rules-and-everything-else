import React from "react";
import {Slider, Slide, Caption} from "react-materialize";


const Head = () => {

    return (
        <Slider>
            <Slide image={<img />}>
                <Caption>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>

            <Slide image={<img alt="alt" />}>
                <Caption placement="left">
                    <h3> Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3"> Here's our small slogan.</h5>
                </Caption>
            </Slide>

            <Slide image={<img alt="alt" />}>
                <Caption placement="right">
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </Caption>
            </Slide>

            <Slide image={<img alt="alt" />}>
                <Caption>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3"> Here's our small slogan.</h5>
                </Caption>
            </Slide>
            
        </Slider>
    )
}

export default Head;