async function fetchData(path: string, queryParams: {}) {
   const response = await fetch(path + new URLSearchParams(queryParams), { method: "GET", credentials: "same-origin" });

   return await response.json();
}

export { fetchData };
