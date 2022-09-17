import { render, screen } from '@testing-library/react';
import Header from '../Header';

// our first unit test.
it('should render the same text passed into the title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// using getRole
// it('should render the role that we have passed', () => {
//     render(<Header title="My Header"/>);
//     const headingRoleElement = screen.getByRole("heading");
//     expect(headingRoleElement).toBeInTheDocument();
//   });

  it('should render the role that we have passed', () => {
    render(<Header title="My Header"/>);
    const headingRoleElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingRoleElement).toBeInTheDocument();
  });

  // testing by title of our Header component elements
  it('should select by title', () => {
    render(<Header title="My Header"/>);
    const headingTitleElement = screen.getByTitle("Header");
    expect(headingTitleElement).toBeInTheDocument();
  });

  // ByTestId find by data-testid attribute for Header component elements
  it('should select by data-testid', () => {
    render(<Header title="My Header"/>);
    const headingDataTestIdElement = screen.getByTestId("header-one");
    expect(headingDataTestIdElement).toBeInTheDocument();
  });

  // findBy
  it('should select by findBy',async () => {
    render(<Header title="My Header"/>);
    const headingFindByElement = await screen.findByText(/My Header/i);
    expect(headingFindByElement).toBeInTheDocument();
  });
// queryBy
  it('should select by queryBy', () => {
    render(<Header title="My Header"/>);
    // getting the element that has Dog text in it.
    const headingFindByElement = screen.queryByText(/Dog/i);
    // We are expecting the element not to be there.
    expect(headingFindByElement).not.toBeInTheDocument();
  });

  // getAllByRole
  it('should select by queryBy', () => {
    render(<Header title="My Header"/>);
    // getting all the elements with heading role.
    const headingElements = screen.getAllByRole("heading");
    // We are expecting the length of the array holding all of the
    // heading elements to be 2, as there are only two headings in our component.
    expect(headingElements.length).toBe(2);
  });