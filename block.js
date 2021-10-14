const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, precedingHash = "", data) {
    this.index = index
    this.timestamp = new Date
    this.data = data
    this.precedingHash = precedingHash
    this.nonce = 0
    this.hash = this.computeHash()
    this.proofOfWork(5)
  }

  computeHash() {
    return SHA256(this.index + this.precedingHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString()
  }

  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++
      this.hash = this.computeHash()
    }
  }
}

module.exports = Block