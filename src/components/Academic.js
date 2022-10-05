import React, { Component } from "react";
import uniqid from 'uniqid';
import AcadItems from './AcadItems'
class Academic extends Component {
    constructor(props) {
        super(props);
        if (this.props.academic === null) {
            this.state = {
                pendingItem: false,
                currItem: {
                    id: uniqid(),
                    pos: '',
                    qual: '',
                    desc: '',
                    from: '',
                    to: '',
                },
                acadItems: [],
            }
        }
        else {
            this.state = this.props.academic;
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let tmpItems = this.state.acadItems;
        tmpItems.push(this.state.currItem);
        console.log(tmpItems);
        this.setState({
            pendingItem: false,
            acadItems: tmpItems,
            currItem: {
                id: uniqid(),
                pos: '',
                qual: '',
                desc: '',
                from: '',
                to: '',
            },
        })
        this.props.setAcademic(this.state);
    }

    handleChange = (e) => {
        let item = this.state.currItem;
        item[e.target.id] = e.target.value;
        this.setState({
            currItem: item,
        });
    }
    render() {
        let acads = <AcadItems acadItems={this.state.acadItems} />;
        if (this.state.pendingItem) {
            return (
                <div id="academic">
                    {acads}
                    <form
                        id="acad-item-form"
                        onSubmit={this.handleSubmit}
                    >
                        <label htmlFor="pos-cont">
                            Place Of Study: 
                            <input 
                                type="text" 
                                id="pos" 
                                name="pos" 
                                onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="qual-cont">
                            Qualification: 
                            <input 
                                type="text" 
                                id="qual" 
                                name="qual" 
                                onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="desc-cont">
                            Description: 
                            <textarea 
                                id="desc" 
                                name="desc" 
                                onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="date-from-cont">
                            From: 
                            <input 
                                type="date" 
                                id="from" 
                                name="date-from" 
                                onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="date-to-cont">
                            To: 
                            <input 
                                type="date" 
                                id="to" 
                                name="date-to" 
                                onChange={this.handleChange}/>
                        </label>
                        <input 
                            type="submit" 
                            id="acad-submit" value="Add" />
                    </form>
                </div>
            );
        }
        else {
            return (
                <div id="academic">
                    {acads}
                    <button 
                        id="add-acad" 
                        onClick={event => {this.setState({pendingItem: true,});}}>
                            Add Experience
                    </button>
                </div>
            );
        }
    }
}

export default Academic;