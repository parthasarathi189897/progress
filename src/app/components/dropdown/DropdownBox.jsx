import React from 'react';

/*Component for each tab headers*/
const DropdownBox=(props) => {

  const selectedData=props.selectedData;
  const boxClick=props.boxClick;

  const _onClick=() => {
    boxClick();
  };

  return(
    <div className='dropdown-box' onClick={_onClick}>
      <label>{selectedData.value}</label>
      <div className='down-arrow'></div>
    </div>
  );
};
DropdownBox.propTypes={
  selectedData: React.PropTypes.object
};
DropdownBox.defaultProps={
  selectedData: {
    id: "select",
    value: "Select ..."
  }
};

export default DropdownBox;