import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import AOS from 'aos';
import PureCounter from "../node_modules/@srexi/purecounterjs/purecounter.js";

import Navbar from './components/Navbar';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import AddUser from './components/User/AddUser';
import UpdateUser from './components/User/UpdateUser';
import AllUsers from './components/User/AllUsers';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import { useEffect } from 'react';
import BlogScreen from './screens/BlogScreen/index.js';
import BlogDetailsScreen from './screens/BlogDetailsScreen/index.js';
// import ServiceDetailsScreen from './screens/ServiceDetailsScreen/index.js';
// import ServiceScreen from './screens/ServiceScreen/index.js';
import AboutScreen from './screens/AboutScreen/index.js';
import ContactScreen from './screens/ContactScreen/index.js';
import Signup from './screens/AuthScreen/Signup.js';
import Login from './screens/AuthScreen/Login.js';
// import Dashboard from './components/Dashboard/index.js';
import TandC from './components/T&CPolicy/TandC.js';
import PrivacyPolicy from './components/T&CPolicy/PrivacyPolicy.js';
import FAQScreen from './screens/FAQScreen/index.js';
// import Newsletters from './components/Dashboard/Newsletters/index.js';
function App() {

  // var pure = "";
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    $(".App").addClass("hello");

    new PureCounter();
  }, []);

  return (
    <HelmetProvider>

      <div className="App">
        <Helmet>
          <title>Hello World</title>
          
          {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
            type="text/javascript"></script>
          <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script> */}
        </Helmet>


        <BrowserRouter>
        {/* {{pure}} */}
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />} errorElement={<ErrorScreen />} />
            <Route path='/about' element={<AboutScreen />} errorElement={<ErrorScreen />} />
            <Route path='/blogs' element={<BlogScreen />} errorElement={<ErrorScreen />} />
            <Route path='/blogs/:id' element={<BlogDetailsScreen />} errorElement={<ErrorScreen />} />
            {/* <Route path='/services' element={<ServiceScreen />} errorElement={<ErrorScreen />} /> */}
            {/* <Route path='/services/:id' element={<ServiceDetailsScreen />} errorElement={<ErrorScreen />} /> */}
            <Route path='/contact' element={<ContactScreen />} errorElement={<ErrorScreen />} />
            <Route path='/login' element={<Login />} errorElement={<ErrorScreen />} />
            <Route path='/signup' element={<Signup />} errorElement={<ErrorScreen />} />
            {/* <Route path='/dashboard' element={<Dashboard />} errorElement={<ErrorScreen />} /> */}
            {/* <Route path='/dashboard/newsletter' element={<Newsletters />} errorElement={<ErrorScreen />} /> */}
            <Route path='/privacypolicy' element={<PrivacyPolicy />} errorElement={<ErrorScreen />} />
            <Route path='/tandc' element={<TandC />} errorElement={<ErrorScreen />} />
            <Route path='/faq' element={<FAQScreen />} errorElement={<ErrorScreen />} />
            {/* <Route path='/blogs' element={<Dashboard />} errorElement={<ErrorScreen />} /> */}
            {/* <Route path='/login' element={<Login />} errorElement={<ErrorScreen />} />
            <Route path='/signup' element={<Signup />} errorElement={<ErrorScreen />} />
            <Route path='/dashboard' element={<Dashboard />} errorElement={<ErrorScreen />} /> */}


            <Route path='/user' element={<AllUsers />} errorElement={<ErrorScreen />} />
            <Route path='/user/add' element={<AddUser />} errorElement={<ErrorScreen />} />
            <Route path='/user/edit/:code' element={<UpdateUser />} errorElement={<ErrorScreen />} />
            <Route path='/error' element={<ErrorScreen />} errorElement={<ErrorScreen />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </BrowserRouter>
        <ToastContainer className='toast-position' position='bottom-right'></ToastContainer>
      </div>
    </HelmetProvider>

  );
}

export default App;
