# **Documentation**

In this folder We work with only promises and explain your structure.

---

## **Creating a Promise**

The promise will be inicialize in a constant, and has this structure:

Example of a promise created in [*index.js*](index.js)

```javascript
const newPromise = new Promise(
    (resolve, reject) => {
        resolve(result);
        reject(error);
    }
);
```
_`resolve()`_: manage the positive response of the promise.<br>
_`reject()`_: manage the promise if the response not works or happen any error.

---
## **Manage the promise**

For manage the promise had a two methds. In this example we based the code in the example of index.js:

Example of `then()`:
```javascript
ramdomOdd // The promise.
.then(// Then method.
    odd => console.log("A odd:", odd) // Any things.
)
```
Example of `catch()`:
```javascript
)
.catch(// The catch method
    even => console.error("It went bad:", even) //Any things. 
)
```
The manage estructure of a promise is:
```javascript
promise.then(
    // Your code.
).catch(
    // Your code.
)
```