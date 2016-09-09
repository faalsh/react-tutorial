import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Details extends React.Component {
    render(){
      const transitionOptions = {
        transitionName: "expand",
        transitionEnterTimeout: 500, 
        transitionLeaveTimeout: 500,
        transitionAppear: true,
        transitionAppearTimeout: 500,
      }

    	const renderItem = function(item){
      	return (
          <ReactCSSTransitionGroup 
        transitionName="example" 
        transitionAppear={false}
        transitionEnterTimeout={500} 
          transitionLeaveTimeout={300} 
        transitionAppearTimeout={500}>
          	<div style={{paddingLeft: "20px"}}>
          		<div><span>ID: </span><span>{item.id}</span></div>			
      	       <div><span>Title: </span><span>{item.title}</span></div>
      	    </div>
          </ReactCSSTransitionGroup>
        )
      };
      
    	const item = this.props.item
    	
      return (
        
        	<div>
          	 {Object.keys(item).length !== 0 ? renderItem(item):null}
          </div>
        
      )
  }
}

Details.propTypes = {
	item: React.PropTypes.object
}

export default Details;
