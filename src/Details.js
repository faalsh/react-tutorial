import React from 'react';

class Details extends React.Component {
    render(){
	var renderItem = function(item){
  	return (
    	<div style={{paddingLeft: "20px"}}>
    		<div><span>ID: </span><span>{item.id}</span></div>			
	       <div><span>Title: </span><span>{item.title}</span></div>
	    </div>
    )
  };
  
	var item = this.props.item
  var renderedItem;
  renderedItem = (Object.keys(item).length !== 0 ?  renderItem(item):null)
	
  return (
  	<div>
  	{renderedItem}
    </div>
  )
}
}

Details.propTypes = {
	item: React.PropTypes.object
}

export default Details;
