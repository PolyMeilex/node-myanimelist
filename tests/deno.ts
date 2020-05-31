import Mal from "https://cdn.pika.dev/esm-myanimelist-tests"

let test = Mal.anime(1);
test
  .info()
  .then((res: any) => res.json())
  .then((s: any) => console.log(s));



// import * as f from 'https://unpkg.com/node-fetch@2.6.0/browser.js';

// f("google.com");