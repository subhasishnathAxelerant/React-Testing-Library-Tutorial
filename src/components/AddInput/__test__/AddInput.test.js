import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput'
/**
 * Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.
 */
// created a bummy mock function.
const mockedSetTodos = jest.fn();

// describe(name, fn) creates a block that groups together several related tests.
describe("AddInput", ()=> {
  // we're checking if the input element is there or not first.
  it('should check if the input field is there or not', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const taskInputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(taskInputElement).toBeInTheDocument();
  });

  // if we type something in the input, the value of the input should change. checking if we're able to type in input
  it('should change the input field value as we type', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const taskInputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // triggeting an event.
    // change will take the input element as first argument.
    // change will take an options object as second argument.
    // we're changing the input value
    fireEvent.change(taskInputElement, {target: {value: "Go to Store"}});
    // now we're expecting the updated value to be there.
    expect(taskInputElement.value).toBe("Go to Store");
  });

  // After typing values in our input, when we click on the Add button,
  // the input value changes to blank.
  it('should have empty input, when add button is clicked', () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const taskInputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButtonElement = screen.getByRole('button', { name: /Add/i });
    // triggeting an event.
    // First we're changing the input value
    fireEvent.change(taskInputElement, {target: {value: "Go to Store"}});
    // Then we're clicking on the Add button.
    fireEvent.click(addButtonElement)
    // now we're expecting the updated value to be there.
    expect(taskInputElement.value).toBe("");
  });
})