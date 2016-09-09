import React from 'react';
import Radium from 'radium'
import Details from './Details';


class Item extends React.Component {
     render(){
     	var styles = {
     		base: {
     			fontSize:"20px", 
     			color:"#66b3ff", 
     			border: "1px solid", 
     			margin:5, 
     			paddingLeft:10, 
     			cursor:"pointer"
     		},
     		selected : {
     			backgroundColor:"#66b3ff", 
     			color:"white", 
     		}
     	}

     	return (
     		<div>
	     		<div style={[styles.base, this.props.selected && styles.selected]} onClick={this.props.onClick}>{this.props.item.title}</div>
	     		{
	     			this.props.selected? <Details item={this.props.item} />:null
	     		}
	     	</div>
     	) 
  }
}

Item.propTypes = {
  	selected: React.PropTypes.bool,
    item: React.PropTypes.object,
    onClick: React.PropTypes.func
}

export default Radium(Item);
