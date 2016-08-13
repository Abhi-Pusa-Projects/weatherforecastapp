import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var Ajax = require('react-ajax');

//Router app in react
class App extends React.Component{
    render(){
      return(
          <div>
              <h1>Llyords Bank Application</h1>
              {this.props.children}
          </div>
      );
    }
}


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
      </Route>
   </Router>
), document.getElementById('app'));
