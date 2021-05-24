require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove dash stereo mixture harvest case furnace genuine'; 
let testAccounts = [
"0xe447769c5031cbf1df164ec4242fe334de466628353a70e6daf0992dd1238309",
"0xf8c06671b1e4ed7c7b0fd84170e7e913fe40d4c60d4c878a72b6c1096fb65daf",
"0xb73d0d6d5c9b58a4c33609d526ad9fc2939b7d45a6ce80fbb3b473c94cce0613",
"0x1f333ca76f49f416746d47c2fc13103417d1f0c653f4f84292bc34562b56017c",
"0xe9a0fb33d581d7495ccd4838f2bf785f6f2ec297c8cdd9aaaa17a34fcd5f7cd8",
"0x8bda3c6b869afec6f10bf0a370b0421abd2a7f60d9b059b01e3d67db710478ce",
"0xd06537cb3053c5db8371c7028e87ab0e240410a9791834ed7ca31875d2df9a77",
"0x111067d8751dd5b88e8605c76cfea78869ea932f5fb53e2ebae3a4fed3f7aea0",
"0x7520e504e8d5b5c0e035a7985662e1f03f1509731751dadb26b62abc32c13646",
"0xc05d914fe8a5cc3a1c23c83ac334bd021d10d32ea02ae02abc406944f7a743d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
