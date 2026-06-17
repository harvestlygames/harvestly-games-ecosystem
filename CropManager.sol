// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CropManager {

    struct Crop {
        string name;
        uint256 plantedAt;
        uint256 reward;
    }

    mapping(address => Crop[]) public crops;

    function plantCrop(
        string memory cropName,
        uint256 reward
    ) external {

        crops[msg.sender].push(
            Crop(
                cropName,
                block.timestamp,
                reward
            )
        );
    }

    function getCropCount(
        address farmer
    )
        external
        view
        returns(uint256)
    {
        return crops[farmer].length;
    }
}
