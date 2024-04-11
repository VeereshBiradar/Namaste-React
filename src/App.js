import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUS from "./components/ContactUS";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Veeresh Biradar",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>I love you</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

//when code is not available what react need to render like while loading we can pass to fallback we can pass the JXS here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
