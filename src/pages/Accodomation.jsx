import { useLoaderData } from "react-router-dom";

const Accodomation = () => {
  const data = useLoaderData();

  return <div>{data.title}</div>;
};
export default Accodomation;
