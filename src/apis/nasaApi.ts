import { fetchData } from "../helpers";

const BASE_URL: string = "https://api.nasa.gov/planetary/apod?";
const API_KEY: string = "nCQtI3qCUNKuu90gf101GUfrpWdg98gvhwc55s4N";

export async function getApods() {
   return await fetchData(BASE_URL, { api_key: API_KEY, count: 12 });
}
