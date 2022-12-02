// import lodash from 'lodash'
import * as webpackImage from './assets/webpack-image.png';
// import './assets/style.scss'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/index.js');
	console.log('This is ./src/index.js');
  // console.log(lodash);
  document.body.append(h1)

  const image = document.createElement('img');
  image.src = webpackImage.default
  image.style.width = '400px'
  document.body.append(image);
})();
