import React, { Component } from "react";
import AttractionTile from "../components/attractionTile";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ReviewsContainer";

class AttractionsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: {},
      reviews: [],
      currentUser: null
    };
<<<<<<< HEAD
    this.addNewReview = this.addNewReview.bind(this)
  }

  addNewReview(formPayload) {
    formPayload["attraction_id"] = this.state.attraction.attractions.id
    formPayload["user_id"] = this.state.attraction.current_user.id

    fetch(`/api/v1/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({reviews: this.state.reviews.concat(body.review) });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
=======
>>>>>>> origin/add_showpage_and_tests
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
        this.setState({
          attraction: body.attractions,
          reviews: body.attractions.reviews,
          currentUser: body.current_user
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    return (
      <div>
        <AttractionTile
          id={this.state.attraction.id}
          name={this.state.attraction.name}
          address={this.state.attraction.address}
          city={this.state.attraction.city}
          state={this.state.attraction.state}
          zip={this.state.attraction.zip}
          description={this.state.attraction.description}
        />
        <ReviewsContainer reviews={this.state.reviews} />
      </div>
    );
  }
}

export default AttractionsShowContainer;
