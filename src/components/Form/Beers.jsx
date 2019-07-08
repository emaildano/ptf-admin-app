import React from "react";
// import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from "axios";
import { Input } from 'reactstrap';

class SearchBeers extends React.Component {
  state = {
    location: ""
  };

  searchBeers = location => {
    let searchTerm = location;

    const url = "https://www.phillytapfinder.com/wp-json/wp/v2/ptf_beers?";
    const options = "";
    const query = `search=`;
    const urlRequest = `${url}${query}${searchTerm}${options}`;
    const newRequest = axios.get(urlRequest);

    if (newRequest) {
      return newRequest.then(response => {
        
        const compare = response.data.filter(i =>
          i.title.rendered.toLowerCase().includes(location.toLowerCase())
        );

        return compare.map(location => ({
          label: location.title.rendered,
          value: location.id
        }));
      });
    }
  };

  render() {
    return (
      <AsyncCreatableSelect
        isMulti
        cacheOptions
        tag={Input}
        placeholder="Search Beers"
        value={this.state.label}
        loadOptions={this.searchBeers}
        onChange={(property, value) => {
          console.log(property);
          this.setState({ location: property });
        }}
      />
    );
  }
}

export default SearchBeers;
