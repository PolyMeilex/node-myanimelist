
import esmFetch from "https://cdn.pika.dev/esm-fetch@1.0.3";

esmFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));