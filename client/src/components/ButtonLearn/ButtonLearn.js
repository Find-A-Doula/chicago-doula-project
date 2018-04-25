import React from 'react';

const ButtonLearn = props => (
	<div>
		<form id="Learn-form">
			<div id="Learn-button-wrapper" className="button">
				<input type="submit" value="Learn More" id="Learn-button" onClick={props.handleButtonLearn} />
			</div>
		</form>
	</div>
);

export default ButtonLearn;
