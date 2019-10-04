import React, {Component} from 'react';
import './BusinessFeatures.scss'

class BusinessFeatures extends Component {
    constructor() {
        super()
        this.renderItems = this.renderItems.bind(this);
    }

    render() {
        let items = []

        return (
            <div id="features">
                <h3>Features</h3>
                <label>Billing | Inventory | Reports | CRM & Loyalty</label>

                <div>
                    {this.renderItems()}
                </div>
            </div>
        )
    }

    renderItems() {

    }
}

export default BusinessFeatures;