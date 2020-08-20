import React from 'react';
import { chunk } from 'lodash';
import { Container, Row, Col } from "shards-react";

const InterestsDisplay = ({ cols, children }) => {

        const colWidth = 6 / cols;
        const rows = chunk(React.Children.toArray(children), cols);
        return (
            <div className="interests-card">
                <Container className="dr-example-container">
                    {rows.map((cols) => (
                        <Row>
                            {cols.map((col) => (
                                <Col sm={6} md={colWidth}>
                                    {col}
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Container>
            </div>

        );
    }

    export default InterestsDisplay;