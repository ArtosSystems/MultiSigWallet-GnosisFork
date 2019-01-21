var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "FILL ME IN";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d95110bff16340629368ccd5faaa8c37")
      },
      network_id: 4,
      gas: 4000000, // See https://www.rinkeby.io/#stats to make sure this is not over the network limit
      gasPrice: 10e9  // 10 GWEi
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/d95110bff16340629368ccd5faaa8c37")
      },
      network_id: 1,
      gas: 4000000, // See https://www.rinkeby.io/#stats to make sure this is not over the network limit
      gasPrice: 3e9  // 3 GWEi
    }
  }
};
