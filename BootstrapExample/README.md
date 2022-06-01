# **Documentation**

In this folder treat the css of bootstrap and the variables of css. 

The [_documentation of bootstrap_](https://bit.ly/3wL0wZZ).

---
## **Creating global variables**
For creating a global variable we write:

```css
/* Declaring the variable*/
:root {
    --variableName: rgb(255, 170, 59);
    --variableName: 3rem;
}
```
And for use it, we made this:
```css
.anyClass {
                    /* Here call the variable*/
    background-color: var(--variableName);
}
```