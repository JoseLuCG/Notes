# Documentation

Firstly read the [_introduction document_](Introduction.md)

In this folder work with __Express__. A web framework for Node. In this link adds the [___Express documentation___](https://expressjs.com/en/starter/hello-world.html).

---

Firstly, after of install express module import them in the code:
```javascript
import express from 'express';
```
Or:
```javascript
const express = require("express");
```
Then, assign in a _constant_ the port number:
```javascript
const PORT = 3000;
```
After this, initialize the express instance:
```javascript
const app = express();
```
To use _json_ in the conecction between the frontend and the backend, we must use a midleware: `express.json()`.

Can implement this tool of two forms:

* Using it in all endpoints:
    ```js
    app.use(express.json()); 
    ```
* Make this a midleware and implement it in the endpoint that realy need them.
    ```js
    //Create the midleware.
    const jsonParser = express.json(); 
    
    ///Using it:
    app.post("/anyroute/",jsonParser,anyControler); 
    ```

After this we can define the endpoints.

In this example we use a array as database. 

In this[_document_](index.mjs) explain the parts of a endpoint and the form of start listen the port where we receive the petitions.
