import Promise from 'bluebird';

/**
 * Copies static files to (build) folder.
 */
async function copy() {
  const ncp = Promise.promisify(require('ncp'));

  console.log('got here copy..');
  await Promise.all([
    ncp('src/index.html', 'build/index.html'),
  ]);
}

export default copy;
