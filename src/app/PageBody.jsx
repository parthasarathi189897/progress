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
		const _this = this;
		const url = 'http://pb-api.herokuapp.com/bars';
		let httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
	      alert('Giving up :( Cannot create an XMLHTTP instance');
	      return false;
	    }
	    httpRequest.onreadystatechange = onFetch;
	    httpRequest.open('GET', url);
	    httpRequest.send();

	    function onFetch(){
	    	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		      if (httpRequest.status === 200) {
		      	console.log(httpRequest.responseText);
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