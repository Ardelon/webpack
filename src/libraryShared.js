import lodash from 'lodash'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/libraryShared.js');
	console.log('This is ./src/libraryShared.js');
  document.body.append(h1)
  console.log('libraryShared');
  console.log(lodash);
})();