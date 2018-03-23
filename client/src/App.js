import React from 'react';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
	<Router>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</Router>
);

export default App;
