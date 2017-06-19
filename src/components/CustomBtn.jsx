import React, {Component} from 'react';
import './../assets/styles/CustomBtn.css';

class CustomBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className="custom-btn">
                {this.props.children}
            </button>
        )
    }
}

export default CustomBtn;