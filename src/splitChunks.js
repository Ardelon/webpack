import lodash from 'lodash'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/splitChunks.js');
	console.log('This is ./src/splitChunks.js');
  document.body.append(h1)
  console.log('splitChunks');
  console.log(lodash);
})();