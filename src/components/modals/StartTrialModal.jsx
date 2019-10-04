import React, {Component} from 'react';
import './StartTrialModal.scss'

class StartTrialModal extends Component {
    render() {
        return (
            <div id="start_trial_modal" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <h3>Schedule your personal demo</h3>
                                <p>1000+ businesses have already tried Queuebuster. Start your 14-days trial now.</p>
                                <form action="" method="">
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <input type="text" name="" id="" placeholder="Name"/>
                                        <input type="text" name="" id="" placeholder="Mobile Number"/>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <input type="text" name="" id="" placeholder="Email Address"/>
                                        <input type="text" name="" id="" placeholder="Choose A Time to call"/>
                                    </div>
                                    <input type="text" name="" id="" placeholder="What would you be using Queuebuster for?"/>
                                    <button>Request Demo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartTrialModal;