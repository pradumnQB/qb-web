import React,{Component} from 'react'
import Header from '../common/Header'
import StartTrialImg from '../sections/StartTrialImg';
import BusinessFeatures from '../sections/BusinessFeatures';
import Partners from '../sections/Partners'
import ScheduleYourDemo from '../sections/ScheduleYourDemo'
import Footer from '../sections/Footer'
import '../LandingPage/landing.scss'

class BusinessPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <StartTrialImg/>
                <BusinessFeatures/>
                <Partners/>
                <ScheduleYourDemo/>
                <Footer/>
            </div>
        )
    }
}

export default BusinessPage