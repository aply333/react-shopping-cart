import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';
import { ProductContext } from "./contexts/ProductContext";

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
