//style
import "./App.css";
// rrd import
import { createHashRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createHashRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
