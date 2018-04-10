import React from 'react';
import './WhyDoula.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

const WhyDoula = props => (
	<Row center="xs" className="doula-reasons">
		<Col xs={12} sm={4} left="xs">
			<img src={props.logo} />
                </Col>
                <Col xs={12} sm={8} right="xs">
                  <h3>props.reason</h3>
                  <p>props.explanation</p>
                </Col>
       </Row>


);

export default WhyDoula;
