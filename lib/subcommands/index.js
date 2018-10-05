const ls = require('./ls');
const logs = require('./logs');

module.exports = {
  ls,
  list: ls,
  logs,
  log: logs,
  inspect: logs
};
