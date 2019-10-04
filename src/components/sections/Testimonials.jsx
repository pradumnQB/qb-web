import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./testimonial.scss"
// import "./slider.scss"
import person_1 from '../../assets/images/person_1.png'
import person_2 from '../../assets/images/person_2.png'
import person_3 from '../../assets/images/person_3.png'

class Testimonials extends Component {
    render() {
        return (
            <div className='width-100' style={{padding:'60px 0 20px 0', backgroundColor:"#f7f7f7"}} id={'testimonials'}>
            <div className=''>
                <div className='width-100 flex-column mg-bot-0'>
                    <label className="font-medium-30-dark">Some words from our clients</label>
                </div>

                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    axis={"horizontal"}
                    emulateTouch={true}
                    centerMode
                    centerSlidePercentage={100}
                    emulateTouch>
                    <div style={{alignItems:'center', display: 'flex', backgroundColor: 'white', padding: '20px'}} className="test-li">
                        <img src={person_1} style={{flexBasis: '30%', padding: '4%'}}/>
                        <div style={{flexBasis: '70%'}}>
                            <div style={{textAlign: 'left'}}>
                                <span className='font-medium-16-dark'>
                                    Melissa Dean
                                </span>
                                <br/>
                                <label className='font-medium-16-light'>Business Manager, Shopprix Mart</label>
                            </div>
                            <p style={{textAlign: 'left'}}>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                        </div>
                    </div>

                    <div style={{alignItems:'center', display: 'flex', backgroundColor: 'white', padding: '20px'}} className="test-li">
                        <img src={person_2} style={{flexBasis: '30%', padding: '4%'}}/>
                        <div style={{flexBasis: '70%'}}>
                            <div style={{textAlign: 'left'}}>
                                <span className='font-medium-16-dark'>
                                    Kenneth Stanley
                                </span>
                                <br/>
                                <label className='font-medium-16-light'>Business Manager, Shopprix Mart</label>
                            </div>
                            <p style={{textAlign: 'left'}}>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                        </div>
                    </div>

                    <div style={{alignItems:'center', display: 'flex', backgroundColor: 'white', padding: '20px'}} className="test-li">
                        <img src={person_3} style={{flexBasis: '30%', padding: '4%'}}/>
                        <div style={{flexBasis: '70%'}}>
                            <div style={{textAlign: 'left'}}>
                                <span className='font-medium-16-dark'>
                                    Linda Bennett
                                </span>
                                <br/>
                                <label className='font-medium-16-light'>Business Manager, Shopprix Mart</label>
                            </div>
                            <p style={{textAlign: 'left'}}>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
            </div>
        )
    }

    componentDidMount() {
        document.querySelector('#testimonials .carousel').style.marginTop = '0px !important'
    }
}

export default Testimonials