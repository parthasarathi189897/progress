import React,{Component} from 'react';

class Bar extends Component{
	constructor(props){
		super(props);
		this.state = {
			progressData: 0
		};
	}
	componentWillMount(){
		this._setInitials(this.props);
	}
	componentWillReceiveProps(nextProps){
		this._setInitials(nextProps);
	}
	_setInitials(props){
		this.setState({
			progressData: props.progressData
		});
	}
	_getBarDtls(){
		const props = this.props;
		const limit = props.limit;
		const data = this.state.progressData;
		let progress = (data/limit)*100;
		return {
			contWidth: limit,
			progress: progress
		};
	}
	render(){
		const barDtls = this._getBarDtls();
		const contStyle = {
			width: barDtls.contWidth+'px'
		};
		const progress = {
			width: barDtls.progress+'%'
		};
		return (<div className='progress-bar-cont' style={contStyle}>
			<div className='progress-bar' style={progress}>{barDtls.progress+'%'}</div>
		</div>);
	}
};

export default Bar;