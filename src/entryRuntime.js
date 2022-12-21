import lodash from 'lodash'
(() => {
  const h1 = document.createElement('h1');
  h1.innerText = ('This is ./src/entryRuntime.js');
	console.log('This is ./src/entryRuntime.js');
  document.body.append(h1)
  console.log('entryRuntime');
  console.log(lodash);
})();