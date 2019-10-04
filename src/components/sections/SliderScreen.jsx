import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./slider.scss"
import StartTrial from './StartTrial'
import White from '../../assets/images/white_threedevices.png'
// import Green from '../../assets/images/green_device.png'
// import Blue from '../../assets/images/skyblue_device.png'
import Yellow from '../../assets/images/yellow_device.png'
import Pink from '../../assets/images/pink_device.png'
import DarkYellow from '../../assets/images/darkYellow_device.png'

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} axis={"horizontal"}
                 emulateTouch={true}>
                    <div>
                        <div className="legend width-40" id="legend">
                            <label className='font-medium-32-dark'>QueueBuster™ for Retail</label>
                            <p>
                            A powerful Point of Sale that has everything you need to run, manage & grow your retail business.
                                
                            </p>
                            <button >
                                <span className='font-medium-18-white'>
                                    Request a Quote 
                                </span>
                            </button>
                        </div>
                        <div >

                        </div>
                        <img src={White}/>
                    </div>
                    <div>
                        <div className="legend width-40" id="legend">
                            <label  className='font-medium-32-dark' >QueueBuster™ for Grocery</label>
                            <p>
                                With product list in QueueBuster™ increase your revenue, streamline your operations, and engage with your customers like never before.

                                
                            </p>
                            <button>
                                <span  className='font-medium-18-white'>
                                    Request a Quote 
                                </span>
                            </button>
                        </div>
                        <img src={Yellow}/>
                    </div>
                    <div>
                        <div className="legend width-40" id="legend">
                            <label className='font-medium-32-dark'>QueueBuster™ for Restaurant</label>
                            <p>
                                Integrated with Online Ordering, Manage Tables, Bill Splitting, Takeaways, Dine-in, Delivery, Hold Orders, Loyalty and Much More.        
                            </p>
                            <button>
                                <span  className='font-medium-18-white'>
                                    Request a Quote 
                                </span>
                            </button>
                        </div>
                        <img src={Pink}/>
                    </div>

                    <div>
                        <div className="legend width-40" id="legend">
                            <label className='font-medium-32-dark'>QueueBuster™ for Spa & Saloon</label>
                            <p>
                                Keep control of memberships & appointments with smooth management of all your spa & salon services.  
                            </p>
                            <button>
                                <span  className='font-medium-18-white'>
                                    Request a Quote 
                                </span>
                            </button>
                        </div>
                        <img src={DarkYellow}/>
                    </div>
          
                   {/* <div>
                        <div className="legend">
                            <label>Queuebuster Point of Sale</label>
                            <p>
                                A powerful Point of Sale and Inventory Management for restaurants, coffee shops,
                                spa and more. Small or Big Business Queuebuster promiseses you a great POS
                                Service.
                            </p>
                        </div>
                        <img src={f6}/>
                    </div> */}
                </Carousel> 
                <StartTrial />
            </div>
        )
    }

    componentDidMount() {
        
    }
}


export default Slider