const tabtab = require('tabtab');

const commands = require('./commands');
const options = require('./options');
const subcommands = require('./subcommands');

const completion = async env => {
  /* eslint-disable consistent-return */
  if (!env.complete) return;

  const subcmd = subcommands[env.prev];

  if (!subcmd) {
    return tabtab.log([...commands, ...options]);
  }

  // We have a completion handler for this previous word, simply execute
  await subcmd(env);
};

module.exports = completion;
