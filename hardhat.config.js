// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});

const { NODE_API_URL, PRIVATE_KEY, API_KEY } = process.env
console.log({ NODE_API_URL, PRIVATE_KEY, API_KEY})
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: NODE_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
