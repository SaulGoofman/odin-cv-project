import React, { Component } from "react";

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            firstName: '',
            lastName: '',
            profSum: '',
            email: '',
            phone: '',
            github: '',
            linkedin: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.changeSaved();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    changeSaved = (e) => {
        this.setState({
            saved: !this.state.saved,
        })
    }

    handleReset = (e) => {
        this.setState({
            firstName: '',
            lastName: '',
            profSum: '',
            email: '',
            phone: '',
            github: '',
            linkedin: '',
        });
    }

    render() {
        let {
            firstName,
            lastName,
            profSum,
            email,
            phone,
            github,
            linkedin
        } = this.state;
        if (!this.state.saved) {
            return (
                <form 
                    id="personal-form" 
                    onSubmit={this.handleSubmit} 
                    onReset={this.handleReset}
                >
                    <fieldset>
                        <legend>Personal Details</legend>
                        <div id="names">
                            <label for="first-name">First Name:</label>
                            <input 
                                id="firstName" 
                                type="text" 
                                name="first-name" 
                                onChange={this.handleChange}
                                value={firstName}
                            />
                            <label for="last-name">Last Name:</label>
                            <input 
                                id="lastName" 
                                type="text" 
                                name="last-name" 
                                onChange={this.handleChange}
                                value={lastName}
                            />
                        </div>
                        <div id="summary">
                            Professional Summary:
                            <textarea 
                                id="profSum" 
                                name="summary"
                                onChange={this.handleChange}
                                value={profSum}
                            />
                        </div>
                        <div id="email-cont">
                            <label for="email">Email:</label>
                            <input 
                                id="email" 
                                type="email" 
                                name="email" 
                                onChange={this.handleChange}
                                value={email}
                            />
                        </div>
                        <div id="phone-cont">
                            <label for="email">Phone: </label>
                            <input 
                                id="phone" 
                                type="text" 
                                name="phone" 
                                onChange={this.handleChange}
                                value={phone}
                            />
                        </div>
                        <div id="github-cont">
                            <label for="github">Github: </label>
                            <input 
                                id="github" 
                                type="text" 
                                name="github" 
                                onChange={this.handleChange}
                                value={github}
                            />
                        </div>
                        <div id="linkedin-cont">
                            <label for="linkedin">Linkedin: </label>
                            <input 
                                id="linkedin" 
                                type="text" 
                                name="linkedin" 
                                onChange={this.handleChange}
                                value={linkedin}
                            />
                        </div>
                        <input type="submit" value="Save" />
                        <input type="reset" value="Clear" />
                    </fieldset>
                </form>
            );
        }
        else {
            return (
                <div id="personal-saved">
                    <div id="name">{firstName} {lastName}</div>
                    <div id="prof-sum">{profSum}</div>
                    <div id="email">{email}</div>
                    <div id="phone">{phone}</div>
                    <div id="github">{github}</div>
                    <div id="linkedin">{linkedin}</div>
                    <button id="edit" onClick={this.changeSaved}>Edit</button>
                </div>
            );
        }
    }
}

export default Personal;