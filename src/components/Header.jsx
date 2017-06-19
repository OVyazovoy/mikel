import React, {Component} from 'react';
import logo from './../file.png';
import CustomBtn from './CustomBtn';
import './../assets/styles/Header.css'


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <div className="container">
                    <img src={logo} alt="logo"/>
                    <div className="text--size-20">Онлайн школа японского языка Нихонго Тайм</div>
                    <CustomBtn>Задать вопрос</CustomBtn>
                </div>
            </header>
        )
    }
}

export default Header