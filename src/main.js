import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'pages/App'

let container

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		container)
}

document.addEventListener('DOMContentLoaded', () => {
	container = document.createElement('div')
	document.getElementsByTagName('body')[0].appendChild(container)

	render(App)
})

if (module.hot) {
	module.hot.accept('pages/App', () => {
		render(App)
	})
}