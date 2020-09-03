import React from 'react';
import TaskItem from './TaskItem.js';
import Tasks from './Tasks.json';

class TaskList extends React.Component {
	render(){
        	const CompList = Tasks.tasks.map(item => <TaskItem key={item.id} item={item} />);
		return(
			<div className="task-list-div">
				{CompList}
			</div>
		);
	}
}

export default TaskList;
