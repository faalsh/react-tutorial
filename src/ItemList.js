import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			selectedItem: -1
		}
    }
    handleClick(item) {
    	if(this.state.selectedItem == item.id) {
    		this.setState({selectedItem: -1})
    	} else {
	    	this.setState({selectedItem:item.id})
			this.props.onClick(item)	
    	}
		
	}

	render(){

		const items = this.props.items.map(function(item){
		  	const selected = item.id === this.state.selectedItem
		    return <Item key={item.id} onClick={this.handleClick.bind(this,item)} selected={selected} item={item} />;
		},this);
		
		return(
		    <div style={{marginBottom: "20px", marginTop: "20px"}}>
		        {items}
		    </div>
	  )
	}
}

ItemList.propTypes = {
	onClick: React.PropTypes.func,
  items: React.PropTypes.array
}

export default ItemList;
