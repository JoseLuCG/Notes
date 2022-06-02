# **Object introduction**
In this section treat the objects in javascript. For more information check the [_documentation_](https://www.w3schools.com/js/js_objects.asp).

In this files, transforms a array of arrays in a array of _objects_ with the help of a `constructor`, using __classes__.

```js
//Firstly, create the class:
class Warrior {
    constructor (name, life, strength) {
        this.name = name;
        this.life = life;
        this.strength = strength;
    }
    // Here adds methods at the warrior object.
    attack ( warrior ) {
        warrior.life -= this.strength;
    }
    heal ( warrior ) {
        warrior.life ++;
    }
}
```
In each file is used diferets forms of transform the array in a object.

* Using `.forEach()` method: in [_forEach.js_](forEach.js)
* Using `for of`: in [_forOf.js_](forOf.js)
* Using a `.map()`
method: in [_map.js_](map.js).