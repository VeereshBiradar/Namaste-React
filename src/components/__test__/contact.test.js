import { render, screen } from "@testing-library/react";
import ContactUS from "../ContactUS";
import "@testing-library/jest-dom";

//it and test both are same

xdescribe("Contact US page test case", () => 
{
  it("should load contactUs component", () => {
    render(<ContactUS />); //render componet on JS Dom

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load the button inside contact component", () => {
    render(<ContactUS />);
    const button = screen.getByText("submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input inside contact component", () => {
    render(<ContactUS />);
    const inputName = screen.getByPlaceholderText("First Name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load all the input boxes inside contactus component", () => {
    render(<ContactUS />);

    const inputName = screen.getAllByRole("First Name");
    //retuns the JSX
    console.log(inputName);
    expect(inputName).toBeInTheDocument();
    // expect(inputName.length).tobe(1);
  });
});
