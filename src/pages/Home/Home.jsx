import React, { PureComponent } from 'react';
import ListMiddledescAva from 'static/images/ListMiddleDescAva.jpg'
import s from './Home.css'
import { Link } from 'react-router-dom'

class Home extends PureComponent {
	static propTypes = {}
	static defaultProps = {}

	render () {
		return (
			<div>
				<h1 className={s.root}>Home</h1>
				<img src={ListMiddledescAva} alt=""/>
				<Link to="/about">got ot about page</Link>
			</div>
		)
	}
}

export default Home