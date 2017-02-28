import React,{Component} from 'react';
import ProgressBar from './components/ProgressBar';

export default class PageBody extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: {}
		};
	}
	componentWillMount(){
		//Ajax call to fetch data on page refresh
		const _this = this;
		const url = 'http://pb-api.herokuapp.com/bars';
		let httpRequest = new XMLHttpRequest(); //Created new httpRequest obhject
		if (!httpRequest) {
	      alert('Giving up :( Cannot create an XMLHTTP instance');
	      return false;
	    }
	    httpRequest.onreadystatechange = onFetch;
	    httpRequest.open('GET', url);
	    httpRequest.send();

	    //Method to get executed on fetch of data
	    function onFetch(){
	    	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		      if (httpRequest.status === 200) {
		      	const result = JSON.parse(httpRequest.responseText);
		        _this.setState({
		        	data: result
		        });
		      } else {
		        alert('There was a problem with the request.');
		      }
		    }
	    }
	}
	render(){
		return (<div>
			<ProgressBar data={this.state.data}/>
		</div>);
	}
};