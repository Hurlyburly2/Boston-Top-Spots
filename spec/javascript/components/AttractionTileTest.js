import React from "react";
import AttractionTile from "../../../app/javascript/react/components/attractionTile";

describe("AttractionTile", () => {
  let name, description, address, city, state, wrapper, zip, onClick;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy')
    wrapper = mount(
      <AttractionTile
        name="Duck Tours"
        description="A quacking good time"
        address="123 Boston St"
        city="Boston"
        state="MA"
        zip="02127"
        currentUser={{
                id: 2,
                email: "heather.michelle.garcia@gmail.com",
                created_at: "2019-04-23T18:00:06.653Z",
                updated_at: "2019-04-24T18:48:58.446Z",
                username: "HeatherGarcia",
                role: "admin"
              }}
        handleDeleteAttraction= {onClick}
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

  it("should invoke an onClick function from props when the Delete Button is clicked", () => {
    wrapper.find("#deleteAttractionButton").simulate('click')
    expect(onClick).toHaveBeenCalled()
  });

});
