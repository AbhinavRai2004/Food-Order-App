import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <Header />
      <button
        className="absolute w-14 h-14 top-24 right-3 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
        onClick={toggleDarkMode}
      >
        {darkMode ? "LHT" : "DRK"}
      </button>
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuCard />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <SignIn />
      }
    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
