import { fireEvent, render } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it('should change the Login Button to logout onClick', ()=> {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const loginButton = screen.getByRole('button', {name: 'Login'});
      fireEvent.click(loginButton);
      const logoutButton = screen.getByRole('button', {name: 'Logout'});
      expect(logoutButton).toBeInTheDocument();
})