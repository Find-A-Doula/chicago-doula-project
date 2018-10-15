import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StandardButton = ({value, onClick}) => (
	<Button type="submit" value={value} onClick={onClick} />
)

const Button = styled.input`
	background: rgb(255, 165, 146) none repeat scroll 0% 0% / auto padding-box border-box;
	border: 2px solid rgb(255, 165, 146);
	border-radius: 10px;
	color: #2c3d50;
	cursor: pointer;
	font: normal normal 600 normal 16px / 20px 'Lilita One', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	height: 46px;
	letter-spacing: 1px;
	margin: 10px 20px;
	padding: 10px 23px;
	text-transform: uppercase;
`
StandardButton.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string,
}

StandardButton.defaultProps = {
	onClick: () => null,
	value: '',
}

export default StandardButton
