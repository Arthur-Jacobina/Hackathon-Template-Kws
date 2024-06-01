// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./PriceConverter.sol";

struct Funder {
    uint256 numCoffees;
    address userAddress;
}

contract BuyMeACoffee {
    using PriceConverter for uint256;
    Funder[] public funders;
    address public owner;
    uint256 public price;

    uint256 public coffee = 10e18;

    error InsufficientFunds();
    error OnlyOwner();

    event BuyMeACoffeeEvent(address buyer, uint256 value);
    event NewFunder(address userAddress, uint256 time, uint256 numCoffees);

    constructor() {
        owner = msg.sender;
        price = coffee.getConvertionRate();
    }

    function buyCoffee(uint256 numCoffees) public payable {
        if (msg.value < price * numCoffees) {
            revert InsufficientFunds();
        }
        
        emit BuyMeACoffeeEvent(msg.sender, msg.value);

        funders.push(Funder(numCoffees, msg.sender));

        emit NewFunder(msg.sender, block.timestamp, numCoffees);
    }

    function withdraw() public {
        if (msg.sender != owner) {
            revert OnlyOwner();
        }

        if (address(this).balance == 0) {
            revert InsufficientFunds();
        }

        (bool sent,) = owner.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}