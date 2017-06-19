import React, {Component} from 'react';
import './../assets/styles/BoxWithIcon.css';

class BoxWithIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {title, text, icon} = this.props;
        return (
            <div className="box-with-icon">
                <div className="icon">
                    <img src={icon} alt=""/>
                </div>
                <div className="text-wrapper text--align-left">
                    <p className=" inner-title text--size-22 text--align-left text--weight-700">{title}</p>
                    <p className="inner-text text--size-18">{text}</p>
                </div>
            </div>
        )
    }
}

export default BoxWithIcon;