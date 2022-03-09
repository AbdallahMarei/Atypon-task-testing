import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import "./setupTest"

it("renders without crashing", () => {
    shallow(<App />);
});
