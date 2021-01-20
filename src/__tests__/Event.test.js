import React from "react";
import { shallow } from "enzyme";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  const event = {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-21T17:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
  };
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render the event div", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the Event component", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("render the event summary", () => {
    expect(event.summary).toBe("Learn JavaScript");
  });

  test("render the event description", () => {
    expect(event.description).toHaveLength(354);
  });

  test("render the event location", () => {
    expect(event.location).toBe("London, UK");
  });

  test("render the event time", () => {
    expect(event.start.dateTime).toBe("2020-05-21T16:00:00+02:00");
  });

  test("render the event timezone", () => {
    expect(event.start.timeZone).toBe("Europe/Berlin");
  });

  test("render the details button", () => {
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("change state when details button is clicked", () => {
    expect(EventWrapper.state("showDetails")).toEqual(false);
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("event details collapse when button is clicked", () => {
    expect(EventWrapper.state("showDetails")).toEqual(true);
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});
