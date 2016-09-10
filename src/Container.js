import React from 'react';
import Pagination from './Pagination';
import ItemList from './ItemList';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
		  	items: [{"id":1,"title":"item 1"},{"id":2,"title":"item 2"},{"id":3,"title":"item 3"},{"id":4,"title":"item 4"},{"id":5,"title":"item 5"},{"id":6,"title":"item 6"},{"id":7,"title":"item 7"},{"id":8,"title":"item 8"},{"id":9,"title":"item 9"},{"id":10,"title":"item 10"},{"id":11,"title":"item 11"},{"id":12,"title":"item 12"},{"id":13,"title":"item 13"},{"id":14,"title":"item 14"},{"id":15,"title":"item 15"},{"id":16,"title":"item 16"},{"id":17,"title":"item 17"},{"id":18,"title":"item 18"},{"id":19,"title":"item 19"},{"id":20,"title":"item 20"},{"id":21,"title":"item 21"},{"id":22,"title":"item 22"},{"id":23,"title":"item 23"},{"id":24,"title":"item 24"},{"id":25,"title":"item 25"},{"id":26,"title":"item 26"},{"id":27,"title":"item 27"},{"id":28,"title":"item 28"},{"id":29,"title":"item 29"},{"id":30,"title":"item 30"},{"id":31,"title":"item 31"},{"id":32,"title":"item 32"},{"id":33,"title":"item 33"},{"id":34,"title":"item 34"},{"id":35,"title":"item 35"},{"id":36,"title":"item 36"},{"id":37,"title":"item 37"},{"id":38,"title":"item 38"},{"id":39,"title":"item 39"},{"id":40,"title":"item 40"},{"id":41,"title":"item 41"},{"id":42,"title":"item 42"},{"id":43,"title":"item 43"},{"id":44,"title":"item 44"},{"id":45,"title":"item 45"},{"id":46,"title":"item 46"},{"id":47,"title":"item 47"},{"id":48,"title":"item 48"},{"id":49,"title":"item 49"},{"id":50,"title":"item 50"}],
		    maxPerPage: 10,
		    currentPage: 1,
		 }
    }
    handlePageSelected(size, newPage) {
	  this.setState({currentPage:newPage})
	}
	handleItemSelected(item){
	  this.setState({details:item})
	}
	render(){

		const {items, maxPerPage, currentPage} = this.state
	  
		const numberOfPages = Math.ceil(items.length / maxPerPage)
		const subItems = items.slice((currentPage-1)*maxPerPage,(currentPage*maxPerPage))

	  return (
	    <div style={{marginTop:"50px", width:"50%"}}>
	      <Pagination size={numberOfPages} current={currentPage} onChange={this.handlePageSelected.bind(this)}/>
	      <ItemList onClick={this.handleItemSelected.bind(this)} items={subItems} />
	      <Pagination size={numberOfPages} current={currentPage} onChange={this.handlePageSelected.bind(this)}/>
	    </div>

	  )
	}
}

export default Container;
