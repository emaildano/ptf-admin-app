import React from "react";
import { Input } from "reactstrap";

class BeersListTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `One\nBeer\nPer\nLine`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Input
        rows="20"
        value={this.state.value}
        onChange={this.handleChange}
        type="textarea"
        name="beerList"
        id="beerList"
      />
    );
  }
}

export default BeersListTextArea;
