import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";
import { test, expect } from "jest";

test("Button component renders correctly", () => {
  const mockOnClick = bun.fn(); // Create a mock function to simulate a click event
  const { getByTestId } = render(
    <Button onClick={mockOnClick} label="Click me" />
  );

  // Use getByTestId to get the button element
  const button = getByTestId("button");

  // Assert that the button is in the document
  expect(button).toBeInTheDocument();

  // Simulate a click event on the button
  fireEvent.click(button);

  // Check if the mock function was called
  expect(mockOnClick).toHaveBeenCalled();

  // Check if the button label is correct
  expect(button).toHaveTextContent("Click me");
});
