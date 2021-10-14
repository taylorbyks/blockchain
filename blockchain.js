const Block = require('./block')

class Blockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.index = 0
  }

  startGenesisBlock() {
    return new Block(this.index, "Head", "0");
  }

  obtainLatestHash() {
    return this.blockchain[this.blockchain.length - 1].hash;
  }

  addNewBlock(data) {
    this.index = this.index + 1
    var newBlock = new Block(this.index, this.obtainLatestHash(), data)

    this.blockchain.push(newBlock);
  }
}

module.exports = Blockchain