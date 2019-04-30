import React, { Component } from "react";
import RatingSelector from "../components/RatingSelector";
import BodyField from "../components/BodyField";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      ratingOptions: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let rating = this.state.rating;
    let body = this.state.body;
    if (rating.trim() !== "" && body.trim() !== "") {
      let formPayload = {
        rating: Number(this.state.rating),
        body: this.state.body
      };
      this.props.addNewReview(formPayload);
      this.handleClear(event);
    } else {
      let newError = {
        blank: `You cannot submit a blank form & must resolve all errors!`
      };
      this.setState({ errors: Object.assign({}, this.state.errors, newError) });
    }
  }

  handleValidation(event) {
    let name = event.target.name;
    let value = event.target.value;
    if (value.trim() === "") {
      let newError = { [name]: `Please enter a valid ${name}!` };
      this.setState({ errors: Object.assign({}, this.state.errors, newError) });
    } else {
      let errorState = this.state.errors;
      delete errorState[name];
      this.setState({ errors: errorState });
    }
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      rating: "",
      body: "",
      errors: {}
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let ratingIterator = -1;
    let optionElements = this.state.ratingOptions.map(option => {
      ratingIterator++;
      return (
        <option key={ratingIterator} value={ratingIterator}>
          {option}
        </option>
      );
    });

    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return <li key={error}>{error}</li>;
      });
      errorDiv = (
        <div className="callout-alert">
          <ul>{errorItems}</ul>
        </div>
      );
    }
    return (
      <form className="" onSubmit={this.handleSubmit}>
        {errorDiv}
        <h3>Add New Review Below</h3>
        <RatingSelector
          label="Rating: "
          name="rating"
          value={this.state.rating}
          options={optionElements}
          onChange={this.handleChange}
        />
        <BodyField
          content={this.state.body}
          label="Review Body:"
          name="body"
          onChange={this.handleChange}
          onBlur={this.handleValidation}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClear}>
            Clear
          </button>
          <input
            id="submit-button"
            className="button"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

export default ReviewForm;
