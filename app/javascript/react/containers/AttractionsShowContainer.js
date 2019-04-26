import React, { Component } from "react";
import AttractionTile from "../components/attractionTile";
import ReviewForm from "./ReviewForm";
import ReviewsContainer from "./ReviewsContainer";
import { Route, IndexRoute, Router, browserHistory } from "react-router";


class AttractionsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: {},
      reviews: [],
      currentUser: null
    };
    this.addNewReview = this.addNewReview.bind(this)
    this.handleDeleteAttraction = this.handleDeleteAttraction.bind(this)
    this.handleDeleteReview = this.handleDeleteReview.bind(this)

  }

  handleDeleteReview(review_id) {
    fetch(`/api/v1/reviews/${review_id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      body: JSON.stringify(review_id),
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
        this.setState({ reviews: body.reviews })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDeleteAttraction(event) {
    event.preventDefault()
    let attractionId = this.props.params.id;
    fetch(`/api/v1/attractions/${attractionId}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      body: JSON.stringify(attractionId),
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
        return window.location.href = "/attractions"
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload) {
    formPayload["attraction_id"] = this.state.attraction.id
    formPayload["user_id"] = this.state.currentUser.id

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
          currentUser={this.state.currentUser}
          handleDeleteAttraction={this.handleDeleteAttraction}
        />
        <ReviewsContainer
          reviews={this.state.reviews}
          currentUser={this.state.currentUser}
          handleDeleteReview={this.handleDeleteReview}
        />
        <ReviewForm
          addNewReview={this.addNewReview}
        />
      </div>
    );
  }
}

export default AttractionsShowContainer;
