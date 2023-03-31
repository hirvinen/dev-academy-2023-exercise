const dotenv = require('dotenv');
// For some reason trying to invoke nextDev() from 'next/dist/cli/next-dev'
// doesn't work, even though others report success with it.
// So, let's try invoking `next` as a child process...
const { spawn } = require('node:child_process');

const projectRoot = process.cwd() + '/../../';

// Get the .env file from the root of the project.
dotenv.config({ path: projectRoot + '.env' });

// Get next binary path and default args.
const nextPath = projectRoot + 'node_modules/.bin/next';
const FRONTEND_PORT = process.env.FRONTEND_PORT || '4000';
const FRONTEND_HOST = process.env.FRONTEND_HOST || 'localhost';
const nextArgs = [
  'dev',
  '-p',
  FRONTEND_PORT,
  '-H',
  FRONTEND_HOST,
];

// Spawn next process.
const next = spawn(nextPath, nextArgs);

// Log output from next process.
next.stdout.on('data', (data) => {
  if (typeof data === 'string') {
    console.log(data);
  } else {
    console.log(data.toString());
  }
});

// Log errors from next process.
next.stderr.on('data', (data) => {
  if (typeof data === 'string') {
    console.error(data);
  } else {
    console.error(data.toString());
  }
});
