import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the stat", () => {
        const component = create(<ProfileStatus status="testim test"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("testim test")
    })
})