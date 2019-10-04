import React,{Component} from 'react'
import './startTrial.scss'
import pos_machine from '../../assets/images/pos_machine.png';


class StartTrial extends Component{
    render(){
        return(
            <div className="trial-div" style={{background: 'url('+ pos_machine + ')'}}>
                <h4>Trusted by over 1,000 businesses around the world.</h4>
                <div>
                    <button>Start Free Trial</button>
                    <button>Request Demo</button>
                </div>
            </div>
        )
    }
}

export default StartTrial