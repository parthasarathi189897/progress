import React from 'react';

//Component for individual progress bars
/**
 * [Stateless/Functional react component.]
 * @param  {[Object]} props [properties that are being passed from parent.]
 * @return {[Object]}       [jsx]
 */
const Bar = (props) => {
	//constant containinf the list of colors
	const colorList = ["#337ab7","#5cb85c","#f0ad4e","#964B00","#6041fa"];
	/**
	 * [this method gives the bar details including progress percentage and back ground color.]
	 * @return {[type]} [description]
	 */
	const _getBarDtls = () => {
		const limit = props.limit;
		const data = props.progressData;
		let progress = (data/limit)*100;
		let progressLimit = progress;
		let progressColor = colorList[props.barNum];
		if(progress >= 100){
			progressLimit = 100;
			progressColor = "#d9534f";
		}else if(progress <= 0){
			progressLimit = 0;
		}
		return {
			contWidth: limit,
			progress: progressLimit,
			progressVal: parseFloat(progress).toFixed(2),
			color : progressColor
		};
	};
	const barDtls = _getBarDtls();
	//variable for progress style.
	const progress = {
		width: barDtls.progress+'%',
		backgroundColor: barDtls.color
	};
	
	return (<div className="progress-bar-cont"> 
		<label>{"Progessbar#"+(props.barNum+1)}</label>
		<div className="progress"> 
			<div className="progress-bar" role="progressbar" style={progress}> {barDtls.progressVal+'%'} </div> 
		</div> 
	</div>); 
};

export default Bar;