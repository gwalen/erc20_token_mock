async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const daiTokenFactory = await ethers.getContractFactory("DAI");
    const daiToken = await daiTokenFactory.deploy("100000000000000000000000"); // when using number here there is error with BigNumber.from overflow // 18 decimals
    const daiTokenBalance = await daiToken.balanceOf(deployer.address);
    console.log(`DAI contract address: ${daiToken.address}, supply: ${daiTokenBalance}`);

    const usdcTokenFactory = await ethers.getContractFactory("USDC");
    const usdcToken = await usdcTokenFactory.deploy("100000000000");  // 6 decimals
    const usdcTokenBalance = await usdcToken.balanceOf(deployer.address);
    console.log(`USDC contract address: ${usdcToken.address}, supply: ${usdcTokenBalance}`);

    const usdtTokenFactory = await ethers.getContractFactory("USDT");
    const usdtToken = await usdtTokenFactory.deploy("100000000000");  // 6 decimals
    const usdtTokenBalance = await usdtToken.balanceOf(deployer.address);
    console.log(`USDT contract address: ${usdtToken.address}, supply: ${usdtTokenBalance}`);

    const sbUsdTokenFactory = await ethers.getContractFactory("SBUSD");
    const sbUsdToken = await sbUsdTokenFactory.deploy("100000000000000000000000"); // 18 decimals
    const sbUsdTokenBalance = await sbUsdToken.balanceOf(deployer.address);
    console.log(`sbUsd contract address: ${sbUsdToken.address}, supply: ${sbUsdTokenBalance}`);

    // const gwUsdTokenFactory = await ethers.getContractFactory("GWUSD");
    // const gwUsdToken = await gwUsdTokenFactory.deploy("100000000000000000000000"); // 18 decimals
    // const gwUsdTokenBalance = await gwUsdToken.balanceOf(deployer.address);
    // console.log(`gwUsd contract address: ${gwUsdToken.address}, supply: ${gwUsdTokenBalance}`);

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });