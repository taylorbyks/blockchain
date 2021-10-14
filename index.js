const Blockchain = require('./blockchain')

let blockchain = new Blockchain();

blockchain.addNewBlock({ sender: "Taylor Schinvelski", recipient: "Joe Doe", quantity: 50 });
blockchain.addNewBlock({ sender: "Joe Doe", recipient: "Taylor Schinvelski", quantity: 100 });

console.log(JSON.stringify(blockchain, null, 4));
