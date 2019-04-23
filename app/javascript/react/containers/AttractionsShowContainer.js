import React, { Component } from "react";
import AttractionTile from "../components/attractionTile";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ReviewsContainer";

class AttractionsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: {}
    };
  }

  componentDidMount() {
    let attractionId = this.props.params.id;
    fetch(`/api/v1/attractions/${attractionId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ attraction: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    return (
      <AttractionTile
        id={this.state.attraction.id}
        name={this.state.attraction.name}
        address={this.state.attraction.address}
        city={this.state.attraction.city}
        state={this.state.attraction.state}
        zip={this.state.attraction.zip}
        description={this.state.attraction.description}
      />
    );
  }
}

export default AttractionsShowContainer;
