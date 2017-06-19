import React, {Component} from 'react';
import img from './../f90edcc81f01b3c242bc9b41b61f092b.jpg';
import BoxWithIcon from './BoxWithIcon';
import './../assets/styles/4Lessons.css'


class Header extends Component {
    constructor(props) {
        super(props)
    }

    get reasons() {
        return [
            {
                title: 'Исчезает страх, что вас не поймут',
                text: 'Говорите сразу, читайте, пишите на японском, и вы преодолеете языковой барьер',
                icon: require('./../peoples.png')
            },
            {
                title: '80% урока - практика общения',
                text: 'Вы постоянно общаетесь с Сенсеем на японском ',
                icon: require('./../stars.png')
            },
            {
                title: 'Учебники, материалы?',
                text: 'Вам ничего не нужно покупать, мы все вам пришлем, вам понадобится лишь пару тетрадей',
                icon: require('./../whalet.png')
            }
        ]
    }

    get
    elements() {
        return this.reasons.map((reason) => <BoxWithIcon
            text={reason.text}
            title={reason.title}
            icon={reason.icon}/>)
    }

    render() {
        return (
            <div className="lessons-4 text--align-center">
                <div className="container">
                    <div className="title text--size-48 text--align-center">Вы говорите уже на 4 уроке потому что
                    </div>
                    <div className="block-wrapper">{this.elements}</div>
                </div>
            </div>
        )
    }
}

export
default
Header