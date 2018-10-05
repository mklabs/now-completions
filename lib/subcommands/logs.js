const tabtab = require('tabtab');
const { deployments } = require('../api');

const logs = async env => {
  if (env.prev === 'logs' || env.prev === 'log') {
    if (env.last === '-') {
      return tabtab.log([
        '-h',
        '-a',
        '-A',
        '-Q',
        '-d',
        '-f',
        '-n',
        '-q',
        '-t',
        '-T',
        '-o'
      ]);
    } else if (env.last === '--') {
      return tabtab.log([
        '--help',
        '--all',
        '--local-config=',
        '--global-config=',
        '--debug',
        '--follow',
        '--query=',
        '--token=',
        '--since=',
        '--until=',
        '--team',
        '--output='
      ]);
    }
  } else if (env.prev === 'inspect') {
    if (env.last === '-' || env.last === '--') {
      return tabtab.log([
        '-h',
        '--help',
        '-A',
        '--local-config=',
        '-Q',
        '--global-config=',
        '-d',
        '--debug',
        '-T',
        '--team'
      ]);
    }
  }

  const urls = (await deployments()).map(d => d.url);
  tabtab.log(urls);
};

module.exports = logs;
