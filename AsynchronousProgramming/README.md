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

The promises are objects with two methods: `then()` and `catch()`. It is something that is expected to receive in the future but we do not know if will receive it.

```javascript
fetch("https://AnyDirection").then().catch();

```
With *`then()`* manage the promise in the case that the promise returns a positive response.

With *`catch()`* manage the promise in the case of any error or a negative response.

---

## Third form: **Async/Await**

Example in [*async_await.js*](async_await.js).

In this form use the async functions for manage the fetch with `await`.

```javascript 
async function a () {
    const resp = await fetch("https://AnyDirection");
    //This step is necesary because the .json() method is asynchronous.
    const json = await response.json();
    console.log("Result of the await:",json);
}
//Call to the function.
a()
```
The `await` manage the promise for us. In this case we not work with the them and catch methods.
