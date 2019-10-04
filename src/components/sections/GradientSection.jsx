import React, {Component} from 'react';
import StartTrialTop from './StartTrialTop';
import Features from './Features';
import bg_curve1 from '../../assets/images/bg_curve1.png'

class GradientSection extends Component {
    render() {
        return (
            <div id="gradient_section" style={{
                backgroundImage: 'url('+ bg_curve1 + ')', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '100% 106%',
                backgroundPositionY: '0',
                marginTop: '68px',
                paddingBottom: '100px'
                }}>
                <StartTrialTop />
                <Features />
            </div>
        );
    }
}

export default GradientSection;