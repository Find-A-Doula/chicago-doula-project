import React from 'react';
import Home from './pages/Home';
import UserSurvey from './pages/UserSurvey';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
    <ThemeProvider theme={theme}>
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/search" component={UserSurvey} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    </ThemeProvider>
);

export default App;
