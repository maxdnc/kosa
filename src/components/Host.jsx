// style

import "./Host.css";

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="host-name">{host.name}</p>
      <img className="host-photo" src={host.picture} alt="owner face" />
    </div>
  );
};
export default Host;
