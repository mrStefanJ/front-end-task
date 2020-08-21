# Front-End Task

## Install

For initializing the project please follow next steps

```bash
1. get clone https://github.com/mrStefanJ/front-end-task
2. cd front-end-task
3. npm install
4. npm start
```

The server will run on port 8080. 

```
## Technologies
Project is using following technologies:
* HTML5
* CSS3/SCSS
* jQuery
* JavaScript
* Webpack
* Bootstrap

I am using Babel and it is open-source JavaScript transcopiler that is mainly used to 
convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that 
can be run by older JavaScript engines.  

If you stumble upon a problem with displaying the images because some of the webpack tasks are not
working properlly on your machine, simply copy all asstes from /assets folder into /dist/assets folder

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

## License
[MIT](http://choosealincense.com/licenses/mit/)