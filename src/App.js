//style
import "./App.css";

//pages

import About from "./pages/About";
import Acceuil from "./pages/Acceuil";
import Accodomation from "./pages/Accodomation";

//Error
import Error from "./pages/Error";

// loader
import { loaderGalleryDetails } from "./assets/loader";

//layout
import Main from "./layout/Main";

// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Acceuil /> },
      { path: "/about", element: <About /> },
      {
        path: "/accodomation/:id",
        element: <Accodomation />,
        loader: loaderGalleryDetails,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
