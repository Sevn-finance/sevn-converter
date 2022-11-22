
 require('dotenv').config();
 const HDWalletProvider = require('@truffle/hdwallet-provider');

 const privateKey = process.env.SECRET_KEY;
 const infura = process.env.INFURA_KEY;
 const TEST_ETHERSCAN = process.env.TEST_ETHERSCAN;

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider([privateKey], `https://ropsten.infura.io/v3/${infura}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "97",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",   
      docker: false,  
      settings: {          
        optimizer: {
          enabled: true,
          runs: 9999999
        },
        evmVersion: "istanbul"
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: TEST_ETHERSCAN
  },
};
