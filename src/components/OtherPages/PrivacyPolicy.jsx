import React, {Component} from 'react';
import GenericPage from '../GenericPage';
import Header from '../common/Header';

class PrivacyPolicy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{backgroundColor: '#f3f7fd', textAlign: 'center', padding: '70px 100px', marginTop: '68px'}}>
                    <h3 style={{fontWeight: 'bolder'}}>Privacy Policy</h3>
                    <p style={{fontSize: '14px', fontWeight: 500, padding: '30px 70px'}}>We are dedicated to providing our partners with exceptional partnership opportunities and sustainable business and revenue growth through our value-add programs and benefits. We provide 14 days of FREE trial with every licence. You assume the responsibility for your purchase, and therefore no refunds will be issued. However, you can stop using our services any time you want.</p>
                </div>
                <div style={{textAlign: 'left', padding: '100px 170px', fontSize: '14px', fontWeight: 500}}>
                This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
<br/><br/>
What personal information do we collect from the people that visit our blog, website or app?
When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.
<br/><br/>
When do we collect information?
We collect information from you when you register on our site, fill out a form, use live chat, open a support ticket, provide us with feedback on our products or services, or enter information on our site.
<br/><br/>
How do we use your information?
We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
<br/><br/>
To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
To allow us to better service you in responding to your customer service requests.
To quickly process your transactions.
To ask for ratings and reviews of services or products.
To follow up with them after correspondence (live chat, email or phone inquiries).
How do we protect your information?
We do not use vulnerability scanning and/or scanning to PCI standards.
An external PCI compliant payment gateway handles all CC transactions.
We use regular Malware Scanning.
<br/><br/>
Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
<br/><br/>
We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.
<br/><br/>
All transactions are processed through a gateway provider and are not stored or processed on our servers.
<br/><br/>
Do we use 'cookies'?
Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                </div>
                <GenericPage/>
            </div>
        );
    }
}

export default PrivacyPolicy;