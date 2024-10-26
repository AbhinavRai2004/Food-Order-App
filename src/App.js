import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import Cart from './components/Cart';
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Header />
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
        element: <SignIn/>
      }
    ],
    errorElement: <Error />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
