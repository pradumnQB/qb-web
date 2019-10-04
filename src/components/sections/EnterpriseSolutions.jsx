import React, {Component} from 'react';
import pic1 from '../../assets/images/small_idustries.png'
import pic2 from '../../assets/images/medium_enterprises.png'
import pic3 from '../../assets/images/large_enterprises.png'
import check from '../../assets/icons/green_check.png'
import './EnterpriseSolutions.scss'

class EnterpriseSolutions extends Component {
    dataArray = [
        {title: 'Small Enterprises', 
        content: 'Go for our mobile device if you have a small business operation, a mobile workforce, or less space on your counter.' ,
        image: pic1,
        li: [
            {title: 'Ideal Usage', content: 'Less than 10,000 product SKUs <br/>100-500 invoices / device / day'},
            {title: 'Business Types', content: 'Small retail outlets, exhibitions, food trucks, spa & salon,        mobile workforce, in-store billing by support staff'},
            {title: 'Available Configurations', content: '1. Mobile device + Printer <br/> 2. Mobile device + Printer + Payment Terminal'}
        ]},

        {title: 'Medium Enterprises', 
        content: 'Go for a bigger screen if your operations are complex, require your customers to stand in long queues, or deal with higher number of products where barcode scanning becomes essential.' , 
        image: pic2,
        li: [
            {title: 'Ideal Usage', content: 'More than 10,000 product SKUs <br/>More than 200-250 invoices / device / day'},
            {title: 'Business Types', content: 'Fine Dine / QSR restaurants, grocery & retail outlets with huge number of customer invoices & inventory'},
            {title: 'Available Configurations', content: '1. 11.6” - 14” touch screen + Printer<br/>2. 11.6” - 14” touch screen + Printer + Payment Terminal'}
        ]},

        {title: 'Large Enterprises', 
        content: 'A large enterprise often requires a combination of devices from a permanently stationed screen on cash counter to mobile devices for in-store as well as out-stores executives. Reach out to us to design a solution specific to your requirements.' , 
        image: pic3,
        li: [
            {title: 'Ideal Usage', content: 'More than 100,000 product SKUs<br/>More than 10,000 invoices / day'},
            {title: 'Business Types', content: 'Large format retail chains, manufacturers, wholesaler, distributors'}
        ]}
    ]

    constructor() {
        super();
        this.renderSubSections = this.renderSubSections.bind(this);
    }

    render() {
        return (
            <div id="enterprise_solutions">
                {this.renderSubSections()}
            </div>
        );
    }

    renderSubSections() {
        return this.dataArray.map(function(v, i) {
            return (
                <div className="ss-div" style={{backgroundColor: i%2!==0 ? '#f3f7fd' : 'white'}} key={i}>
                    <div style={{flexBasis: '50%', order: i%2!==0 ? 2 : 1}}>
                        <img src={v.image} style={{margin: 'auto', display: 'block'}} alt=""/>
                    </div>
                    <div style={{flexBasis: '50%', order: 1}}>
                        <h5>{v.title}</h5>
                        <p>{v.content}</p>
                        <ul style={{listStyleImage: `url(${check})`}}>
                            {
                                (function() {
                                    return v.li.map(function(v1, i1) {
                                        return (
                                            <li key={i1}>
                                                <p>{v1.title}</p>
                                                <p>{v1.content}</p>
                                            </li>
                                        );
                                    })
                                })()
                            }
                        </ul>
                    </div>
                </div>
            )
        })
    }
}

export default EnterpriseSolutions;