import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const Reason = ({section}) => (
	<StyledGrid container spacing={16} justify="center" alignItems="center">
		<Grid item xs={12} sm={2}>
			<Image src={`assets/img/learn/${section.logo}.png`} alt={section.reason} />
		</Grid>
		<Grid item xs={12} sm={8}>
			<Grid container spacing={0} justify="center" alignItems="flex-start" direction="column">
				<Grid item xs={12}>
					<Headline>{section.reason}</Headline>
				</Grid>
				<Grid item xs={12}>
					<Explanation>{section.explanation}</Explanation>
				</Grid>
			</Grid>
		</Grid>
	</StyledGrid>
)

const Explanation = styled.p`
	font-size: 25px;
`
const Headline = styled.h3`
	color: #2c3d50;
	font-family: var(--sub-font);
	font-size: 35px;
	font-weight: bold;
	margin-bottom: 0px;
	@media only screen and (max-width: 574px) {
		text-align: center;
	}
`
const Image = styled.img`
	@media only screen and (min-width: 575px) {
		float: right;		
		text-align: right;
	}
`
const StyledGrid = styled(Grid)`
	padding-bottom: 50px;
	text-align: left;
	@media only screen and (max-width: 574px) {
		text-align: center;
	}
`

Reason.propTypes = {
	section: PropTypes.object.isRequired,
}

export default Reason
