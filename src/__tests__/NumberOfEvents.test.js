import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".eventNumber")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const query = NumberOfEventsWrapper.state("query");
    expect(NumberOfEventsWrapper.find(".eventNumber").prop("value")).toBe(
      query
    );
  });

  test("change state when text input changes", () => {
    NumberOfEventsWrapper.setState({
      query: "32",
    });
    const eventObject = { target: { value: "20" } };
    NumberOfEventsWrapper.find(".eventNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("query")).toBe("20");
  });
});
