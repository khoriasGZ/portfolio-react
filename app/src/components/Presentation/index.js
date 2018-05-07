/*
 * Npm import
 */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * Local import
 */

/*
 * Code
 */
const Presentation = ({ routes }) => (
  <div id="presentation">
    <div id="presentation-container">
      <img
        id="presentation-image"
        alt="Kevin gomez"
        src="/Image-portefolio/moiphoto1.JPG"
      />
      <div id="presentation-headline">
        <h1 id="presentation-title">
          {Object.keys(routes).map(path => (
            <Route
              exact
              key={path}
              path={path}
              render={() => <span>{routes[path].heading}</span>}
            />
          ))}
        </h1>
        <h2 id="presentation-subtitle">Un portfolio et bien plus encore</h2>
      </div>
    </div>
  </div>
);
Presentation.propTypes = {
  routes: PropTypes.object.isRequired,
};

/*
 * Export default
 */
export default Presentation;
