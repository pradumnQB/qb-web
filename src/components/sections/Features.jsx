import React, {Component} from 'react'
import restaurantPixel from '../../assets/images/restaurant_industry.png'
import groceryPixel from '../../assets/images/grocery_industry.png'
import spaPixel from '../../assets/images/spa_industry.png'
import retailPixel from '../../assets/images/retail_industry.png'
import check from '../../assets/icons/green_check.png'
import bulk_data_mgmt from '../../assets/images/bulk_data_mgmt.png'
import cloud_backup from '../../assets/images/cloud_backup.png'
import crm_loyalty from '../../assets/images/crm_loyalty.png'
import customer_invoices from '../../assets/images/customer_invoices.png'
import integration_iocn from '../../assets/images/integration_iocn.png'
import inventory_management from '../../assets/images/inventory_management.png'
import multiple_currencies from '../../assets/images/multiple_currencies.png'
import multiple_location from '../../assets/images/multiple_location.png'
import offline_mode from '../../assets/images/offline_mode.png'
import partners from '../../assets/images/partners.png'
import paymenmt_icon from '../../assets/images/paymenmt_icon.png'
import product_catalouge from '../../assets/images/product_catalogue.png'
import promotion_disocunyt from '../../assets/images/promotion_disocunyt.png'
import reports_icon from '../../assets/images/reports_icon.png'
import restaurant from '../../assets/images/restaurant.png'
import roles_permission from '../../assets/images/roles_permisssion.png'
import supported_business from '../../assets/images/supported_business.png'

export default() => {
    let self = this;

    let featureGrid = [
        {image: product_catalouge, title: 'Product Catalog', content: 'Manage product catalog with SKU level information on prices, taxes, charges, and more'},
        {image: customer_invoices, title: 'Customer Invoices', content: 'Generate proforma invoices, final invoices, credit sales, and no charge orders'},
        {image: inventory_management, title: 'Inventory Management', content: 'A dedicated module to manage outlet level, SKU level stock information of the entire catalog'},
        {image: paymenmt_icon, title: 'Payments', content: 'Accept payments through cash, card, online wallets, UPI, vouchers, credit notes, and cheque'},
        {image: crm_loyalty, title: 'CRM & Loyalty', content: 'Manage your customers, reward them with loyalty points and discounts based on their purchase history'},
        {image: promotion_disocunyt, title: 'Promotions & Discounts', content: 'Give spot discounts or apply them from a pre-defined list created at product or customer level'},
        {image: reports_icon, title: 'Reports', content: 'Get real-time sales updates or dig deeper to analyse your business with our exhaustive set of business reports'},
        {image: roles_permission, title: 'Roles & Permissions', content: 'Create unlimited users (staff) and manage their roles and permissions through your admin dashboard.'},
        {image: cloud_backup, title: 'Cloud Backup', content: 'Hosted on Amazon cloud infrastructure. Loss of your device will not lead to loss of your data.'},
        {image: offline_mode, title: 'Offline Mode', content: 'Works seamlessly without internet. Automatically syncs data once online.'},
        {image: integration_iocn, title: 'Integrations', content: 'Integrated with hundreds of devices, printers, barcode scanners, payment providers & softwares across the globe.'},
        {image: bulk_data_mgmt, title: 'Bulk Data Management', content: 'Managing catalog of hundreds of products was never so easy without our Excel and CSV based bulk upload tools.'},
        {image: multiple_location, title: 'Multiple Locations', content: 'Add a new outlet by the click of a button. Get all your reports sorted automatically without any hassle.'},
        {image: multiple_currencies, title: 'Multiple Currencies', content: 'Go global. Run your business in any available currency.'},
    ]

    let isCollapsed = true;

    function showMore(e) {
        let collapseDiv = document.getElementById('collapse_div');
        let featuresDiv = document.getElementById('features_div');

        if (isCollapsed) {
            featuresDiv.style.marginTop = '245px';
            collapseDiv.style.height = '1463px';
            e.target.innerText = 'Show Less ^';
        } else {
            featuresDiv.style.marginTop = '100px';
            collapseDiv.style.height = '500px';
            e.target.innerText = 'Show More v';
        }

        isCollapsed = !isCollapsed;
    }

    return (
        <div className='width-70 mg-100' id="features_div">
            <div className='width-100 flex-column '>
                <label className="font-medium-30-dark mg-bot-18" style={{marginBottom: 0}}>Features</label>
                <label className="font-medium-30-dark mg-bot-18" style={{fontWeight: 400, fontSize: '12px'}}>Billing . Inventory . Payments . CRM & Loyalty . Promotions . Reports</label>
            </div>

            <div id="collapse_div" style={{overflow: 'hidden', height: '500px', transition: 'height .5s'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '50px'}}>
                    {
                        (function() {
                            return featureGrid.map(function(v, i) {
                                return (
                                    <div style={{display: 'flex', flexBasis: '50%', alignItems: 'center', padding: '15px'}} key={i}>
                                        <img src={v.image} alt=""/>
                                        <div style={{margin: '10px', paddingRight: '20px'}}>
                                            <div style={{fontSize: '14px', fontWeight: 'bolder'}}>{v.title}</div>
                                            <div style={{fontSize: '13px'}}>{v.content}</div>
                                        </div>
                                    </div>
                                );
                            })
                        })()
                    }
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '82px'}}>
                    <h3 style={{fontWeight: 'bolder'}}>Supported Businesses</h3>
                    <p style={{width: '70%', textAlign: 'center'}}>QueueBusterTM is customized for the unique requirements of
General Retail, Restaurants, Grocery, Spa & Salon, and many other verticals.</p>
                    <img src={supported_business} alt=""/>
                </div>
            </div>

            <div id="show_more" style={{margin: 'auto', width: 'fit-content', marginTop: '7px', fontSize: '13px', color: '#acb3ba', cursor: 'pointer'}} onClick={showMore}>Show More v</div>

            <div className='flex-row mg-80' id="retail">
                <div className='width-45 text-left' style={{paddingRight: '60px'}}>
                    <img src={retailPixel}/>
                </div>
                <div className='width-65'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        General Retail
                    </label>
                    <p className='font-medium-16-dark'>
                        From mom & pop outlet to large format retail chain, QueueBusterTM is highly customizable for all retail formats. Just tap on some settings and you are good to go.
                    </p>
                    <ul style={ulStyle}>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Inventory management
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Generate your own barcodes, manage your inventory at product / SKU level, batch wise stock-in/out
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Customer relationship management
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Design and run loyalty programs, promotions, and spot discounts
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Supported formats
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Single / multi outlet, exhibitions, mobile salesforce, distributor and retailer network management
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex-row mg-80' id="restaurants">
                <div className='width-55'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Restaurants
                    </label>
                    <p className='font-medium-16-dark'>
                        Managing  tables, kitchen, and payments was never so easy without our incredibly intuitive and robust Restaurant POS.
                    </p>
                    <ul style={ulStyle}>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Menu management
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Manage modifiers, combos, and recipes
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Ordering
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Table reservation, split bill, and online orders
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Supported formats
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                QSR, fine dine, and food trucks
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='width-45 text-right' style={{paddingLeft: '60px'}}>
                    <img src={restaurantPixel}/>
                </div>
            </div>
            <div className='flex-row mg-80' id="grocery">
                <div className='width-40 text-left'>
                    <img src={groceryPixel}/>
                </div>
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Grocery Stores
                    </label>
                    <p className='font-medium-16-dark'>
                        QB is customized to handle the scale, speed, and accuracy required in the Grocery segment. Simplify your business and handle the store rush with ease
                    </p>
                    <ul style={ulStyle}>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Credit sales (Khata)
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Easy maintainence of credit history & settlement, SMS based invoicing
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Other highlights
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Barcode based sales & inventory management, mobile salesforce, pre-loaded list of 50,000+ products (India)
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Supported formats
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Kirana stores, flea markets, exhibitions
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex-row mg-80' id="spa">
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Spa & Salon
                    </label>
                    <p className='font-medium-16-dark'>
                        User QueueBusterTM as one stop shop solution to manage customer appointments and sell in-house products.
                    </p>
                    <ul style={ulStyle}>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Appointments
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Manage your customer appointments with an intuitive and easy-to-use interface
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Service Slip
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Quick & easy access to the services availed by a customer
                            </span>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <span style={{display: 'block', fontSize: '15px', marginBottom: '5px', fontWeight: 'bold'}}>
                                Packages & Memberships
                            </span>
                            <span style={{display: 'block', fontSize: '14px'}}>
                                Manage your client packages, make them silver, gold, or platinum members based on their purchase history
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='width-45 text-right' style={{paddingLeft: '60px'}}>
                    <img src={spaPixel}/>
                </div>
            </div>
            
        </div>
    )
}

const ulStyle = {
    listStyleImage: `url(${check})`,
    padding: '20px'
}