import React, {Component} from 'react';
import './CompleteSolution.scss'
import com_sol from '../../assets/images/the_complete_solution.png'

class CompleteSolution extends Component {
    render() {
        return (
            <div id="complete_solution">
                <div style={{flexBasis: '50%', paddingRight: '20px'}}>
                    <h3>The Complete Solution 👍</h3>
                    <p>Queuebuster app can be deployed on any Android device. However, here are a few recommended solutions to help you with your decision.</p>
                    <button>Talk to Us!</button>
                </div>
                <div style={{flexBasis: '50%'}}>
                    <img src={com_sol} alt=""/>
                </div>
            </div>
        )
    }
}

export default CompleteSolution;