import React from 'react';

const ButtonSignUp = props => (
	<div>
		<form id="SignUp-form">
			<div id="SignUp-button-wrapper" className="button">
				<input type="submit" value="Find a Doula" id="SignUp-button" onClick={props.handleButtonSignUp} />
			</div>
		</form>
	</div>
);

export default ButtonSignUp;
