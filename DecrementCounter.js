import React, {Component} from 'react';
import { connect } from 'react-redux';
class CounterDecrement extends React.Component {
	render(){
		console.log("inside decrement",this.props)
		return (
    <div>
      <h1>I am Decrement Counter</h1>
      <p>Count2:{this.props.count2}</p>
      <button onClick={this.props.onClickOfDecrement}>decrement</button>
    </div>
  );
	}
  
};
function mapStateToProps(state){
	console.log("Decrement counter:mapStateToProps",state)
	return{
		count2:state.count2
	};
}
function mapDispatchToProps(dispatch){
	//console.log("mapDispatchToProps",dispatch)
	return{
		onClickOfDecrement:()=>{
			console.log("clicked");
			const action={type:'DECREMENT'};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps,null)(CounterDecrement)