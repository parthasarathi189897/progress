import React,{Component} from 'react';
import Bar from './Bar';

const ProgressBar = (props) =>{
	const _getBars = function(){
		const data = props.data;
		const barData = data.bars !== undefined ? data.bars : [];
		const limit = data.limit !== undefined ? data.limit : 0;
		return barData.map(item => {
			return (<Bar progressData={item} limit={limit} key={'progress-bar-'+item}/>);
		});
	};
	return (<div className='progress-bar-page'>
		{_getBars()}
	</div>);
};

export default ProgressBar;