# **GitHub markdown**
El link de la documentación:

[Documentación markdown Github.](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

---
---
Para marcar los títulos empleamos **#**:
```markdown
# Titulo 1
```
# Titulo 1

```markdown
## Título 2
```
## Titulo2

---
---

Los parrafos se estriben normal:
```markdown
Un párrafo normal. Las lineas en blanco son importantes.
```
---
---

Listas se crean mediante "__*__", o "**-**" :
```markdown
* Lista
* de cosas
    - y tal...
    - y cual

- y tal...
- y cual

1. Cosas
2. Más cosas
```
* Lista
* de cosas
    - y tal...
    - y cual

- y tal...
- y cual

1. Cosas
2. Más cosas
---
---

```markdown
Podemos *resaltar* texto **de un par** de formas _mediante_ distintas __marcas__ y evitar ~~errores~~ o más ***cosas***.
```
Podemos *resaltar* texto **de un par** de formas _mediante_ distintas __marcas__ y evitar ~~errores~~ o más ***cosas***.

Las citas se crean mediante "**>**":
```
 > Esto es una cita.
```

 > Esto es una cita.

Para poner un fragmento de código se usan las "```" seguido del lenguaje que se quiere interpretar:
```markdown
    ```javascript
    function punto (x,y) {
        return {x: x, y: y};
    }
    ```
```

```javascript
function punto (x,y) {
    return {x: x, y: y};
}
```
También podemos hacer referencia a `una función` en medio del texto englobando la palabra con \`Funcion`\:

```javascript
También podemos hacer referencia a `una función` en medio del texto
```
---
---
Los enlaces se crean mediante **[]** seguidos del link entre **()**
```
Hacer enlaces a [Google](http://bing.com)
```
Hacer enlaces a [Google](http://bing.com)

Para las fotos seria  ![nombre] (Link de la foto):
```javascript
![Insertar imágenes](https://github.githubassets.com/images/modules/site/about/octocats.webp)

![Gatitos](./img/gatitos.jpg)
```
![Insertar imágenes](https://github.githubassets.com/images/modules/site/about/octocats.webp)

![Gatitos](./img/gatitos.jpg)