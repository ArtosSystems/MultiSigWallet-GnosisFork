const MultisigWallet = artifacts.require('MultiSigWallet.sol')

module.exports = deployer => {
  deployer.deploy(MultisigWallet, ["0xFc3e8F2Ed7E1a4233b4C1dDeeABF2bf79D1A8445", "0x662cb73d914df9d43f7e5d1f7643665920706b74"], 2);
}
