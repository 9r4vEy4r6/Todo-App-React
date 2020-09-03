import React from 'react';
import TaskItem from './TaskItem.js';

class TaskList extends React.Component {

	render(){
		return(
			<div className="task-list-div">
				<TaskItem />
			</div>
		);
	}
}

export default TaskList;
