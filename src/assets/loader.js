import data from "./data";

export async function loaderGalleryDetails({ params }) {
  const image = await data.find((item) => item.id === params.id);
  if (image.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return await image;
}
