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

const routes = [
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
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

export default routes;
