import React from 'react';
import './CTAForm.css';

const CTAForm = props => (
    <div>
        <form id="CTA-form">
            <div id="CTA-email-wrapper">
                <input
                    id="CTA-email"
                    type="email"
                    name="userEmail"
                    placeholder="you@yourdomain.com"
                    value={props.userEmail}
                    onChange={props.handleInputChange}
                />
            </div>
            <div id="CTA-button-wrapper">
                <input type="submit" value="Sign Up" id="CTA-button" onClick={props.handleFormSubmit} />
            </div>
        </form>
    </div>
);

export default CTAForm;
