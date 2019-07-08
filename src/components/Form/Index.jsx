import React from "react";
import { Row, Col, Label } from 'reactstrap';

import SearchBeers from './Beers';
import SearchLocations from './Locations';

class Form extends React.Component {

  render() {
    return (
      <form className="pt-5">
        <Row>
          <Col>
            <SearchLocations />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
          <Label>Off</Label>
            <SearchBeers />
          </Col>
          <Col>
            <Label>On</Label>
            <SearchBeers />
          </Col>
        </Row>
      </form>
    );
  }
}

export default Form;
