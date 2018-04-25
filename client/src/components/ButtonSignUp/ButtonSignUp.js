import React from 'react';

const ButtonSignUp = props => (
	<div>
		<form id="SignUp-form">
			<div id="SignUp-button-wrapper" >
				<input type="submit" value="Find a Doula" id="SignUp-button" className="button" onClick={props.handleButtonSignUp} />
			</div>
		</form>
	</div>
);

export default ButtonSignUp;
