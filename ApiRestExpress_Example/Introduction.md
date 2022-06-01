# Introducción API backend

## Puesta en marcha
1. Instalación de dependencias
```bash
npm install
```
2. Ejecución del programa
```bash
node index.mjs
```

## Memoria de construcción de este proyecto desde cero

1. Crear el repositorion en GitHub (o similar) y clonarlo localmente.
```bash
git clone http://.../MiRepoGit
```
2. Inicializar proyecto node
```bash
cd MiRepoGit
npm init -y
```
3. Instalamos Express
```bash
npm install express
```
4. Excluimos `node-modules` del repositorio.
    * Creamos un fichero `.gitignore`
    * En el mismo añadimos una linea `node-modules`.
5. Hacemos el primer commit.
```bash
git add .
git commit -m "First commit"
git push
```
## Creando los endpoints de la API
Consulta el fichero `index.mjs`.