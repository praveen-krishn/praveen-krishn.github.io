import React, { Component } from 'react';
class Counter extends Component {
 
	render() {
		return (
			<div>
                <span className="badge badge-error">{this.props.counter.id}</span>
                <button className="btn btn-sm btn-primary m-2" onClick={() => this.props.onIncrement(this.props.counter)}>
					+
				</button>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-sm btn-secondary m-2" onClick={() => this.props.onDecrement(this.props.counter)}>
					-
				</button>
				{this.props.children}
				<button className="btn btn-sm btn-danger m-2" onClick={() =>this.props.onDelete(this.props.counter.id)} >
					delete
				</button>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'badge m-2 badge-light text-';
		classes += this.props.counter.value <= 0 ? 'danger' : 'info';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		// return count;
		return count === 0 ? 'zero' : count;
	}
}

export default Counter;
