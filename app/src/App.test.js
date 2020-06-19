import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render the App component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render a Button component", () => {
    const Button = wrapper.find("Button");
    expect(Button).toHaveLength(1);
  });

  it("should pass props to Button component", () => {
    const Button = wrapper.find("Button");
    expect(typeof Button.prop("onClick")).toEqual("function");
    expect(typeof Button.prop("children")).toEqual("string");
  });

  it("should pass a callback to Button component", () => {
    const Button = wrapper.find("Button");
    expect(Button.prop("onClick")).toBeDefined();
  });

  it("should show message when Button is Clicked", () => {
    const Button = wrapper.find("Button");
    Button.simulate("click");
    expect(wrapper.find("p").text()).toEqual("This is a hidden message");
  });
});
