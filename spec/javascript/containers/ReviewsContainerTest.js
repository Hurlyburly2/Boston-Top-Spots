import ReviewsContainer from "../../../app/javascript/react/containers/ReviewsContainer";
import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe('ReviewsContainer', () => {
  let wrapper,
      reviews;

  beforeEach(() => {
    wrapper = mount(
      <ReviewsContainer
        reviews={[{id: 1, rating: 5, body: "A great attraction", user_id: 1}]}
        currentUser={null}
      />
    )
  });

  it('should render a ReviewTile component', () => {
     expect(wrapper.find(ReviewTile)).toBePresent();
   });

  it('should render the ReviewTile component with specific props', () => {
    expect(wrapper.find(ReviewTile).props().id).toEqual(1)
    expect(wrapper.find(ReviewTile).props().body).toEqual("A great attraction")
    expect(wrapper.find(ReviewTile).props().rating).toEqual(5)
    expect(wrapper.find(ReviewTile).props().user).toEqual(1)
    expect(wrapper.find(ReviewTile).props().currentUser).toEqual(null)
  });
});
