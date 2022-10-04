import React, { Component } from "react";
import Personal from './Personal';
import Academic from './Academic';
import Professional from "./Professional";
class FillDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="fill-details">
                <h2>Fill Details</h2>
                <Personal />
                <Academic />
                <Professional />
            </div>
        );
    }
}

export default FillDetails;