import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test Header", () => {
	render(<App />);
	const headerElement = screen.getByText(/Auto Deploy Projei/i);
	expect(headerElement).toBeInTheDocument();
});
