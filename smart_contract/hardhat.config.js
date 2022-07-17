require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/3XY0X7WRWEtWuA79HJtmaKbcl2ljlE8h",
      accounts: [
        "f12c5116ff96e95ddea051dfdf431a8e7563d1feb8271d4b1092c4c5c4f3cde4",
      ],
    },
  },
};
