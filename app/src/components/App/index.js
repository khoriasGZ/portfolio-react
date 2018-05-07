/*
 * Npm import
 */
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Presentation from 'src/components/Presentation';
import Nav from 'src/components/Nav';
import Bio from 'src/components/Bio';
import Skills from 'src/components/Skills';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';


/*
 * Code
 */
const routes = {
  '/': {
    title: 'Kévin GOMEZ',
    heading: 'Kévin GOMEZ Dév junior',
    nav: 'Bio',
    component: Bio,
  },
  '/competences': {
    title: 'Ce que je sais faire !',
    heading: 'Mes compétences',
    nav: 'Compétences',
    component: Skills,
  },
  '/contact': {
    title: 'N’hésitez plus, contactez-moi !',
    heading: 'Kévin GOMEZ',
    nav: 'Contact',
    component: Contact,
  },
};


/*
 * Component
 */
class App extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    history: PropTypes.object.isRequired,
  }


  /*
   * Lifecycles
   */
  componentWillMount() {
    this.listenRoute();
  }

  /*
   * Title
   */
  listenRoute = () => {
    // On affiche le bon title une première fois
    this.changeTitle(window.location);

    // On écoute le changement de route,
    // pour rechanger le title à chaque fois
    this.props.history.listen(this.changeTitle);
  }

  changeTitle = ({ pathname }) => {
    // On récupère notre objet de data
    const route = routes[pathname];

    // On modifie le title de la page
    App.title = route.title;
  }

  /**
   * Render
   */
  render() {
    return (
      <div id="app">
        <header id="app-header">
          <Presentation
            routes={routes}
          />
          <Nav routes={routes} />
        </header>
        <main id="app-content">
          <Switch>
            {Object.keys(routes).map(path => (
              <Route
                exact
                key={path}
                path={path}
                component={routes[path].component}
              />
            ))}
          </Switch>
        </main>
        <footer id="app-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(App);
