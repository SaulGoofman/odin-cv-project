import React, { Component } from "react";
import '../styles/navbar.css'
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {inPreview, handlePreviewChange} = this.props;
        return (
            <div id="navbar">
                <h1>CV MAKER</h1>
                <div id="prev-check-container">
                    Preview CV
                    <input 
                        type="checkbox" 
                        id="preview-check"
                        onChange={handlePreviewChange}
                        checked={inPreview} />
                </div>
            </div>
        )
    }
}

export default NavBar;