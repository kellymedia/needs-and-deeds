import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListPerson from "./components/list-person.component";
import EditPerson from "./components/edit-person.component";
import CreatePerson from "./components/create-person.component";
import DeletePerson from "./components/delete-person.component";
import Location from "./components/Location";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Local need MERN App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  List name of people in need
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  {" "}
                  Name
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={ListPerson} />
        <Route path="/edit/:id" component={EditPerson} />
        <Route path="/create" component={CreatePerson} />
        <Route path="/delete/:id" component={DeletePerson} />
        <Location />
      </div>
    </Router>
  );
};

export default App;
