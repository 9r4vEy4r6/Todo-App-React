import React from 'react';

class TaskItem extends React.Component{

	render(){
		return(
			<div className="task-list-item">
				<input type = "checkbox" checked = {this.props.item.done} onChange={()=> this.props.changeHandler(this.props.item.id)} />
			 	<span className="task-content">{this.props.item.task}</span>
				<br /><hr />
			</div>
		);
	}
}

export default TaskItem;
