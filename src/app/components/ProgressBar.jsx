import React,{Component} from 'react';
import Bar from './Bar';
import Dropdown from './dropdown/Dropdown';
import Button from './Button';

//Component for progress Bar 
class ProgressBar extends Component{
	/**
	 * [constructor : constructor of the component to initialize state and tp pass props to parent]
	 * @param  {[object]} props [properties that this component inherits from the parent component]
	 */
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
	/**
	 * [componentWillMount : React life cycle method, gets executed before component gets mounted]
	 * @return {[undefined]} [no return]
	 */
	componentWillMount(){
		this._setInitials(this.props);
	}
	/**
	 * [componentWillReceiveProps : React life cycle method, gets executed when component gets modified properties]
	 * @return {[undefined]} [no return]
	 */
	componentWillReceiveProps(nextProps){
		this._setInitials(nextProps);
	}
	/**
	 * [_setInitials : Method to initialize the component properties based on the passed props]
	 * @return {[undefined]} [no return]
	 */
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
	/**
	 * [Method to get the individual progress bars.]
	 * @return {[Array]} [return an array containing the list of Bars corresponding to each data point.]
	 */
	_getBars = () => {
		const data = this.props.data;
		const limit = data.limit !== undefined ? data.limit : 0;
		const barData = this.state.barData;
		const barList = barData.map((item,index) =>
		    <Bar progressData={item} limit={limit} key={'progress-bar-'+index} barNum={index}/>
		);
		return barList;
	}
	/**
	 * [Method to get the list of button components]
	 * @return {[Array]} [returns an array containg the list of buttons corresponding to each data]
	 */
	_getButtons = () => {
		const _this = this;
		const data = this.props.data;
		const butData = data.buttons !== undefined ? data.buttons : [];
		const buttonList = butData.map((item,index) =>
		    <Button butVal={item} buttonClick={_this.buttonClick} key={'progress-button-'+index}/>
		);
		console.log(buttonList);
		return buttonList;
	}
	/**
	 * [method gets executed on click of buttons]
	 * @param  {[Number]} butVal [value of the button clicked.]
	 * @return {[undefined]}        [no return from the method]
	 */
	buttonClick = (butVal) => {
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
	/**
	 * [click method for the dropdown rows.]
	 * @param  {[Object]} clickedData [value of the dropdown row clicked]
	 * @return {[undefined]}        [no return from the method]
	 */
	dropdownClick = (clickedData) =>{
		const selectedBar = (clickedData.id).split('#')[1];
		this.setState({
			dropdownSelected: clickedData,
			selectedBar: selectedBar
		});
	}
	/**
	 * [render : life cycle method gets executed to render the jsx tags of the component]
	 * @return {[Object]} [description]
	 */
	render(){
		const state = this.state;
		return (<div className='progress-bar-page'>
			{this._getBars()}
		<article className='action-section'>
			<div className='action-dropdown'>
				<Dropdown
				activeInd={false}
				selectedData={state.dropdownSelected}
				data={state.dropdownData}
				maskInd={false}
				rowClick={this.dropdownClick}/>
			</div>
			<div className='action-button'>
				{this._getButtons()}
			</div>
		</article>
		</div>);
	}
};
export default ProgressBar;