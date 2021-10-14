const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, precedingHash = "", data) {
    this.index = index;
    this.timestamp = new Date;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block