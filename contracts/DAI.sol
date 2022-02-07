pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DAI is ERC20 {

    //TODO: should what is a total supply
    constructor(uint256 initialSupply) ERC20("DAI Mock", "DAI") {
        _mint(msg.sender, initialSupply);
    }

}

