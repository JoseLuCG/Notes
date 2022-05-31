# **Documentation**
In this folder We work with only promises and explain your structure.

---

## **Creating a Promise**

The promise will be inicialize in a constant, and has this structure:

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