import React, { PureComponent } from 'react'
import Home from 'pages/Home'
import About from 'pages/About'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends PureComponent {
	static propTypes = {}
	static defaultProps = {}

	render () {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
				</div>
			</Router>
		)
	}
}

export default App