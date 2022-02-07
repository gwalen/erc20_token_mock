# Purpose
Deploy mock tokens


## Build 
```
yearn install
yarn run compile
```

## Deploy 

### Start local network node
```
yarn hardhat node
yarn hardhat run scripts/deploy.js --network localhost
```

### rinkeby addresses

```
yarn hardhat run scripts/deploy.js --network rinkeby

Deploying contracts with the account: 0x1ff6aa202687612137c88D47369671A7654c0c56
DAI contract address: 0xF86176aF4687a9E65177913Ebe0A333D79E19fF4, supply: 100000000000000000000000
USDC contract address: 0x28D0C916Df5bDBB6636b90E25A97363d009eF7e0, supply: 100000000000
USDT contract address: 0x9BcB3F98236eE1eFB9455637Fa69E2BE27963725, supply: 100000000000
sbUsd contract address: 0xFe8cD5c88B3e0135b83d914C75dA211eCA13B1E5, supply: 100000000000000000000000
```


