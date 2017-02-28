import React from 'react';

const Button = (props) => {
	const _butClick = () => {
		props.butClick(props.butVal);
	};
	return (
		<button type='submit' onClick={_butClick}>{props.butVal}</button>
	);
};

export default Button;