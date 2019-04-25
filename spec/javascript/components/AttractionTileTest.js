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
      />
    );
  });

  it('should render an h1 tag with the text "Duck Tours"', () => {
    expect(wrapper.find("h1").text()).toBe("Duck Tours");
  });

  it("should render a p tag", () => {
    expect(wrapper.find("#attraction-description").text()).toBe("A quacking good time");
  });

  // it("should render a p tag with the text A quacking good time", () => {
  //   expect(wrapper.text()).to.equal("A quacking good time");
  // });
});
