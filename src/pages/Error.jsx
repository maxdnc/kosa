// import react router
import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error-404">404</h1>
      <h2 className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-link" to="/kosa/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};
export default Error;
