// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

interface ISevnFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function swapFee() external view returns (uint32);
    function devFee() external view returns (uint32);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
    function switchIndividualFee(address _pair, bool _enable) external;
    function setIndividualSwapFee(address _pair, uint256 _swapFee) external;
    function setIndividualDevFee(address _pair, uint256 _devFee) external;
}
