import React, {Component} from 'react';
import './ScheduleYourDemo.scss'

class ScheduleYourDemo extends Component{
    render() {
        return (
            <div id="schedule_demo">
                <h4>Schedule your personal demo</h4>
                <label>100+ businesses have already tried Queuebuster. Start your 14-days trial now.</label>
                <form action="#">
                    <input type="text" placeholder="Name" style={{flexBasis: '48%'}}/>
                    <input type="number" placeholder="Mobile Number" style={{flexBasis: '48%'}}/>
                    <input type="email" placeholder="E-mail Address" style={{flexBasis: '98%'}}/>
                    <input type="text" placeholder="What would you be using Queuebuster for?" style={{flexBasis: '98%'}}/>
                    <button type="submit">Request Demo</button>
                </form>
            </div>
        )
    }
}

export default ScheduleYourDemo;