import React from 'react';
import Radium from 'radium'

class PageItem extends React.Component {
	render(){
		var styles = {
    	base: {
      	margin:"2px",
        backgroundColor: "#b3d9ff", 
        padding:"5px", 
        fontWeight:"bold", 
        cursor:"pointer",
        fontSize: "10px"
      },
      selected: {
      	backgroundColor:"#66b3ff",
      	color: "white"
      }
    }

    const {current, pageNumber, onClick} = this.props
  	return <span style={[styles.base, current && styles.selected]} key="pageNumber" onClick={onClick}>{pageNumber}</span>;
  }
}

PageItem.propTypes = {
	pageNumber: React.PropTypes.number, 
    onClick: React.PropTypes.func,
    current: React.PropTypes.bool
}

export default Radium(PageItem);
