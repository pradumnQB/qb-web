import React, {Component} from 'react';
import GenericPage from '../GenericPage';
import FAQ from '../sections/FAQ';
import Header from '../common/Header';


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

class Pricing extends Component {
    featureGrid = [
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

    plans = [
        {title: 'Monthly', price: '₹999.00', rate: 'per month', content: 'Pay us on a monthly basis. Most flexible plan to let you operate on a minimum budget.'},
        {title: 'Half Yearly', price: '₹916.50', rate: 'per month', content: 'Pay us every six months. Get 15 days worth of FREE usage with our half-yearly plan.'},
        {title: 'Annualy', price: '₹833.25', rate: 'per month', content: 'Pay us every year. Get 2 months worth of FREE usage with our yearly plan.'}
    ]

    render() {
        let self = this;
        return (
            <div>
                <Header/>
                <div style={{backgroundColor: '#f3f7fd', textAlign: 'center', padding: '30px 100px', height: '280px', marginTop: '68px'}}>
                    <h3 style={{fontWeight: 'bolder'}}>Choose the plan that fits your business need</h3>
                    <p style={{fontSize: '14px', fontWeight: 500, padding: '0 70px'}}>1000+ businesses have already tried Queuebuster. Start your 14-days trial now.</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '-100px', marginBottom: '100px'}}>
                    {
                        (function() {
                            return self.plans.map(function(v) {
                                return (
                                    <div style={{width: '290px', margin: '10px', boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '0 15px', backgroundColor: 'white', position: 'relative'}}>
                                        <p style={{textAlign: 'center', fontWeight: 'bolder', textAlign: 'center', fontWeight: 'bolder', margin: '20px 0'}}>{v.title}</p>
                                        <h3 style={{textAlign: 'center', color: '#498bdc', margin: 0}}>{v.price}</h3>
                                        <p style={{textAlign: 'center', fontSize: '12px', marginBottom: '31px', fontWeight: 500}}>{v.rate}</p>
                                        <p style={{textAlign: 'center', fontSize: '13px', color: '#acb3ba', marginBottom: '84px'}}>{v.content}</p>
                                        <button style={{margin: 'auto', display: 'block', border: 'none',backgroundColor: '#498bdc', color: 'white', padding: '3px 15px', borderRadius: '15px',fontWeight: 'bold', fontSize: '15px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>Choose</button>
                                    </div>
                                )
                            })
                        })()
                    }
                </div>



                <h3 style={{textAlign: 'center', margin: '30px 0 0 0', fontWeight: 'bolder'}}>Best Features</h3>
                <p style={{textAlign: 'center'}}>Billing . Inventory . Payments . CRM & Loyalty . Promotions . Reports</p>
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '50px', padding: '0 10%'}}>
                    {
                        (function() {
                            return self.featureGrid.map(function(v) {
                                return (
                                    <div style={{display: 'flex', flexBasis: '50%', alignItems: 'center', padding: '15px'}}>
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
                <FAQ/>
                <GenericPage/>
            </div>
        );
    }
}

export default Pricing;