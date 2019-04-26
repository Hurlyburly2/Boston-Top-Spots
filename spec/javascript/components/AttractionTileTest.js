import React from "react";
import AttractionTile from "../../../app/javascript/react/components/attractionTile";

describe("AttractionTile", () => {
  let name, description, address, city, state, wrapper, zip;

  beforeEach(() => {
    wrapper = mount(
      <AttractionTile
        name="Duck Tours"
        description="A quacking good time"
        address="123 Boston St"
        city="Boston"
        state="MA"
        zip="02127"
        currentUser={null}
      />
    );
  });

  it('should render an h1 tag with the text "Duck Tours"', () => {
    expect(wrapper.find("h1").text()).toBe("Duck Tours");
  });

  it("should render an attraction description", () => {
    expect(wrapper.find("#attraction-description").text()).toBe(
      "A quacking good time"
    );
  });

  it("should render an attraction name", () => {
    expect(wrapper.find("#attraction-name").text()).toBe("Duck Tours");
  });

  it("should render an attraction address", () => {
    expect(wrapper.find("#attraction-address").text()).toBe("123 Boston St");
  });

  it("should render an attraction city, state, zip", () => {
    expect(wrapper.find("#attraction-city-state-zip").text()).toBe(
      "Boston, MA 02127"
    );
  });
});
