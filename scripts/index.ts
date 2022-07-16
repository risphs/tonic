#! /usr/bin/env node
const setup = require('./jsonManager');
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 === 'setup') {
    setup.generateFiles();
} else if (arg1 === 'run') {

} else if(arg1 === 'install') {

} else if(arg1 === 'uninstall') {

} else if(arg1 === 'publish') {

} else if(arg1 === 'help') {
    console.log('All commands:\n\n      help, install, publish, run, setup, uninstall, version');
} else if(arg1 === 'version') {
    
} else { 
    console.log('Invalid command, use `npx tonic help` for more info');
}