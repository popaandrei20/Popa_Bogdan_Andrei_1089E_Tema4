import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import Form from './Form'



class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
	}
	add = (item) => {
		this.store.addRobot(item);
		console.log(item);
	}

	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
	render() {
		return (
			<div>
				 <Form onAdd={this.add}/>
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
