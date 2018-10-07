import React, {Component} from 'react';
import { connect } from 'react-redux';
class Counter extends React.Component {
	render(){
		console.log(this.props)
		return (
    <div>
      <h1>I am an Increment Counter</h1>
      <p>Count1:{this.props.count1}</p>
      <button onClick={this.props.onClickOfIncrement}>increment</button>
    </div>
  );
	}
  
};
function mapStateToProps(state){
	console.log("mapStateToProps",state.count1)
	return{
		count1:state.count1
	};
}
function mapDispatchToProps(dispatch){
	//console.log("mapDispatchToProps",dispatch)
	return{
			onClickOfIncrement:()=>{
			console.log("clicked");
			const action={type:'INCREMENT'};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)