const tabtab = require('tabtab');
const { deployments } = require('../api');

const ls = async env => {
  const names = (await deployments()).map(d => d.name);
  tabtab.log(names);
};

module.exports = ls;
