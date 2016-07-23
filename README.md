# mobx-starter-kit
Starter kit for React, MobX, ES6, Sass, Less and React-Router


##Features
* Hot Module Replacement
* Less Compile
* Sass Compile
* React Router
* MobX

## Usage

```
npm install
npm start
open http://localhost:7000
```

## How to Start
####There are Two folder inside starter kit. src and dist.
![File Tree](https://raw.githubusercontent.com/polodev/react-mobx-starter-kit/master/folder_structure.png  "File Tree")

1. Make a view file inside src/views/
2. export the view file through src/views/index.js
3. in router/index.js import that created view
4. give a route path for this view
5. thats all for development

### File and Production Mode
In order to get production code
```
npm run compile

```
this npm command will prepare the production dist. Just deploy the dist folder thats it. This command also copied all static file
#####for test dis folder
```
cd dist
```
python 2.*
```
python -m SimpleHTTPServer
```

python 3.*
```
python -m http.server
```
Now go to




### Dependencies
* mobx
* mobx-react
* node-sass
* react
* react-dom
* react-router

### devDependencies
* sass-loader
* babel-core
* babel-loader
* babel-plugin-transform-decorators-legacy
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-1
* copy-webpack-plugin
* css-loader
* express
* less
* less-loader
* mobx-react-devtools
* postcss-loader
* react-hot-loader
* style-loader
* webpack
* webpack-dev-middleware
* webpack-hot-middleware
