var React = require('react');
var react_dom = require('react-dom');
var AppComponent = require('./components/productBox.jsx');
require('./demo-es6/generator.jsx')
react_dom.render(<AppComponent />, document.getElementById('content'));