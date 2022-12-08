import lodash from 'lodash'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/libraryDepend.js');
	console.log('This is ./src/libraryDepend.js');
  document.body.append(h1)
  console.log('libraryDepend');
  console.log(lodash);
})();