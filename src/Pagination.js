import React from 'react';
import PageItem from './PageItem';
import Radium from 'radium'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
	    	size: this.props.size,
	      current: this.props.current
	    }
    }

     handleClick(newNumber){
	    this.setState({current:newNumber})
	    this.props.onChange(this.state.size, newNumber)
	  }
 	 previous(){
	  	var newNumber = this.state.current-1;
	    if(newNumber > 0) {
	    	this.setState({current: newNumber})
	      this.props.onChange(this.state.size, newNumber)
    }
  	
  }
   next(){
  	var newNumber = this.state.current+1;
    if(newNumber <= this.state.size) {
    	this.setState({current: newNumber})
      this.props.onChange(this.state.size, newNumber)
    }
  	
  }

	renderList(){
		var all = [];
		for(var i=1; i<=this.state.size; i++){
			var current = i === this.state.current;
			all.push(<PageItem key={i} pageNumber={i} onClick={this.handleClick.bind(this,i)} current={current} />)
		}
		return all;
	}
	componentWillReceiveProps(nextProps) {
	  	this.setState({current:nextProps.current})
	}

	render() {
	  var styles = {
	  	base: {
	  		padding:10, 
		  	fontWeight:"bold", 
		  	cursor:"pointer",
		  	fontSize: "10px"
	  	},
	  	hidden: {
	  		visibility: "hidden"
	  	},
	  	parent: {
	  		WebkitUserSelect: "none",
	  		MozUserSelect: "none",
	  		MsUserSelect: "none"
	  	}
	  }

	  const {current, size} = this.state

	  const prev = <span onClick={this.previous.bind(this)} style={[styles.base, current == 1 && styles.hidden]}>&lt;</span>
	  const next = <span onClick={this.next.bind(this)} style={[styles.base, current == size && styles.hidden]}>&gt;</span>

	    return (
	    	<div style={styles.parent}>
	      		{prev}
				{this.renderList()}
				{next}
	      </div>
	    )
	}

}

Pagination.propTypes = {
  	size: React.PropTypes.number,
    current: React.PropTypes.number,
    onChange: React.PropTypes.func
 }

export default Radium(Pagination);
