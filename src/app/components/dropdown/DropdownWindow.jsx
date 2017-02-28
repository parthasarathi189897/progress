import React from 'react';

const DropdownWindow = (props) => {
	const _getDropdownList = (props) => {
		const data = props.data;
		const selectedData = props.selectedData;
		let rowClass = 'dropdown-row ';
		let list = [];
		data.forEach(item => {
			if(item.id === selectedData.id){
				rowClass += 'dropdown-row-selected';
			}
			const _rowElementClick = () => {
				props.rowClick(item);
			};
			list.push(<li key={'dropdown-row-'+item.id} className={rowClass} onClick={_rowElementClick}>{item.value}</li>);
		});
		return list;
	};
	
	const dropdownRows = _getDropdownList(props);
	return (<div className={ props.activeInd ? "dropdown-window dropdown-visible" : "dropdown-window dropdown-hidden"}>
		<ul>
			{dropdownRows}
		</ul>
		<div className="tooltip-tail-back"></div>
		<div className="tooltip-tail-front"></div>
	</div>);
}

export default DropdownWindow;