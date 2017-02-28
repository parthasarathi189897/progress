import React,{Component} from 'react';
import Bar from './Bar';
import Dropdown from './dropdown/Dropdown';
import Button from './Button';

class ProgressBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			barData: [],
			dropdownSelected: {
				id: "Dropdown#1",
				value: "Dropdown#1"
			},
			dropdownData: [],
			selectedBar: 1
		}
	}
	componentWillMount(){
		this._setInitials(this.props);
	}
	componentWillReceiveProps(nextProps){
		this._setInitials(nextProps);
	}
	_setInitials(props){
		const data = props.data;
		const barData = data.bars !== undefined ? data.bars : [];
		const dropdownData = barData.map((item,index) => {
			return {
				id: 'Dropdown#'+(index+1),
				value: 'Dropdown#'+(index+1)
			};
		});
		this.setState({
			barData: barData,
			dropdownData: dropdownData
		});
	}
	_getBars = () => {
		const data = this.props.data;
		const limit = data.limit !== undefined ? data.limit : 0;
		const barData = this.state.barData;
		return barData.map((item,index) => {
			return (<Bar progressData={item} limit={limit} key={'progress-bar-'+item+'-'+index}/>);
		});
	}
	_getButtons = () => {
		const _this = this;
		const data = this.props.data;
		const butData = data.buttons !== undefined ? data.buttons : [];
		return butData.map((item,index) => {
			return (<Button butVal={item} butClick={_this.butClick} key={'progress-button-'+item+'-'+index}/>);
		});
	}
	butClick = (butVal) => {
		const state = this.state;
		const barData = state.barData;
		const selectedBar = state.selectedBar;
		const modifiedBars = barData.map((item,index) => {
			if(index === selectedBar-1){
				item += butVal;
			}
			return item;
		});
		this.setState({
			barData: modifiedBars
		});

	}
	dropdownClick = (clickedData) =>{
		const selectedBar = (clickedData.id).split('#')[1];
		this.setState({
			dropdownSelected: clickedData,
			selectedBar: selectedBar
		});
	}
	render(){
		const state = this.state;
		return (<div className='progress-bar-page'>
			{this._getBars()}
		<article>
			<div>
				<Dropdown
				activeInd={false}
				selectedData={state.dropdownSelected}
				data={state.dropdownData}
				maskInd={false}
				rowClick={this.dropdownClick}/>
			</div>
			<div>
				{this._getButtons()}
			</div>
		</article>
		</div>);
	}

};

export default ProgressBar;