import ReviewTile from "../../../app/javascript/react/components/ReviewTile";

describe("ReviewTile", () => {
  let rating, body, wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile rating="5 Stars" body="A great place in Boston" />
    );
  });

  it("should render an h3 tag", () => {
    expect(wrapper.find("h3")).toBePresent();
  });

  it("should render an h3 tag with a certain text property value", () => {
    expect(wrapper.find("h3").text()).toBe("Rating: 5 Stars");
  });

  it("should render a p tag with a certain text property value", () => {
    expect(wrapper.find("p").text()).toBe("A great place in Boston");
  });

  it("should render the ReviewTile component with specific props", () => {
    expect(wrapper.props()).toEqual({
      rating: "5 Stars",
      body: "A great place in Boston"
    });
  });
});
