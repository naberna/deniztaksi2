import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { NoMatch } from './screens/NoMatch';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import FooterPage from './components/Footer';
import { Register } from './screens/Register';
import Signin from './screens/Signin';

function App() {    
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
        
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
              <Route path="/signin" component={Signin} />
              <Route component={NoMatch} />
          </Switch>
          <FooterPage />
        </Router>
      </React.Fragment>
   );
  }
  
  export default App;
