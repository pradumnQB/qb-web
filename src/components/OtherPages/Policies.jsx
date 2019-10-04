import React, {Component} from 'react';
import GenericPage from '../GenericPage';
import Header from '../common/Header';

class Policies extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{backgroundColor: '#f3f7fd', textAlign: 'center', padding: '70px 100px', marginTop: '68px'}}>
                    <h3 style={{fontWeight: 'bolder'}}>Policies</h3>
                    <p style={{fontSize: '14px', fontWeight: 500, padding: '30px 70px'}}>We are dedicated to providing our partners with exceptional partnership opportunities and sustainable business and revenue growth through our value-add programs and benefits. We provide 14 days of FREE trial with every licence. You assume the responsibility for your purchase, and therefore no refunds will be issued. However, you can stop using our services any time you want.</p>
                </div>
                <div style={{textAlign: 'left', padding: '100px 170px', fontSize: '14px', fontWeight: 500}}>
                1. Cookie Policy<br/><br/>
1.1 Do we use 'cookies'?
Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
<br/><br/>
1.2 We use cookies to:
Help remember and process the items in the shopping cart.
Understand and save user's preferences for future visits.
Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.
You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since every browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
<br/><br/>
1.3 If users disable cookies in their browser?
If you turn cookies off, some of the features that make your site experience more efficient may not function properly.
<br/><br/>
1.4 Third-party disclosure
We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
<br/><br/>
However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
<br/><br/>
1.5 Third-party links
Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
<br/><br/>
1.6 Google
Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. Those can be found here.
<br/><br/>
We use Google AdSense Advertising on our website.
<br/><br/>
Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
<br/><br/>
1.7 We have implemented the following:
Remarketing with Google AdSense.
Demographics and Interests Reporting.
We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
<br/><br/>
1.8 Opting out:
Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.
                </div>
                <GenericPage/>
            </div>
        );
    }
}

export default Policies;