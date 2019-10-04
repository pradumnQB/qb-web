import React, {Component} from 'react';
import payment_partners from '../../assets/images/payment_partners.png'

class PaymentPartners extends Component {
    render() {
        return (
            <div style={{margin: '43px 0 31px 0'}}>
                <h3 style={{width: 'fit-content', margin: 'auto'}}>Payment Partners</h3>
                <p style={{width: 'fit-content', margin: 'auto'}}>Trusted by over 1,000 businesses around the world</p>
                <img style={{margin: 'auto', display: 'block'}} src={payment_partners} alt=""/>
            </div>
        );
    }
}

export default PaymentPartners;