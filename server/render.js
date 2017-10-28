const React = require('react');

//const App = require ('../client/components/App');//this not work

import App from '../client/components/App';

const  ReactDOMServer = require ('react-dom/server');

export default () => {
   return  ReactDOMServer.renderToString(<App />);
};

/*const html=  ReactDOMServer.renderToString(<App />);

console.log(html);*/