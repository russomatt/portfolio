import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App.js'
import Repos from './components/Repos.js'
import Home from './components/Home.js'

require("./css/base.scss");


render((
  <App />
), document.getElementById('content'))


// import ReactDOM from 'react-dom';
// import React from 'react';
// import { Router, Route, Link } from 'react-router'

// import Home from './components/Home.js';
// import Work from './components/Work.js';

// require("./css/base.scss");

// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/work">Work</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//         <Route name="work" path="/work" handler={ Work }/>
//     </Route>
//   </Router>
// ), document.getElementById('content'))

// // Render the application
// // ReactDOM.render(
// //     <Home />,
// //     document.getElementById('content')
// // );

