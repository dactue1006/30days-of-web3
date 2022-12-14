// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("The keyboards contract is deployed!", keyboardsContract.address)

  const keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
console.log("helo")
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

