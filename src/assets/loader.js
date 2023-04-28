import data from "./data";

export async function loaderGalleryDetails({ params }) {
  const image = await data.find((item) => item.id === params.id);
  return await image;
}
