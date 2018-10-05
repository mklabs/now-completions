#!/usr/bin/env node
process.env.DEBUG = process.env.DEBUG || 'now-completions*';

const tabtab = require('tabtab');
const opts = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'version']
});

const completion = require('../lib/completion');

const args = opts._;
const run = async () => {
  const cmd = args[0];

  if (opts.help || opts.h) {
    return console.log(`
    now-completions [options] <command>

    Commands:

      install-completions | install      Enables the completion on user system
    `);
  }

  // Write your CLI there

  // Here we install for the program `tabtab-test` (this file), with
  // completer being the same program. Sometimes, you want to complete
  // another program that's where the `completer` option might come handy.
  if (cmd === 'install-completion' || cmd === 'install') {
    await tabtab.install({
      name: 'now',
      completer: 'now-completions'
    });
    return;
  }

  // The completion command is added automatically by tabtab when the program
  // is completed.
  if (cmd === 'completion') {
    const env = tabtab.parseEnv(process.env);
    return completion(env);
  }
};

run();
