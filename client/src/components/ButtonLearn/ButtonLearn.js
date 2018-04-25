import React from 'react';

const ButtonLearn = props => (
	<div>
		<form id="Learn-form">
			<div id="Learn-button-wrapper">
				<input type="submit" value="Learn More" id="Learn-button" className="button" onClick={props.handleButtonLearn} />
			</div>
		</form>
	</div>
);

export default ButtonLearn;
