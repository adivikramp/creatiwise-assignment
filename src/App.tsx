import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// Page imports
// import About from "./pages/About";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App