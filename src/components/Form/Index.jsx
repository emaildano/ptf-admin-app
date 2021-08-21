import React from "react";
import classnames from "classnames";
import {
  Form,
  Row,
  Col,
  Label,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import SearchBeers from "./Beers";
import SearchLocations from "./Locations";
import BeersListTextArea from "./BeersListTextArea";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:3000/update/location', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <Form className="pt-5" onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <SearchLocations />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}>
                  Full Update
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}>
                  Diff Update
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                {" "}
                <Row>
                  <Col>
                    <BeersListTextArea />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
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
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <Button type="submit">Update</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default UpdateForm;
