import React from "react";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import Event from "../Event";
import NumberOfEvents from "../NumberOfEvents";
import { shallow, mount } from "enzyme";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  // test("render event", () => {
  //   expect(AppWrapper.find(Event)).toHaveLength(1);
  // });

  // test("render NumberOfEvents", () => {
  //   expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  // });
});

describe("<App /> integration", () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });
});
