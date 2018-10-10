// Vendor
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Local
import Home from './views/Home'
// import UserSurvey from './views/UserSurvey'
// import SearchResults from './views/SearchResults'
// import Learn from './views/Learn'
// import ComingSoon from './views/Delivering'
import theme from './theme'

const FourOhFour = () => <h1>404</h1>

const muiTheme = createMuiTheme(theme)

const App = () => (
	<div className="app">
		<MuiThemeProvider theme={muiTheme}>
			<BrowserRouter>
				<div className="app">
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route path="/search" component={UserSurvey} /> */}
						{/* <Route path="/results" component={SearchResults} /> */}
						{/* <Route path="/learn" component={Learn} /> */}
						{/* <Route path="/comingsoon" component={ComingSoon} /> */}
						<Route component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		</MuiThemeProvider>
	</div>
)

export default App
