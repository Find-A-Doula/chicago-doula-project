// Vendor
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Local
import Home from './pages/Home';
import UserSurvey from './pages/UserSurvey';
import SearchResults from './pages/SearchResults';
import Learn from './pages/Learn';
import ComingSoon from './pages/Delivering';
import MaterialUI from './pages/MaterialUI';
import Register from './pages/Register';
import './App.css';
import theme from './theme';

const muiTheme = createMuiTheme(theme);

const App = () => (
    <div className="App">
        <MuiThemeProvider theme={muiTheme}>
            <Router>
                <Switch>
                    <Route path="/search" component={UserSurvey} />
                    <Route path="/results" component={SearchResults} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/comingsoon" component={ComingSoon} />
                    <Route path="/materialui" component={MaterialUI} />
                    <Route path="/register" component={Register} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </div>
);

export default App;
