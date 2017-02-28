import React,{Component} from 'react';

const Bar = (props) => {
	const _getBarDtls = () => {
		const limit = props.limit;
		const data = props.progressData;
		let progress = (data/limit)*100;
		let progressLimit = progress;
		if(progress >= 100){
			progressLimit = 100;
		}else if(progress <= 0){
			progressLimit = 0;
		}
		return {
			contWidth: limit,
			progress: progressLimit,
			progressVal: parseFloat(progress).toFixed(2)
		};
	};
	const barDtls = _getBarDtls();
	const contStyle = {
		width: barDtls.contWidth+'px'
	};
	const progress = {
		width: barDtls.progress+'%'
	};
	return (<div className='progress-bar-cont' style={contStyle}>
		<div className='progress-bar' style={progress}>{barDtls.progressVal+'%'}</div>
	</div>); 
};

export default Bar;