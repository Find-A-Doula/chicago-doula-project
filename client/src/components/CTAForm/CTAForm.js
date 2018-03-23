import React from 'react';
import './CTAForm.css';

const CTAForm = props => (
	<div>
		<form id="CTA-form">
			<div id="CTA-email-wrapper">
				<input id="CTA-email" type="email" name="email" placeholder="you@yourdomain.com" />
			</div>
			<div id="CTA-button-wrapper">
				<input type="submit" value="Sign Up" id="CTA-button" />
			</div>
		</form>
	</div>
);

export default CTAForm;
