import React from 'react';
import TaskItem from './TaskItem.js';
import Tasks from './Tasks.json';

class TaskList extends React.Component {

	constructor(){
		super();
		this.state = {
			tasksList : Tasks.tasks
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id){
		console.log(id);
		this.setState(prevState => {
			const NewList = prevState.tasksList.map(item => {
				if (item.id===id){
					item.done = !item.done;
				}
				return item;
			});
			return {
				tasksList : NewList
			}
		});
	}
	
	render(){
        	const CompList = this.state.tasksList.map(item => <TaskItem key={item.id} item={item} changeHandler={this.handleChange}/>);
		return(
			<div className="task-list-div">
				{CompList}
			</div>
		);
	}
}

export default TaskList;
