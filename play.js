const {connect} = require('./client')
console.log('Connecting ...');

const {setupInput} = require('./input')



setupInput(connect());

