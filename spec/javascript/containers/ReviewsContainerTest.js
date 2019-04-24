import ReviewsContainer from "../../../app/javascript/react/containers/ReviewsContainer";
import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe('ReviewsContainer', () => {
  let wrapper,
      reviews;

  beforeEach(() => {
    wrapper = mount(
      <ReviewsContainer
        reviews={[{rating: 5, body: "A great attraction"}]}
      />
    )
  });

  it('should render a ReviewTile Component', () => {
     expect(wrapper.find(ReviewTile)).toBePresent();
   });

});
