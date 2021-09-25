# Modulos

Un archivo de código representa un `Modulo`. Un modulo expone funcionalidad para que pueda ser consumida desde otros archivos.

- Exponer --> `export` o `module.exports`
- Consumir --> `import` o `require`

En la prehistoria no había forma de consumir un archivo dentro de otro, ya que el lenguaje JS estaba destinado para su uso en un navegador y en varios archivos que consumian de un contexto global.

Se detecta la necesidad de consumir funcionalidades de otros archivos sin exponerlo en el contexto global y como no existía la forma de hacerlo, la "gente" se inventó varias formas diferentes.

De aquí surgen los diferentes tipos de módulos en JS hasta que en 2015 se liberan los ESModules (EcmaScript Modules):

- CommonJS (CJS)
- AMD, implementado por RequireJS
- UMD (Universal Module Definition) (CommonJS + AMD)
- ESModules (El estandar) (ESM)

![ESModule Cheatsheet](https://miro.medium.com/max/1200/1*GpS8sOvkhbj-NIXNtM084g.png).

Podemos cargar los modulos de NodeJS utilizando tanto CommonJS o ESM. Por defecto NodeJS utiliza CJS, pero si queremos utilizar ESM debemos crear un proyecto `npm` y establecer la propiedad `type` del `package.json` al valor module.

1. `npm init`
2. Cambiar o crear si no existe la propiedad `type` con valor `module` en el package.json.

Existe otra forma que es cambiando la extensión del archivo a `.mjs` que significa módulo de JS
