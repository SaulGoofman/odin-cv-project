import React, { Component } from "react";
class AcadItems extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { acadItems } = this.props;
        return (
            <div id="acad-items">
                {acadItems.map(item => {
                    return (
                        <div key={item.id} id={item.id}>
                            <div>Place of Study: {item.pos}</div>
                            <div>Qualification: {item.qual}</div>
                            <div>Description: {item.desc}</div>
                            <div>From: {item.from}</div>
                            <div>To: {item.to}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AcadItems;