import React from 'react';
import ReactDOM from 'react-dom';
// import CSSModules from 'react-css-modules';
// import styles from  './index.css';
import RouteIndex from './router/router-index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteIndex />, document.getElementById('root'));
registerServiceWorker();
