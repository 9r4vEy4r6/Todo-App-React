import React from 'react';
import TaskItem from './TaskItem.js';
import Tasks from './Tasks.json';

class TaskList extends React.Component {
        const CompList = Tasks.tasks.map<
	render(){
		return(
			<div className="task-list-div">
				<TaskItem />
			</div>
		);
	}
}

export default TaskList;
