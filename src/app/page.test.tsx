import { render } from "@testing-library/react";
import Home from "./page";

describe('Home page', () => {
    test("renders", () => {
        render(<Home/>);
    });
});