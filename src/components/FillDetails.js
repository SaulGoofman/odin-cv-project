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
                <Personal 
                    personal={this.props.personal} 
                    setPersonal={this.props.setPersonal} 
                />
                <Academic 
                    academic={this.props.academic} 
                    setAcademic={this.props.setAcademic} 
                />
                <Professional 
                    prof={this.props.prof} 
                    setProf={this.props.setProf} 
                />
            </div>
        );
    }
}

export default FillDetails;