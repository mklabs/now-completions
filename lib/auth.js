const untilidfy = require('untildify');

/* eslint-disable import/no-dynamic-require, global-require, consistent-return, no-console */
const auth = () => {
  try {
    const authJSON = require(untilidfy('~/.now/auth.json'));
    return authJSON.credentials[0].token;
  } catch (err) {
    console.error(
      new Error(`
      Cannot load token from now auth.json file.

      Make sure to run "now login" once before using this completion.
    `)
    );
  }
};

module.exports = auth;
