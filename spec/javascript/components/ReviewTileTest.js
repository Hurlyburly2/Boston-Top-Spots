import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe("ReviewTile", () => {
  let rating, body, wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        rating={5}
        body="A great place in Boston"
        currentUser={null}
      />
    );
  });

  it("should render an li tag", () => {
    expect(wrapper.find("li")).toBePresent();
  });

  it("should render a p tag with a certain text property value", () => {
    expect(wrapper.find("#description-text").text()).toBe("A great place in Boston");
  });

  it("should render the ReviewTile component with specific props", () => {
    expect(wrapper.props()).toEqual({
      rating: 5,
      body: "A great place in Boston",
      currentUser: null
    });
  });
});
