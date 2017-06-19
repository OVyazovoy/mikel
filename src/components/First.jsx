import React, {Component} from 'react';
import img from './../f90edcc81f01b3c242bc9b41b61f092b.jpg';
import CustomBtn from './CustomBtn';
import './../assets/styles/TryForFree.css'


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="try-for-free">
                <div className="filter">
                    <div className="container">
                        <div className="main-title text--size-48 text--align-left">
                            Японский по скайпу <br/>
                            Научитесь говорить уже на 4 уроке
                        </div>
                        <div className="semi-title text--size-22 text--weight-700 text--align-left">
                            Попробуйте первый вводный урок длительностью 20 минут БЕСПЛАТНО
                        </div>
                        <CustomBtn>Попробоват БЕСПЛАТНО</CustomBtn>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header