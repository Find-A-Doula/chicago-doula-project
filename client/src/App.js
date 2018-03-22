import React from 'react';
import { Container } from './components/Grid';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
	<Container>
		<Router>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	</Container>
);

export default App;
