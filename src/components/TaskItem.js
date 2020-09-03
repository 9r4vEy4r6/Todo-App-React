import React from 'react';

class TaskItem extends React.Component{

	render(){
		return(
			<div className="task-container">
				<div className={this.props.item.done==1?"task-list-item":"task-list-item-incomplete"}>
					<input 
						type = "checkbox" 
						checked = {this.props.item.done} 
						onChange = {()=> this.props.changeHandler(this.props.item.id)} />
					 <span className="task-content">{this.props.item.task}</span>
				</div>
			<hr />
			</div>
		);
	}
}

export default TaskItem;
