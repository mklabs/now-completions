const got = require('got');
const pkg = require('../package.json');
const auth = require('./auth');

const request = url => {
  const token = auth();
  if (!token) return Promise.resolve();

  const headers = {
    'user-agent': `${pkg.name}/${pkg.version} (${pkg.homepage})`,
    Authorization: `Bearer ${token}`
  };

  return got(url, {
    baseUrl: 'https://api.zeit.co/v2',
    json: true,
    headers
  });
};

module.exports = request;
