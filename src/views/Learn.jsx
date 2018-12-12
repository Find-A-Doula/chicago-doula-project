// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

// Local
import Reason from '../components/Learn/Reason'
import StandardButton from '../components/Global/StandardButton'
import NavBar from '../components/Global/NavBar'

const info = {
	sections: [
		{
			explanation: 'In the weeks leading up to the birth, doulas are there to listen to the expecting mother\'s hopes and fears, help her create a birth plan, and empower her to make the best choices for her and her family.',
			key: 'reason01',
			logo: 'reason01',
			reason: 'Parental Support',
		},
		{
			explanation: 'Although doulas are not medical professionals, they do play an important role in the birth process  providing comfort measures such as massage, guided breathing, and recommending various positions for pain relief. The doula is there for physical and emotional support  during every type of birth.',
			key: 'reason02',
			logo: 'reason02',
			reason: 'Postpartum Support',
		},
		{
			explanation: 'After the baby arrives, doulas help families adapt to the stresses and joys of having a newborn. Doulas provide breastfeeding support, infant care advice and an extra hand around the house allowing the family to spend more time with their newborn.',
			key: 'reason03',
			logo: 'reason03',
			reason: 'Emotional Support',
		},
		{
			explanation: 'The doula\'s role goes beyond birth. There are doulas that support families through the adoption process, miscarriages, abortions, and other life experiences.',
			key: 'reason04',
			logo: 'reason04',
			reason: 'Much More',
		},
	],
}

const Learn = ({ classes }) => (
	<div>
		<NavBar currentPage="/learn"/>
		<div className={classes.root}>
			<Grid container spacing={16} justify="center" alignItems="center">
				<Wrapper>
					<Grid item>
						<Headline variant="h2">What is a Doula?</Headline>
					</Grid>
					<Grid item>
						<Subheader>A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.</Subheader>
					</Grid>
					<Grid item>
						{info.sections.map(section => <Reason section={section} key={section.key} />)}
					</Grid>
					<Grid item>
						<EndText>Some doulas focus in one area while others have experience in various roles.</EndText>
					</Grid>
					<Grid item>
						<ComingSoon>
							<Link to="/comingsoon">
								<StandardButton value="Find a Doula" />
							</Link>
						</ComingSoon>
					</Grid>
				</Wrapper>
			</Grid>
		</div>
	</div>
)

const styles = () => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
	},
})

const ComingSoon = styled.div`
	padding-bottom: 40px;
`

const EndText = styled.p`
	font-size: 25px;
`
const Headline = styled.h1`
	color: #2c3d50;
	font-family: var(--sub-font);
	font-size: 55px;
	margin-bottom: 0px;
`

const Subheader = styled.p`
	font-size: 30px;
	@media only screen and (max-width: 574px) {
		font-size: 20px;
		margin: 0px 10% 20px 10%;
	}
`
const Wrapper = styled.div`
	margin: 0px 20% 20px 20%;
	overflow: 'auto';
`

Learn.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Learn)
