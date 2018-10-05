const request = require('./request');

const deployments = async () => {
  const { body } = await request('/now/deployments');
  return body.deployments;
};

module.exports = {
  deployments
};
