import React, {Component} from 'react'
import partners from '../../assets/images/partners.png'
import brands from '../../assets/images/brands_logo.png'
import './partners.scss'


class Partners extends Component {
    render() {
        let l = window.location.pathname === '/business';
        return (
            <div className='width-70 mg-100' id="partners">
                <h3>Partners & Customers</h3>
                <p>Trusted by over 1,000 businesses around the world</p>
                <img src={l ? brands : partners} style={{width: l ? '139%' : '100%', marginLeft: l ? '-15%' : '0'}}/>
            </div>
        )
    }
}

export default Partners