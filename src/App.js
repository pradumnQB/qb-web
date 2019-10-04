import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

// import Login from './components/common/Login';
// import LoggedIn from './components/common/LoggedIn';
import LandingPage from './components/LandingPage';
import BusinessPage from './components/BusinessPage';
import SolutionsPage from './components/SolutionsPage';
import TermsAndServices from './components/OtherPages/TermsAndServices';
import GetInTouch from './components/OtherPages/GetInTouch';
import Policies from './components/OtherPages/Policies';
import PrivacyPolicy from './components/OtherPages/PrivacyPolicy';
import Pricing from './components/OtherPages/Pricing';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <BrowserRouter>

        <div className="App" style={{height:'100%'}}>
           <Switch>   
            {/* <Route exact path="/login" component={Login}/>   */}
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/business" component={BusinessPage}/> 
            <Route exact path="/solutions" component={SolutionsPage}/> 
            <Route exact path="/termsAndServices" component={TermsAndServices}/> 
            <Route exact path="/getInTouch" component={GetInTouch}/> 
            <Route exact path="/policies" component={Policies}/> 
            <Route exact path="/privacyPolicy" component={PrivacyPolicy}/> 
            <Route exact path="/pricing" component={Pricing}/> 
            {/* <Route  path="/" component={LoggedIn}/>  */}

           </Switch> 
        </div>

      </BrowserRouter>

      </Provider>
    );
  }
}


 
export default App;