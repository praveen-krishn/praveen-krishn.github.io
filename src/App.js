// import logo from './logo.svg';
import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';


class App extends Component {
	state = {
		counters: [ { id: 1, value: 2, title:"a" }, 
        { id: 2, value: 4, title:"b1212" }, 
        { id: 3, value: 6, title:"c234234234" }, 
        { id: 4, value: 8, title:"ddsfsdf23" } ]
	};

	handleIncreament=(counter)=> {
		const x = [...this.state.counters];
		const idx = x.indexOf(counter)
		x[idx] = {...counter};
		x[idx].value++;
		this.setState({counters:x})
	}

	handleDecrement=(counter)=> {
		const x = [...this.state.counters];
		const idx = x.indexOf(counter)
		x[idx] = {...counter};
		x[idx].value--;
		if (x[idx].value<0) {
			x[idx].value=0
		}
		this.setState({counters:x})
	}

	handleDelete=(counterId)=>{
		// console.log("delete row", counterId);
		const x=this.state.counters.filter(c => c.id !== counterId);
		this.setState({counters:x})
	}

	handleReset =() => {
		// console.log("reset");
		const new_counters = this.state.counters.map(c=>{c.value=0; return c})
		this.setState({counters:new_counters})
	}

  render() {
    return (    
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value >0).length} 
          sumCounters={this.state.counters.map(c=>c.value).reduce((total, arg) => total + arg, 0)}
        />
        <main className="container">
          <Counters 						
            counters= {this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncreament} 
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
          />
        </main> 
      </React.Fragment>
    );
  }
}

export default App;
