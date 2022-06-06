# Introducción a React
 ¿Buscas la documentación original?. Está más abajo.

## Creación de un proyecto de React básico

1. Creamos nuestro repositorio en GitHub (o similar).
2. Clonamos en local, cuidando de que la capeta del proyecto no contenga mayusculas o espacios.
```bash
git clone http://.../MiRepoGit mi-repo-git
```
3. Ejecutamos la herramienta de node `create-react-app` para que complete la plantilla básica de React en nuestro repositorio clonado.
```bash
npx create-react-app mi-repo-git/
```
4. Realizamos nuestro commit inicial.
```bash
cd mi-repo-git/
git add .
git commit -m "First commit"
git push
```

## Dónde empezamos a programar
* El componente principal de la plantilla es el fichero `src/App.js`. A partir de este componente iremos construyendo nuestra aplicación.
* Para crear nuestros subcomponentes podemos organizarlos creando una nueva carpeta `src/components` y dentro de la misma crearemos una subcarpeta para cada componente, de modos que las hojas de estilos, imágenes y otros ficheros que emplee el componente estén junto al mismo.

## ¿Cómo era el esqueleto básico de un componente React?
Algo así:
```js
import Logo from "./logo.png"

// Tu código.
const date = new Date();
const year = date.getFullYear();

function Header ({title}) {
    //Más de tu código
    const bigTitle = title.toUpperCase();

    //Y la salida
    return (
        <>
            <h1>{title}</h1>
            <p>Año {year}</p>
        </>
    )
}

// Y lo ponemos a disposición
//de otros componentes
export default Header
```

Y a partir de aquí la documentación original...

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
