// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RewardPool {

    mapping(address => uint256)
    public rewards;

    function distributeReward(
        address player,
        uint256 amount
    )
        external
    {
        rewards[player] += amount;
    }

    function claim()
        external
    {
        uint256 reward = rewards[msg.sender];

        require(
            reward > 0,
            "No rewards"
        );

        rewards[msg.sender] = 0;
    }
}
