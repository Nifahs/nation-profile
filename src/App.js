import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './Components/Home/Home';
import HeadNav from './Components/HeadNav/HeadNav';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import CountryProfile from './Components/CountryProfile/CountryProfile';




function App() {
  return (
    <div >
     <HeadNav/>
     {/* <Home/> */}
     <Router>
       <Switch>
         <Route exact path="/home">
           <Home/>
         </Route>
         <Route path="/country/name/:countryName">
           <CountryProfile/>
         </Route>
         <Route exact path="/">
           <Home/>
         </Route>
         
         <Route path="*">
           <NotFound/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
