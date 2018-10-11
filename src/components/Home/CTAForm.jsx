// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Local
import StandardButton from '../Global/StandardButton'

const CTAForm = ({ userEmail, handleFormSubmit, handleInputChange }) => (
	<Form>
		<EmailWrapper>
			<Email
				type="email"
				name="userEmail"
				placeholder="you@yourdomain.com"
				value={userEmail}
				onChange={handleInputChange}
			/>
		</EmailWrapper>
		<div>
			<StandardButton value="Sign Up" onClick={handleFormSubmit}/>
		</div>
	</Form>

)

const Form = styled.form`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	margin: 0;
	padding: 0;
`

const EmailWrapper = styled.div`
	width: 310px;
	justify-content: center;
	@media screen and (max-width: 640px) {
		max-width: 250px;
		padding-left: 20px;
	}
`

const Email = styled.input`
	background: #D6D6DE none repeat scroll 0% 0% / auto padding-box border-box;
	border-color: rgba(0, 0, 0, 0);
	font: normal normal 600 normal 16px / 20px proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
	letter-spacing: 1px;
	outline: rgb(25, 10, 53) none 0px;
	padding: 11px 23px;
	width: 350px;
	@media screen and (max-width: 640px) {
		max-width: 250px;
	}
`

CTAForm.propTypes = {
	handleFormSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	userEmail: PropTypes.string,
}

CTAForm.defaultProps = {
	userEmail: '',
}

export default CTAForm
