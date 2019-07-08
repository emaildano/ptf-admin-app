import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

class SearchLocations extends React.Component {
  
  state = {
    location: ""
  };

  searchLocations = location => {
    let searchTerm = location;

    const url = "https://www.phillytapfinder.com/wp-json/wp/v2/ptf_bars?";
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
      <AsyncSelect
        cacheOptions
        placeholder="Search Locations"
        value={this.state.label}
        loadOptions={this.searchLocations}
        onChange={(property, value) => {
          console.log(property);
          this.setState({ location: property });
        }}
      />
    );
  }
}

export default SearchLocations;
