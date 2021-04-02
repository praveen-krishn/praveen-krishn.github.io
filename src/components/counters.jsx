import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

	render() {
		return (
			
			<div>
				<button className="btn btn-sm btn-info m-2" onClick={this.props.onReset}>
				Reset
				</button>

				{this.props.counters.map((counter) => (
					<Counter 
						key={counter.id} 
						counter={counter}
						onIncrement={this.props.onIncrement} 
						onDecrement={this.props.onDecrement}
						onDelete={this.props.onDelete}>
                    
					   <span className="badge badge-warning">{counter.title}</span>
					
                    </Counter>
				))}
			</div>  
		);
	}
}

export default Counters;
