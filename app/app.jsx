var React = require('react');
var ReactDOM = require('react-dom');

import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;

var Main = require('Main');

//load foundation
require('style-loader!css-loader!sass-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <HashRouter>
    <Main>
    </Main>
  </HashRouter>,
  document.getElementById('app')
);
