import React,{Component} from 'react'
import Header from '../common/Header'
import SliderScreen from '../sections/SliderScreen'
import GradientSection from '../sections/GradientSection';
import BusinessTypes from '../sections/BusinessTypes'
import Plans from '../sections/Plans'
import FAQ from '../sections/FAQ'
import Testimonials from '../sections/Testimonials'
import Partners from '../sections/Partners'
import ScheduleYourDemo from '../sections/ScheduleYourDemo'
import Footer from '../sections/Footer'
import StartTrial from '../sections/StartTrial';
import PaymentPartners from '../sections/PaymentPartners'
import StartTrialModal from '../modals/StartTrialModal';
import './landing.scss'

class LandingPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <GradientSection />
                <StartTrial/>
                <FAQ/>
                <Partners/>
                <Testimonials/>
                <PaymentPartners/>
                <ScheduleYourDemo/>
                <Footer/>
                <StartTrialModal />
            </div>
        )
    }
}

export default LandingPage