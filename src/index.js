import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Followers from './views/followers'
import Home from './views/home'
import VideoCalling from './views/video-calling'
import PatientForm from './views/patient-form'
import CallTherapistPov from './views/call-therapist-pov'
import AboutUs from './views/about-us'
import ChatRoom from './views/chat-room'
import Categories from './views/categories'
import Profile from './views/profile'
import MedicalInsurance from './views/medical-insurance'
import ReviewForm from './views/review-form'
import Register from './views/register'
import SellProduct from './views/sell-product'
import BeforeCall from './views/before-call'
import Login from './views/login'
import CallPatientPov from './views/call-patient-pov'
import Store from './views/store'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Followers} exact path="/followers" />
        <Route component={Home} exact path="/" />
        <Route component={VideoCalling} exact path="/video-calling" />
        <Route component={PatientForm} exact path="/patient-form" />
        <Route component={CallTherapistPov} exact path="/call-therapist-pov" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ChatRoom} exact path="/chat-room" />
        <Route component={Categories} exact path="/categories" />
        <Route component={Profile} exact path="/profile" />
        <Route component={MedicalInsurance} exact path="/medical-insurance" />
        <Route component={ReviewForm} exact path="/review-form" />
        <Route component={Register} exact path="/register" />
        <Route component={SellProduct} exact path="/sell-product" />
        <Route component={BeforeCall} exact path="/before-call" />
        <Route component={Login} exact path="/login" />
        <Route component={CallPatientPov} exact path="/call-patient-pov" />
        <Route component={Store} exact path="/store" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
