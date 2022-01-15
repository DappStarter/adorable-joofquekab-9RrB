require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember evil hunt crime front slam'; 
let testAccounts = [
"0x4cc53a4f77c21943cda56436defa8663a8bee4f60f6a785df0e90242bcea597a",
"0x88f2962e4cb9726737cf4dcfc1f723ab3acc13fb4c47da99aa0d6feda4643100",
"0x449b29620b8b2e87d5178e9432a341c128a4830eba6d42c26527f1cb744e0fbb",
"0x71063909ca31a80b8223e77353ab5ef71714d4a28adbb4c90a99b881121fb0d2",
"0x2ace99e890884ba6a63b2a665a50c9f7ade3a41d39fd47c5ee5341e919db2f8e",
"0x8aceaa7de996fa37c5227e48af947ddbe25b64a927f1bbaf63be7445d696afe1",
"0x314583976f0ccca0ccf8dc103c9f144fce0354f79a577917d409b5a5395335e8",
"0x4e47eff5158eb6acbf741955b02818ffad5bae9e877b2f95951f8c75f07c5a02",
"0xb3d685a4796ffb99e482865f685ded50bd3e3172aeb9ed64e31f0053a7337796",
"0x353cf04f382562a8b0d6cb5be99fa72ac648711914bd687750cdf09dac8127ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


