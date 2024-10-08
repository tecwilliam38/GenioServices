const connection = require('./mongoConfig/index');

class Loaders{
start(){
    connection();
}
}

module.exports = new Loaders;