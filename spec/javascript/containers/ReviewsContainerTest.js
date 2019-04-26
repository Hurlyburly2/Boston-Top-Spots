import ReviewsContainer from "../../../app/javascript/react/containers/ReviewsContainer";
import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe('ReviewsContainer', () => {
  let wrapper,
      reviews,
      currentUser,
      onClick;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy')
    currentUser = {
            id: 2,
            email: "heather.michelle.garcia@gmail.com",
            created_at: "2019-04-23T18:00:06.653Z",
            updated_at: "2019-04-24T18:48:58.446Z",
            username: "HeatherGarcia",
            role: "admin"
          }
    wrapper = mount(
      <ReviewsContainer
        reviews={[{id: 1, rating: 5, body: "A great attraction", user_id: 1}]}
        currentUser={currentUser}
        handleDeleteReview={onClick}
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
    expect(wrapper.find(ReviewTile).props().currentUser).toEqual(currentUser)
  });

  it("should invoke an onClick function from props when the Delete Button is clicked", () => {
    wrapper.find("#deleteButton1").simulate('click')
    expect(onClick).toHaveBeenCalled()
  });

});
