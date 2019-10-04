import React, {Component} from 'react';
import './StartTrialTop.scss'
import group2 from '../../assets/images/group2.png'

class StartTrialTop extends Component {
    render() {
        return (
            <div id="start_trial_top">
                <h3>Point of sale now made easy!</h3>
                <span>
                    A Dependable POS system for your small or big business. Engage with your customers like never before.
                </span>
                <div>
                    <button>Start Free Trial</button>
                    <button onClick={this.requestDemoBtn}>Request Demo</button>
                </div>
                <img src={group2} alt=""/>
            </div>
        );
    }

    requestDemoBtn() {
        let $ = window.$;

        $('#start_trial_modal').modal('show');
    }
}

export default StartTrialTop;