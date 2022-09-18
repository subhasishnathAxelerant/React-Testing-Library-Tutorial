import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom";
// creating a Mock component.
// Because, like should be wrapped by BrowserRouter.
const MockTodoFooter = ({numberOfIncompleteTasks})=>{
    return (
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
    )
}
// checking for assertion
it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const tasksLeftElement = screen.getByText(/5 tasks left/i)
    // Assert whether an element is present in the document or not
    expect(tasksLeftElement).toBeInTheDocument();
});
// checking for assertion
it('should render "task" when having 1 task', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const singleTasksLeftElement = screen.getByText(/1 task left/i)
    // Use when you don't care what a value is, you just want to ensure a value is true in a boolean context.
    expect(singleTasksLeftElement).toBeTruthy();
});
// checking for assertion
it('should render "task" when having 1 task', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const singleTasksLeftElement = screen.getByText(/1 task left/i)
    // This allows you to check if an element is currently visible to the user
    expect(singleTasksLeftElement).toBeVisible();
    // expect(singleTasksLeftElement).not.toBeVisible();
    // the above will return true, if  the element is not visible.
});

// checking for assertion
it('should render the tag name of the current task', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const singleTasksLeftElement = screen.getByTestId("para")
    // Check whether the given element has a text content or not.
    expect(singleTasksLeftElement).toHaveTextContent("1 task left");
});

// checking for assertion
it('should render the tag name of the current task', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const singleTasksLeftElement = screen.getByTestId("para")
    // .textContent let's use access the content of the element.
    // Then we can check if
    expect(singleTasksLeftElement.textContent).toBe("1 task left");
});