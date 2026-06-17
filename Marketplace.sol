// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Marketplace {

    struct Listing {
        uint256 id;
        string item;
        uint256 price;
        address seller;
    }

    Listing[] public listings;

    function listItem(
        string memory item,
        uint256 price
    )
        external
    {
        listings.push(
            Listing(
                listings.length,
                item,
                price,
                msg.sender
            )
        );
    }
}
