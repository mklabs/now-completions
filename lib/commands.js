const commands = [
  { name: 'deploy', description: 'Performs a deployment (default)' },
  { name: 'help', description: 'Displays complete help for [cmd]' },
  { name: 'list', description: 'Lists deployments' },
  { name: 'remove', description: 'Removes a deployment' },
  { name: 'alias', description: 'Configures aliases for deployments' },
  { name: 'domains', description: 'Manages your domain names' },
  { name: 'certs', description: 'Manages your SSL certificates' },
  { name: 'dns', description: 'Manages your DNS records' },
  { name: 'secrets', description: 'Manages your secret environment variables' },
  {
    name: 'billing',
    description: 'Manages your credit carts and billing methods'
  },
  { name: 'upgrade', description: 'Upgrades or downgrades your plan' },
  { name: 'teams', description: 'Manages your teams' },
  { name: 'logs', description: 'Displays the logs for a deployment' },
  { name: 'scale', description: 'Scales the instance count of a deployment' },
  { name: 'login', description: 'Logs into your account or creates a new one' },
  { name: 'logout', description: 'Logs out of your account' },
  { name: 'whoami', description: 'Displays the currently logged in username' },
  {
    name: 'inspect',
    description: 'Displays information related to a deployment'
  }
];

const aliases = {
  list: ['ls'],
  remove: ['rm'],
  alias: ['ln', 'aliases'],
  domains: ['domain'],
  certs: ['cert'],
  secrets: ['secret'],
  billing: ['cc'],
  upgrade: ['downgrade'],
  teams: ['team', 'switch'],
  logs: ['log']
};

// Add aliases to available sub commands
/* eslint-disable guard-for-in */
for (const alias in aliases) {
  const items = aliases[alias];

  for (const item of items) {
    const { description } = commands.find(cmd => cmd.name === alias);
    commands.push({ name: item, description });
  }
}

module.exports = commands;
