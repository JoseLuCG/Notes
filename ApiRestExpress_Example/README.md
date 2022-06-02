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