import React from 'react';

//Component for buttons
/**
 * [Stateless/Functional react component.]
 * @param  {[Object]} props [properties that are being passed from parent.]
 * @return {[Object]}       [jsx]
 */
const Button = (props) => {
	/**
	 * [click method for buttons. On execution it invokes the execution of parent method with the value of button clicked.]
	 * @return {[undefined]} [no return from the method]
	 */
	const buttonClick = () => {
		props.buttonClick(props.butVal);
	};
	return (
		<button className='progress-button' type='submit' onClick={buttonClick}>{props.butVal}</button>
	);
};

export default Button;