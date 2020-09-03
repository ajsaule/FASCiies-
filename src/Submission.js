import React, { Component } from 'react';

export default class Submission extends Component {

    state = {
        submittedFace: ''
    }

    handleFaceSubmission = (e) => {
        // e.preventDefault() // throwing error // Cannot read property 'preventDefault' of undefined
        console.log('working')
    }

    render() {
        return (
            <div>
                <h2>Be part of history, submit your own ASCII face</h2>
                {/* <span className="info-pane">ⓘ</span> */}
                <p>All submissions will be reviewed and approved on a monthly basis</p>
                <form onSubmit={this.handleFaceSubmission()}>
                    <input className="input-bar" type="text" placeholder="ASCII Face..  ꒰･◡･๑꒱" maxLength="30" />
                    <input className="input-bar" type="text" placeholder="face code e.g. 'angry-tableflip-bigeye'" maxLength="30" />
                    <button className="submit-face-btn">Submit</button>
                </form>
            </div>
        )
    }
}