import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Details extends React.Component {

    render(){

      const {item, open} = this.props

      const transitionOptions = {
        transitionName: "details",
        transitionEnterTimeout: 200,
        transitionLeaveTimeout: 200,
      }

    	const renderItem = function(item){

        return open ?  
            <div key={item.id} style={{paddingLeft: "20px"}}>
              <div><span>ID: </span><span>{item.id}</span></div>      
              <div><span>Title: </span><span>{item.title}</span></div>
            </div>
          :null	
      };

      return (
        
        	<ReactCSSTransitionGroup {...transitionOptions}>
          	 {renderItem(item)}
          </ReactCSSTransitionGroup>
        
      )
  }
}

Details.propTypes = {
	item: React.PropTypes.object,
  open: React.PropTypes.bool
}

export default Details;
