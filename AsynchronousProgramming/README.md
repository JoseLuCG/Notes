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
