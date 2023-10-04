import { render, screen } from "@testing-library/react";
import Contact from './../Contact';
import "@testing-library/jest-dom"

describe('Contact us', () => { 
    it("Contact pafge rendering", () => {
        render(<Contact />)

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('Contact page should have 2 input boxes', () => {
        render(<Contact/>)

        const inputBoxes = screen.getAllByRole('textbox');

        expect(inputBoxes.length).toBe(2)
    })
})