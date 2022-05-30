# **Documentation:**

In this folder have severals forms to launch a fetch in javascript. In this document shows tree ways with your correspondent example.

---

## Frist form: **Callbacks**

Example in [*callback.js*](callbacks.js).

In this way show the form to make a fetch with callbacks. In this case would be:

```javascript
//Create the callbacks:
function a (position) {
    console.log(position);
}
function b (err) {
    console.log(err);
}
```
This callbacks are use before for two possible responses. 

Before this, inplements in the method: 
```javascript
//Call to the callbacks:
navigator.geolocation.getCurrentPosition(a,b);
```
---

## Second form: **Promises**

Example in [*promises.js*](promises.js).

In this manner the fetch is realized with the promises.

```javascript
fetch("https://AnyDirection").then().catch();

```
With *```then()```* we work in the positive response of the promise. In the case that the promise returns a positive response.

With *```catch()```* we work in the case of any error or a negative response.