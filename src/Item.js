import React from 'react';
import Radium from 'radium'
import Details from './Details';


class Item extends React.Component {
     render(){
     	

     	const styles = {
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


        const {selected, onClick, item} = this.props

     	return (
     		<div>
	     		<div style={[styles.base, selected && styles.selected]} onClick={onClick}>{item.title}</div>
	     		<Details item={this.props.item} open={selected}/>
	     		
	     		
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
