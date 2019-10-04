import React,{Component} from 'react'
import Header from '../common/Header'
import CompleteSolution from '../sections/CompleteSolution';
import EnterpriseSolutions from '../sections/EnterpriseSolutions'
import FAQ from '../sections/FAQ';
import QuerySection from '../sections/QuerySection'
import Partners from '../sections/Partners'
import PaymentPartners from '../sections/PaymentPartners'
import ScheduleDemo from '../sections/ScheduleYourDemo';
import Footer from '../sections/Footer';
import './solutions.scss';

class LandingPage extends Component{
    render(){
        return(
            // <div className="header-div">
            <div>
                <Header />
                <CompleteSolution />
                <EnterpriseSolutions />
                <FAQ />
                <QuerySection />
                <Partners />
                <PaymentPartners />
                <ScheduleDemo />
                <Footer />
            </div>
            // </div>
        )
    }
}

export default LandingPage