import hre from "hardhat";
import { writeFileSync } from "fs";

const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  const OmniIpfsNft = await hre.ethers.getContractFactory("OmniIpfsNft");
  const nft = await OmniIpfsNft.deploy();
  await nft.deployed();
  console.log("OmniIpfsNft deployed to:", nft.address);

  const Fractionalize = await hre.ethers.getContractFactory("Fractionalize");
  const fractionalize = await Fractionalize.deploy(nft.address);
  await fractionalize.deployed();
  console.log("Fractionalize deployed to:", fractionalize.address);

  const output = {
    OmniIpfsNft: nft.address,
    Fractionalize: fractionalize.address,
  };
  writeFileSync(outputFilePath, JSON.stringify(output, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
