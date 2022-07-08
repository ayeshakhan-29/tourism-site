import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home.js';
import NewPackagePage from './Components/pages/NewPackagePage';
import Packages from './Components/pages/Packages';
import SigninPage from './Components/pages/SigninPage';
import SignUpPage from './Components/pages/SignUpPage';
import ContactUsPage from './Components/pages/ContactUsPage';
import AboutUsPage from './Components/pages/AboutUsPage';
// import UpdatePackagePage from './Components/pages/UpdatePackagePage'

function App() {
  return (
    <>
    <Router>
       <Navbar1/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path= "/signin" exact component = {SigninPage}/>
          <Route path= "/aboutus" exact component = {AboutUsPage}/>
          <Route path="/packages/new" exact component={NewPackagePage} />
           {/* <Route path="/packages/update" exact component={UpdatePackagePage} /> */}
          <Route path="/packages" exact component={Packages} />
          <Route path= "/signup" exact component = {SignUpPage}/>
          <Route path= "/contactus" exact component={ContactUsPage}/>
        </Switch>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
