import React, {Component} from 'react';
import './StartTrialImg.scss';
import restaurant from '../../assets/images/restaurant.png';

class StartTrialImg extends Component {
    render() {
        let queryArr = window.location.search.split('&'), query = {};
        queryArr.map((v, i) => {if (i===0) v = v.substr(1); v = v.split('='); query[v[0]] = v[1]});
        let type = query.type;

        let urlString = '', div1 = '', div2 = '';
        switch(type) {
            case 'restaurant':
                urlString = restaurant;
                div1 = 'Restaurant POS that manages you build a great relationship with your customer';
                div2 = 'Billing | Inventory | Reports | CRM & Loyalty';
                break;
        }
        return (
            <div style={{backgroundImage: `url('${urlString}')`}} id="start_trial">
                <div>{div1}</div>
                <div>{div2}</div>
                <button>Start your trial</button>
            </div>
        )
    }
}

export default StartTrialImg;