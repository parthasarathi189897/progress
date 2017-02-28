import React from 'react';

//Component for dropdown
/**
 * [Stateless/Functional react component.]
 * @param  {[Object]} props [properties that are being passed from parent.]
 * @return {[Object]}       [jsx]
 */
const DropdownWindow = (props) => {
	/**
	 * [Method to return the list of dropdown rows.]
	 * @return {[Array]}       [An array containing the list of dropdown rows.]
	 */
	const _getDropdownList = () => {
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