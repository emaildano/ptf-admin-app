import React from "react";
import { Row, Col, Label } from 'reactstrap';

import SearchBeers from './Beers';
import SearchLocations from './Locations';

class Form extends React.Component {

  render() {
    return (
      <form>
        <Row>
          <Col>
            <SearchLocations />
          </Col>
        </Row>
        <Row>
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
