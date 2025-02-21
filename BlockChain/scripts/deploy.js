const hre = require("hardhat");

async function main() {
  const Ticketing = await hre.ethers.getContractFactory("Ticketing"); // Replace with your contract name
  const ticketing = await Ticketing.deploy(); 

  await ticketing.waitForDeployment(); // Use this instead of `deployed()`

  console.log("Ticketing contract deployed to:", await ticketing.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
