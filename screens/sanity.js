// sanity.js
import { createClient } from "@sanity/client";

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "lu0ome0d",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getRestaurant() {
//   const restaurans = await client.fetch(`*[_type == "featured"]{
//     ...,
//  restaurants[]->{
//     ...,
//     dishes[]->
//  }
// }`);
//   return restaurans;
// }

// export async function createRestauran(restauran) {
//   const result = client.create(restauran);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }
