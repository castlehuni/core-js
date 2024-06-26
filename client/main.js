import { xhrPromise } from "./lib/index.js";

const getData = async () => {
  
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');

  console.log(data);
}

// getData();