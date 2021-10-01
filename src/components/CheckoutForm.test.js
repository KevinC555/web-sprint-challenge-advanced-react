import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
	render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
	render(<CheckoutForm />);


	// eslint-disable-next-line no-restricted-globals
	const hello = screen.getByText("You have ordered some plants! Woo-hoo!");

});

// I don't know why this isn't working. Or why it is throwing this error of screen being dumb. Maybe a hint towards the right direction?
