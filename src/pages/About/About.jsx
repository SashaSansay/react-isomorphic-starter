import React, { PureComponent } from 'react'
import ListMiddledescAva from 'static/images/ListMiddleDescAva.jpg'
import s from './About.css'
import { Link } from 'react-router-dom'

class About extends PureComponent {
	static propTypes = {}
	static defaultProps = {}

	render () {
		return (
			<div>
				<h1 className={s.root}>About</h1>
				<img src={ListMiddledescAva} alt=""/>
				<Link to="/">got ot about home</Link>
			</div>
		)
	}
}

export default About