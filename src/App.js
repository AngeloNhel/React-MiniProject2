import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AppNavbar from './NavComponents/Navbar';
import Footer from './FooterComponents/Footer';
import Home from './NavComponents/Home';
import Menu from './NavComponents/Menu';
import Merchandise from './NavComponents/Merchandise';
import Rewards from './NavComponents/Rewards';
import OurCompany from './FooterComponents/OurCompany';
import OurStoriesandNews from './FooterComponents/OurStoriesandNews';
import CustomerService from './FooterComponents/CustomerService';
import Careers from './FooterComponents/Careers';
import OrderontheApp from './FooterComponents/OrderontheApp';
import Delivery from './FooterComponents/Delivery';
import SendeGifts from './FooterComponents/SendeGifts';
import GrabPartnership from './FooterComponents/GrabPartnership';
import PrivacyPolicy from './FooterComponents/PrivacyPolicy';
import TermofUse from './FooterComponents/termofUse';
import SiteMap from './FooterComponents/SiteMap';
import CookiesPreferences from './FooterComponents/CookiesPreferences';
import JoinNow from './NavComponents/JoinNow';
import Admin from './NavComponents/Admin';




function App() {
  return (
   

  <BrowserRouter>   
    <AppNavbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Merchandise" element={<Merchandise/>} />
          <Route path="/Rewards" element={<Rewards/>} />
          <Route path="/OurCompany" element={<OurCompany/>} />
          <Route path="/OurStoriesandNews" element={<OurStoriesandNews/>}/>
          <Route path="/CustomerService" element={<CustomerService/>}/>
          <Route path="/Careers" element={<Careers/>}/>
          <Route path="/OrderontheApp" element={<OrderontheApp/>}/>
          <Route path="/Delivery" element={<Delivery/>}/>
          <Route path="/SendeGifts" element={<SendeGifts/>}/>
          <Route path="/GrabPartnership" element={<GrabPartnership/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/termofUse" element={<TermofUse/>}/>
          <Route path="/SiteMap" element={<SiteMap/>}/>
          <Route path="/CookiesPreferences" element={<CookiesPreferences/>}/>
          <Route path="/JoinNow" element={<JoinNow/>}/>
          <Route path="/admin/dashboard" element={<Admin/>}/>
          
      </Routes>
    <Footer/>  
  </BrowserRouter>
      
      

      
     
  );
}

export default App;
