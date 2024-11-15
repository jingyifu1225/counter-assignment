// import necessary react testing library helpers here
// import the Counter component here

import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); // Increment to 1

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton); // Decrement back to 0

  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent("0");
});
