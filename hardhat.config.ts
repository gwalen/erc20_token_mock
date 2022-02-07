/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 import { HardhatUserConfig } from "hardhat/types";

 import "@nomiclabs/hardhat-waffle";
 import "hardhat-typechain";

 const ALCHEMY_API_KEY = "YVztU0AbnI4KjkpCtLZNOD4KyP03_psx"
 const ACCOUNT_PRIVATE_KEY = "d712750fc2c697e42a2be76f46a565acc55de68cde14e9ed6e23444a980635b3"
 
 const config: HardhatUserConfig = {
     defaultNetwork: "hardhat",
     solidity: {
         compilers: [{ version: "0.8.9", settings: {} }],
       },
     networks: {
       hardhat: {},
       rinkeby: {
         url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
         accounts: [ACCOUNT_PRIVATE_KEY],
       },
      //  kovan: {
      //    url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      //    accounts: [ACCOUNT_PRIVATE_KEY]
      //  }
     },  
 };
 export default config;
 
 
 
 
