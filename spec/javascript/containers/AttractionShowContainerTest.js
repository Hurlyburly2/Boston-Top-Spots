import AttractionsShowContainer from "../../../app/javascript/react/containers/AttractionsShowContainer";
import AttractionTile from "../../../app/javascript/react/components/attractionTile";
import ReviewForm from "../../../app/javascript/react/containers/ReviewForm";
import ReviewsContainer from "../../../app/javascript/react/containers/ReviewsContainer";
import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

import fetchMock from "fetch-mock";
import '../testHelper.js'


describe("AttractionsShowContainer", () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      attractions: {
        id: 6,
        name: "Duck Tours",
        description: "A splashing good time",
        address: "123 Boston St.",
        city: "Boston",
        state: "MA",
        zip: "02137",
        reviews: [
          {
            id: 2,
            rating: 3,
            body: "This is a review",
            reviewer: {
              id: 1,
              username: "BorisMargarian"
            }
          }
        ]
      },
      user: {
        id: 2,
        email: "heather.michelle.garcia@gmail.com",
        created_at: "2019-04-23T18:00:06.653Z",
        updated_at: "2019-04-24T18:48:58.446Z",
        username: "HeatherGarcia",
        role: "admin"
      }
    };
    fetchMock.get('/api/v1/attractions/6', {
      status: 200,
      body: data
    });
    wrapper = mount(<AttractionsShowContainer params={{ "id": 6 }} />);
  });

  it("should render a ReviewsContainer component", (done) => {
    setTimeout(() => {
      expect(wrapper.find(ReviewsContainer)).toBePresent();
      done()
    }, 0)
  });

  it("should render a AttractionTile component", done => {
    setTimeout(() => {
      expect(wrapper.find(AttractionTile)).toBePresent();
      done();
    }, 0);
  });

  it("should render the AttractionTile Component with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(AttractionTile).props().id).toEqual(6)
      expect(wrapper.find(AttractionTile).props().name).toEqual("Duck Tours")
      expect(wrapper.find(AttractionTile).props().description).toEqual("A splashing good time")
      expect(wrapper.find(AttractionTile).props().address).toEqual("123 Boston St.")
      expect(wrapper.find(AttractionTile).props().city).toEqual("Boston")
      expect(wrapper.find(AttractionTile).props().state).toEqual("MA")
      expect(wrapper.find(AttractionTile).props().zip).toEqual("02137")
      expect(wrapper.find(AttractionTile).props().currentUser).toEqual(data.user)
      done();
    }, 0);
  });

  it("should render the ReviewsContainer with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(ReviewsContainer).props().reviews).toEqual(data.attractions.reviews)
      expect(wrapper.find(ReviewsContainer).props().currentUser).toEqual(data.user)
      done();
    }, 0);
  });


  it("should post a new review", (done) => {
    let params = {
      review: {
        rating: 5,
        body: 'A splashing good time',
        attraction_id: 3,
        user_id: 2
      }
    }

    fetchMock.post('/api/v1/reviews/create', {
      status: 201,
      body: params
    });
    setTimeout(() => {
      let listItemCount = wrapper.find('li').length
      wrapper.find('#submit-button').simulate('submit')
      setTimeout(() => {
        expect(wrapper.find('li').length).toEqual(listItemCount + 1)
        done()
      }, 0)
    }, 0)
  });

  it('shows an error message when a 422 status is received', (done) => {
    fetchMock.post('/api/v1/reviews/create', {
      status: 422,
      body: { errorItems: ["You cannot submit a blank form or must be logged in!"] }
    });
    wrapper.find('#submit-button').simulate('submit')
    setTimeout(() => {
      expect(wrapper.find('.callout-alert')).toBePresent()
      expect(wrapper.find('.callout-alert').text()).toEqual("You cannot submit a blank form & must resolve all errors!")
      done()
    }, 0)
  });

  it("should post a new vote", (done) => {
    let params = {
      score: 1,
      vote: {
        value: 1,
        review_id: 3,
        user_id: 2
      }
    }

    fetchMock.post(`/api/v1/votes`, {
      status: 201,
      body: params
    });
    setTimeout(() => {
      wrapper.find('.upvote').simulate('click')
      setTimeout(() => {
        expect(wrapper.find('.score')).toBePresent()
        expect(wrapper.find('.score').length).toEqual(1)
        done()
      }, 0)
    }, 0)
  });
});
