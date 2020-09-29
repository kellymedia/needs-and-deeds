import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListPerson from './components/listPerson.component';
import EditPerson from './components/editPerson.component';
import CreatePerson from './components/createPerson.component';
import DeletePerson from './components/deletePerson.component';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="navbar-brand">Needs & Deeds</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">View Local Needs</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link"> Submit a Need</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Needs & Deeds</Link>
              <ul id="large-nav" className="right">
                <li className="navbar-item">
                  <Link to="/" className="">View Local Needs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Submit a Need</Link>
                </li> 
              </ul>
          </div>
          <div id="small-div">
              <ul id="small-nav">
                <li className="navbar-item">
                  <Link to="/" className="">View Local Needs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Submit a Need</Link>
                </li> 
              </ul>
          </div>
        </nav>
        <Route path="/" exact component={ListPerson} />
        <Route path="/edit/:id" component={EditPerson} />
        <Route path="/create" component={CreatePerson} />
        <Route path="/delete/:id" component={DeletePerson} />
      </div>
    </Router>
  );
}

export default App;