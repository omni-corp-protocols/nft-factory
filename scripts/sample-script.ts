import hre from "hardhat";

async function main() {
  const OmniIpfsNft = await hre.ethers.getContractFactory("OmniIpfsNft");
  const omniIpfsNft = await OmniIpfsNft.deploy();
  await omniIpfsNft.deployed();
  console.log("OmniIpfsNft deployed to:", omniIpfsNft.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
