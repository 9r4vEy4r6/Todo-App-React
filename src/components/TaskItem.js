import React from 'react';

class TaskItem extends React.Component{

	render(){
		return(
			<div className="task-list-item">
				<input type = "checkbox" checked = {props.item.done} />
			 	<span className="task-content">{props.item.task}</span>
				<br /><hr />
			</div>
		);
	}
}

export default TaskItem;
