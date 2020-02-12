const net = require('net');
const serverCredentials = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection(
    serverCredentials
  //   { 
  //   host: '172.46.0.236',
  //   port: 50541
  // }
  );
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect' ,() => {
    console.log("Successfully connected to game server")
    conn.write('Name: Ata')
    // let timer = 0
    // for(i = 0; i < 100; i++){
    // setTimeout(() => {conn.write('Move: up')}, timer)
    // timer += 100
    // }
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {connect}