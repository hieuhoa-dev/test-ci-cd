import React from "react";
import {Add} from "@/app/add";
import Home from "@/app/page";
import {render, screen} from "@testing-library/react";

describe("Test", () => {
    describe("Test Ui", () => {
        it("renders should be text: Hello World", () => {
            render(<Home/>);

            expect(screen.getByText("Hello World")).toBeInTheDocument();
        });
    });

    describe("Test Logic", () => {
        it("test func Add", () => {
            expect(Add(1, 1)).toBe(2);
            expect(Add(1, 2, 3, 4)).toBe(10);
        });
    });
});
