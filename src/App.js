import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListPerson from './components/list-person.component';
import EditPerson from './components/edit-person.component';
import CreatePerson from './components/create-person.component';
import DeletePerson from './components/delete-person.component';

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
            <Link to="/!" className="brand-logo">Needs & Deeds</Link>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li className="navbar-item">
                  <Link to="/" className="">View Local Needs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Submit a Need</Link>
                </li> 
              </ul>
          </div>
        </nav>
        <ul id="nav-mobile" className="sidenav">
                <li className="navbar-item">
                  <Link to="/" className="">View Local Needs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link"> Submit a Need</Link>
                </li>
              </ul>
        <div className="deeds"></div>
        <br />
        <Route path="/" exact component={ListPerson} />
        <Route path="/edit/:id" component={EditPerson} />
        <Route path="/create" component={CreatePerson} />
        <Route path="/delete/:id" component={DeletePerson} />
      </div>
    </Router>
  );
}

export default App;