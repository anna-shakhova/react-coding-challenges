import './styles/_routes.scss';
import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import LaunchPad from './LaunchPad';

// Use something like react-router-dom to manage multiple pages/routes

const Routes = () => (
  <BrowserRouter>
    <div className="links">
      <Link to="/class">Class Component</Link>
      <Link to="/func">Functional Component</Link>
    </div>
    <LaunchPad/>
  </BrowserRouter>
);

export default Routes;
