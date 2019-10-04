import React, {Component} from 'react';
import Header from '../common/Header';
import GenericPage from '../GenericPage';
import partnership_inquiries from '../../assets/images/partnership_inquiries.png'
import write_to_us from '../../assets/images/write_tous.png'
import lets_talk from '../../assets/images/lets_talk.png'
import get_support from '../../assets/images/get_support.png'

class GetInTouch extends Component {
    arrayData = [
        {image: get_support, title: 'Get Support', content: 'If you have any questions or problems with our product please visit our Support Center.'},
        {image: lets_talk, title: 'Lets Talk', content: 'In case our support center cannot address your queries, call us on our toll free number at (+91) 705 3200 783.'},
        {image: write_to_us, title: 'Write To Us', content: 'For those who love writing, send us an email at support@queuebuster.co and we will get back to you soon.'},
        {image: partnership_inquiries, title: 'Partnership Inquiries', content: 'We are always open to collaborate with Global and Local partners. To reach us, Use the contact form below.'}
    ]

    render() {
        let self = this;
        return (
            <div>
                <Header />
                <div style={{backgroundColor: '#f3f7fd', textAlign: 'center', padding: '70px 100px', marginTop: '68px'}}>
                    <h3 style={{fontWeight: 'bolder'}}>Get in Touch</h3>
                    <p style={{fontSize: '14px', fontWeight: 500, padding: '30px 70px'}}>We are dedicated to providing our partners with exceptional partnership opportunities and sustainable business and revenue growth through our value-add programs and benefits.</p>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', padding: '40px 170px'}}>
                    {
                        (function() {
                            return self.arrayData.map(function(v) {
                                return (
                                    <div style={{flexBasis: '50%', display: 'flex', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <img src={v.image} alt=""  style={{flexBasis: '20%'}}/>
                                        <div style={{flexBasis: '75%', paddingRight: '20px'}}>
                                            <p style={{marginBottom: '4px', fontWeight: 'bolder'}}>{v.title}</p>
                                            <p style={{fontSize: '14px', height: 'fit-content', margin: 0}}>{v.content}</p>
                                        </div>
                                    </div>
                                );
                            })
                        })()
                    }
                </div>
                <GenericPage/>
            </div>
        );
    }
}

export default GetInTouch;