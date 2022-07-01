import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  // const acdmTokenFactory = await ethers.getContractFactory('ACDMToken');
  // const acdmToken = await acdmTokenFactory.deploy();

  // const topTokenFactory = await ethers.getContractFactory('TopToken');
  // const topToken = await topTokenFactory.deploy();

  // const stakingFactory = await ethers.getContractFactory('Staking');
  // const staking = await stakingFactory.deploy(process.env.TOP_TOKEN, process.env.LP_TOKEN);
  // init dao for staking contract - done

  // const daoFactory = await ethers.getContractFactory('Dao');
  // const dao = await daoFactory.deploy(process.env.OWNER_ADDRESS, process.env.LP_TOKEN, process.env.STAKING_CONTRACT, process.env.MINIMUM_QUORUM, process.env.DEBATING_DURATION);

  const acdmPlatformFactory = await ethers.getContractFactory('ACDMPlatform');
  const acdmPlatform = await acdmPlatformFactory.deploy(process.env.ACDM_TOKEN, process.env.TOP_TOKEN, process.env.DAO_CONTRACT, process.env.ROUND_DURATION);

  // console.log('Staking address:', staking.address);
  // console.log('Dao address:', dao.address);
  // console.log('ACDM token address:', acdmToken.address);
  // console.log('Top token address:', topToken.address);
  console.log('ACDM platform address:', acdmPlatform.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
