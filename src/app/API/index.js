export const getAllProducts = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json()) 
    .then((data) => {
      console.log("Fetched Data:", data);
      return data; 
    });
};
