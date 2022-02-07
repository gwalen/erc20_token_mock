pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SBUSD is ERC20 {

    constructor(uint256 initialSupply) ERC20("sbUSD Mock", "sbUSD") {
        _mint(msg.sender, initialSupply);
    }

}

