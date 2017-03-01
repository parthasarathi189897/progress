import React from 'react';

//Component for dropdown header box
/**
 * [Stateless/Functional react component.]
 * @param  {[Object]} props [properties that are being passed from parent.]
 * @return {[Object]}       [jsx]
 */
const DropdownBox=(props) => {

  const selectedData=props.selectedData;
  const boxClick=props.boxClick;

  const _onClick=() => {
    boxClick();
  };

  return(
    <div className='dropdown-box' onClick={_onClick}>
      <label>{selectedData.value}</label>
      <div className='dropdown-caret'></div>
    </div>
  );
};
//prop types for this component
DropdownBox.propTypes = {
  selectedData: React.PropTypes.object
};
//Default properties for the component
DropdownBox.defaultProps = {
  selectedData: {
    id: "select",
    value: "Select ..."
  }
};

export default DropdownBox;