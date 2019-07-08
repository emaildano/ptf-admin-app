import React from "react";
import { Form, Row, Col, Label, Button } from 'reactstrap';

import SearchBeers from './Beers';
import SearchLocations from './Locations';

class UpdateForm extends React.Component {

  render() {
    return (
      <Form className="pt-5">
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
        <Row className="pt-5">
          <Col>
            <Button>Update</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default UpdateForm;
