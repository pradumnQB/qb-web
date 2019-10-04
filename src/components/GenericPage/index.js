import React, {Component} from 'react';
import QuerySection from '../sections/QuerySection'
import Partners from '../sections/Partners'
import PaymentPartners from '../sections/PaymentPartners'
import ScheduleDemo from '../sections/ScheduleYourDemo';
import Footer from '../sections/Footer';

class GenericPage extends Component {
    render() {
        return (
            <div>
                <QuerySection />
                <Partners />
                <PaymentPartners />
                <ScheduleDemo />
                <Footer />
            </div>
        );
    }
}

export default GenericPage;