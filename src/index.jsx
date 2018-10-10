import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'normalize.css'

const renderApp = () => {
	render(<App />, document.getElementById('app'))
}
renderApp()

if (module.hot) {
	module.hot.accept('./App', () => {
		renderApp()
	})
}
