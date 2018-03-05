import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'

export default class ContainerExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		const route = this.props.routes[1].path || 'area'

		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/example">
				        React-d3 basic
				      </a>
				    </div>
				  </div>
				</nav>
				<div style={{marginTop: '50px', padding: '30px'}}>
					<Nav bsStyle="pills" justified activeKey={route}>
	          <NavItem eventKey="area" href="/example/area">Area Chart</NavItem>
	          <NavItem eventKey="area_negative" href="/example/area_negative">Area Chart with negative</NavItem>
	          <NavItem eventKey="area_stack" href="/example/area_stack">Area Stack Chart</NavItem>
	          <NavItem eventKey="area_stack_negative" href="/example/area_stack_negative">Area Stack Chart with negative</NavItem>
	          <NavItem eventKey="bar" href="/example/bar">Bar</NavItem>
	          <NavItem eventKey="bar_group" href="/example/bar_group">Bar Group</NavItem>
	          <NavItem eventKey="bar_group_horizontal" href="/example/bar_group_horizontal">Bar Group Horizontal</NavItem>
	          <NavItem eventKey="bar_group_negative" href="/example/bar_group_negative">Bar Group with negative</NavItem>
	          <NavItem eventKey="bar_horizontal" href="/example/bar_horizontal">Bar Horizontal</NavItem>
	          <NavItem eventKey="bar_negative" href="/example/bar_negative">Bar with negative</NavItem>
	          <NavItem eventKey="bar_stack" href="/example/bar_stack">Bar Stack</NavItem>
	          <NavItem eventKey="bar_stack_horizontal" href="/example/bar_stack_horizontal">Bar Stack Horizontal</NavItem>
	          <NavItem eventKey="bar_stack_negative" href="/example/bar_stack_negative">Bar Stack with negative</NavItem>
	        </Nav>
	      </div>
				{this.props.children}
			</div>
		)
	}
}