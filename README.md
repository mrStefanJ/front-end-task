# Front-End Task

Basic website with HTML5, CSS3, SCSS, jQuery and JavaScript(ES6)

## Install

It requires node.js
```bash
1. get clone https://github.com/mrStefanJ/front-end-task
2. cd front-end-task
3. npm install
4. npm start
```

The server will run on port 8080. 

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install webpack.

```webpack
npm install webpack webpack-cli --save-dev 
```
## Technologies
Project is created with:
* HTML5
* CSS3/SCSS
* jQuery
* JavaScript

I am usiing Babel and it is open-source JavaScript transcopiler that is mainly used to 
convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that 
can be run by older JavaScript engines.  

I had to do hard-cord for image, because on webpack.config.js 
I had define image to display but on my computer it did display, so I just coped all image 
to dist/assets folder.

```javascript
webpack.config.js
{
        test: /\.(png|jpe?g|gif|ttf)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      }, 
```

I have used bootstrap labraries(news version) beacuse it help to design websites faster and easier 
and font awesome icons.

## License
[MIT](http://choosealincense.com/licenses/mit/)