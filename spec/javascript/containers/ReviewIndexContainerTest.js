import ReviewIndexContainer from "../../../app/javascript/react/containers/ReviewIndexContainer";
import MyReviewTile from "../../../app/javascript/react/components/MyReviewTile";

import fetchMock from "fetch-mock";
import "../testHelper.js";

describe("ReviewIndexContainer", () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      reviews: [
        {
          id: 2,
          rating: 3,
          body: "This is a review",
          reviewer: {
            id: 1,
            username: "BorisMargarian"
          },
          location: {
            name: "Duck Tours",
            image_url: "image.png"
          },
          attraction: {
            id: 6,
            name: "Duck Tours",
            description: "A splashing good time",
            address: "123 Boston St.",
            city: "Boston",
            state: "MA",
            zip: "02137",
            created_at: "2019-04-23T19:28:11.748Z",
            updated_at: "2019-04-23T20:21:54.643Z",
            user_id: null,
            image_url: "image.png"
          },
          user: {
            id: 1,
            username: "BorisMargarian"
          }
        }
      ]
    };

    fetchMock.get("/api/v1/reviews", {
      status: 200,
      body: data
    });
    wrapper = mount(<ReviewIndexContainer />);
  });

  it("should render a MyReviewTile component", done => {
    setTimeout(() => {
      expect(wrapper.find(MyReviewTile)).toBePresent();
      done();
    }, 0);
  });

  it("should render the MyReviewTile Component with specific props", done => {
    setTimeout(() => {
      expect(wrapper.find(MyReviewTile).props().id).toEqual(2);
      expect(wrapper.find(MyReviewTile).props().rating).toEqual(3);
      expect(wrapper.find(MyReviewTile).props().attraction_name).toEqual(
        "Duck Tours"
      );
      expect(wrapper.find(MyReviewTile).props().attraction_image).toEqual(
        "image.png"
      );
      expect(wrapper.find(MyReviewTile).props().body).toEqual(
        "This is a review"
      );
      done();
    }, 0);
  });
});
