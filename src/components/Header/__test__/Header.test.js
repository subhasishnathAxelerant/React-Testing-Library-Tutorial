import { render, screen } from '@testing-library/react';
import Header from '../Header';

// describe(name, fn) creates a block that groups together several related tests.
describe("Header", ()=> {
  // our first unit test.
  it('should render the same text passed into the title prop', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my Header/i);
    expect(headingElement).toBeInTheDocument();
  });
})



