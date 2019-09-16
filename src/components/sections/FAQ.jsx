import React, {Component} from 'react';
import plus from '../../assets/icons/plus_icon.png'
import minus from '../../assets/icons/minus_icon.png'
// import { Card, Button, Collapse, CardBody} from "reactstrap"; import
// {Accordion, Card, Button, Collapse, CardBody} from "react-bootstrap";

class FAQ extends Component {
    state = {}

    qList = [
        {
            q: 'Is there any setup fee?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '1'
        }, {
            q: 'Do you offer any discounted plans?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '2'
        }, {
            q: 'Do I need to give payment details to sign up?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '3'
        }, {
            q: 'Can I change my plan later on?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '4'
        }
    ]

    qList2 = [
        {
            q: 'Is there any setup fee?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '11'
        }, {
            q: 'Do you offer any discounted plans?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '22'
        }, {
            q: 'Do I need to give payment details to sign up?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '33'
        }, {
            q: 'Can I change my plan later on?',
            a: 'Yes. Write to us at support@queuebuster.co with any feature request.',
            id: '44'
        }
    ]
    setTouched = (e) => {
        var obj = {};
        if (e != undefined) {
            obj[e.target.id] = this.state[e.target.id]
                ? !this.state[e.target.id]
                : true
            this.setState({
                ...obj
            })
        }
    }

    renderQList() {
        var qArray = this
            .qList
            .map((m, i) => {
                return (
                    <div key={m.id} style={divStyle}>
                        <div
                            className="font-medium-16-dark"
                            data-toggle="collapse"
                            data-target={"#ques" + m.id}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            id={'q' + m.id}
                            onClick={this.setTouched}
                            style={{
                            fontWeight: '500'
                        }}>
                            {m.q}
                            <span className='float-right'>
                                {this.state[`${ 'q' + m.id}`]
                                    ? <img src={minus} id={'q' + m.id}/>
                                    : <img src={plus} id={'q' + m.id}/>}
                            </span>
                        </div>
                        <div
                            id={"ques" + m.id}
                            className="collapse"
                            aria-labelledby={m.id}
                            data-parent="#accordion">
                            <span
                                className=" font-medium-16-light"
                                style={{
                                fontWeight: '500'
                            }}>
                                {m.a}
                            </span>
                        </div>
                    </div>
                );
            });

        return qArray;
    }

    renderQList2() {
        var qArray = this
            .qList2
            .map((m, i) => {
                return (
                    <div key={m.id} style={divStyle}>
                        <div
                            className="font-medium-16-dark"
                            data-toggle="collapse"
                            data-target={"#ques" + m.id}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            id={'q' + m.id}
                            onClick={this.setTouched}
                            style={{
                            fontWeight: '500'
                        }}>
                            {m.q}
                            <span className='float-right'>
                                {this.state[`${ 'q' + m.id}`]
                                    ? <img src={minus} id={'q' + m.id}/>
                                    : <img src={plus} id={'q' + m.id}/>}
                            </span>
                        </div>
                        <div
                            id={"ques" + m.id}
                            className="collapse"
                            aria-labelledby={m.id}
                            data-parent="#accordion2">
                            <span
                                className="font-medium-16-light"
                                style={{
                                fontWeight: '500'
                            }}>
                                {m.a}
                            </span>
                        </div>
                    </div>
                );
            });

        return qArray;
    }

    render() {
        return (
            <div className='width-70 mg-100'>
                <div className='width-100 flex-column '>
                    <label className="font-medium-30-dark mg-bot-18">We are here to help you</label>
                    <span className=" font-medium-14-dark txt-center" style={infoStyle}>Browse through most frequently asked questions</span>
                </div>
                <div className='flex-row'>
                    <div id="accordion" style={accordionStyle}>
                        {this.renderQList()}
                    </div>
                    <div id="accordion2" style={accordionStyle}>
                        {this.renderQList2()}
                    </div>
                </div>
            </div>
        )
    }
}

const divStyle = {
    width: '100%',
    borderRadius: '4px',
    backgroundColor: '#f1f1f1',
    marginBottom: '20px',
    padding: '15px'
}

const infoStyle = {
    width: '552px',
    height: '60px'
}

const accordionStyle = {
    width: "50%",
    margin: '9px'
}

export default FAQ;