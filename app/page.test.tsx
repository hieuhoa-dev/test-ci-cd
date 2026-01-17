import React from "react";
import {Add, Divide} from "@/app/func";
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
        it("test func Divide", () => {
            expect(Divide(2, 1)).toBe(2);
            expect(() => Divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });
});
