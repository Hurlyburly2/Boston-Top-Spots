import ReviewsContainer from "../../../app/javascript/react/containers/ReviewsContainer";
import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe('ReviewsContainer', () => {
  let wrapper,
      reviews;

  beforeEach(() => {
    wrapper = mount(
      <ReviewsContainer
        reviews={[{id: 1, rating: 5, body: "A great attraction", user_id: 1}]}
      />
    )
  });

  it('should render a ReviewTile component', () => {
     expect(wrapper.find(ReviewTile)).toBePresent();
   });

  it('should render the ReviewTile component with specific props', () => {
    expect(wrapper.find(ReviewTile).props()).toEqual({
      id: 1,
      body: "A great attraction",
      rating: 5,
      user: 1
    });
  });
});
