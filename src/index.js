import lodash from 'lodash'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/index.js');
	console.log('This is ./src/index.js');
  console.log(lodash);
  document.body.append(h1)
})();
