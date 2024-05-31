// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getChainLinkLatestAnswer() public view returns(uint256) {
        AggregatorV3Interface dataFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);

        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return uint256(answer);
    }
    
    function getConvertionRate(uint256 usdAmount) internal view returns(uint256) {
        uint256 ethPrice = getChainLinkLatestAnswer();
        uint256 usdAmountinEth = ((usdAmount*1e8)/ethPrice);
        return usdAmountinEth;
    }
}