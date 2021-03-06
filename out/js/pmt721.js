const pmt721 = {
  "contractName": "PMT721",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "exits",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        }
      ],
      "name": "setMinter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMinter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getCurrentID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"exits\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentID\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMinter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"minter\",\"type\":\"address\"}],\"name\":\"setMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/xiangzhengfeng/Desktop/mine/project/pixels-metavers/contracts/PMT721.sol\":\"PMT721\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xiangzhengfeng/Desktop/mine/project/pixels-metavers/contracts/PMT721.sol\":{\"keccak256\":\"0x08da5e5987799e8da3cbfc875b709414d3489e90b5e9314e24b08437dd42f0d3\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://451063e6892da10bfdadb39eb73536c4a66aedc2522478cb899b04aa83313f17\",\"dweb:/ipfs/QmRXTXwPCC715LB5SwPvmLAsZwXTXzgRve9cewgqMyZXjF\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x7d2b8ba4b256bfcac347991b75242f9bc37f499c5236af50cf09d0b35943dc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d8eeaf6afe00229af4c232ca058bb08b7a24cc3886f0b387159ac49ffd8b5312\",\"dweb:/ipfs/QmdnVKmDDWDvdRr6vtrxy3G6WafqA2TAhUZv1UFMsm4B4r\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf101e8720213560fab41104d53b3cc7ba0456ef3a98455aa7f022391783144a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e7820bcf567e6892d937c3cb10db263a4042e446799bca602535868d822384e\",\"dweb:/ipfs/QmPG2oeDjKncqsEeyYGjAN7CwAJmMgHterXGGnpzhha4z7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xd9517254724276e2e8de3769183c1f738f445f0095c26fd9b86d3c6687e887b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e604bcdcd5e5b2fb299ad09769cde6db19d5aa1929d1b5e939234a0f10d7eb8\",\"dweb:/ipfs/Qmd8hXE3GZfBHuWx3RNiYgFW2ci7KvHtib8DiwzJ2dgo9V\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xd32fb7f530a914b1083d10a6bed3a586f2451952fec04fe542bcc670a82f7ba5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af63ab940a34687c45f0ad84960b048fc5f49330c92ccb422db7822a444733b9\",\"dweb:/ipfs/QmUShaQEu8HS1GjDnsMJQ8jkZEBrecn6NuDZ3pfjY1gVck\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x3336baae5cf23e94274d75336e2d412193be508504aee185e61dc7d58cd05c8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://39a05eec7083dfa0cc7e0cbfe6cd1bd085a340af1ede93fdff3ad047c5fb3d8e\",\"dweb:/ipfs/QmVApz5fCUq2QC8gKTsNNdCmcedJ3ETHp68zR5N3WUKS4r\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26e8b38a7ac8e7b4463af00cf7fff1bf48ae9875765bf4f7751e100124d0bc8c\",\"dweb:/ipfs/QmWcsmkVr24xmmjfnBQZoemFniXjj3vwT78Cz6uqZW1Hux\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x78450f4e3b722cce467b21e285f72ce5eaf361e9ba9dd2241a413926246773cd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f103065051300cd995fd4599ba91188d4071b92175b52f26110e02db091617c0\",\"dweb:/ipfs/QmSyDz67R2HCypDE8Pacn3voVwxw9x17NM66q47YgBnGqc\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x391d3ba97ab6856a16b225d6ee29617ad15ff00db70f3b4df1ab5ea33aa47c9d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d636ba90bbbeed04a1ea7fe9ec2466757e30fd38ba2ca173636dbf69a518735e\",\"dweb:/ipfs/QmQwCB2BHnEuYR22PYt9HkpbgeFDhq4rHmaYqAZbX3WRC7\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x5718c5df9bd67ac68a796961df938821bb5dc0cd4c6118d77e9145afb187409b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d10e1d9b26042424789246603906ad06143bf9a928f4e99de8b5e3bdc662f549\",\"dweb:/ipfs/Qmejonoaj5MLekPus229rJQHcC6E9dz2xorjHJR84fMfmn\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020017f506978656c734d657461766572730000000000000000000000000000000000008152506040518060400160405280600381526020017f504d540000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000f9565b508060019080519060200190620000af929190620000f9565b50505033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200020e565b8280546200010790620001a9565b90600052602060002090601f0160209004810192826200012b576000855562000177565b82601f106200014657805160ff191683800117855562000177565b8280016001018555821562000177579182015b828111156200017657825182559160200191906001019062000159565b5b5090506200018691906200018a565b5090565b5b80821115620001a55760008160009055506001016200018b565b5090565b60006002820490506001821680620001c257607f821691505b60208210811415620001d957620001d8620001df565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612914806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063c87b56dd11610071578063c87b56dd146102dd578063e985e9c51461030d578063ef1e7df31461033d578063f36675171461035b578063fca3b5aa1461037957610116565b806370a082311461025757806395d89b4114610287578063a22cb465146102a5578063b88d4fde146102c157610116565b80631249c58b116100e95780631249c58b146101b557806323b872dd146101bf578063342de179146101db57806342842e0e1461020b5780636352211e1461022757610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611b24565b610395565b604051610142919061229c565b60405180910390f35b610153610477565b60405161016091906122b7565b60405180910390f35b610183600480360381019061017e9190611b76565b610509565b6040516101909190612235565b60405180910390f35b6101b360048036038101906101ae9190611ae8565b61058e565b005b6101bd6106a6565b005b6101d960048036038101906101d491906119e2565b61075d565b005b6101f560048036038101906101f09190611b76565b6107bd565b604051610202919061229c565b60405180910390f35b610225600480360381019061022091906119e2565b6107cf565b005b610241600480360381019061023c9190611b76565b6107ef565b60405161024e9190612235565b60405180910390f35b610271600480360381019061026c919061197d565b6108a1565b60405161027e91906124d9565b60405180910390f35b61028f610959565b60405161029c91906122b7565b60405180910390f35b6102bf60048036038101906102ba9190611aac565b6109eb565b005b6102db60048036038101906102d69190611a31565b610b6c565b005b6102f760048036038101906102f29190611b76565b610bce565b60405161030491906122b7565b60405180910390f35b610327600480360381019061032291906119a6565b610c75565b604051610334919061229c565b60405180910390f35b610345610d09565b60405161035291906124d9565b60405180910390f35b610363610d1a565b6040516103709190612235565b60405180910390f35b610393600480360381019061038e919061197d565b610d44565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610470575061046f82610e1a565b5b9050919050565b60606000805461048690612709565b80601f01602080910402602001604051908101604052809291908181526020018280546104b290612709565b80156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b5050505050905090565b600061051482610e84565b610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a90612419565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610599826107ef565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060190612499565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610629610ef0565b73ffffffffffffffffffffffffffffffffffffffff161480610658575061065781610652610ef0565b610c75565b5b610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068e90612399565b60405180910390fd5b6106a18383610ef8565b505050565b33600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072e906122f9565b60405180910390fd5b6107416006610fb1565b600061074d6006610fc7565b90506107593382610fd5565b5050565b61076e610768610ef0565b826111a3565b6107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906124b9565b60405180910390fd5b6107b8838383611281565b505050565b60006107c882610e84565b9050919050565b6107ea83838360405180602001604052806000815250610b6c565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f906123d9565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610912576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610909906123b9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461096890612709565b80601f016020809104026020016040519081016040528092919081815260200182805461099490612709565b80156109e15780601f106109b6576101008083540402835291602001916109e1565b820191906000526020600020905b8154815290600101906020018083116109c457829003601f168201915b5050505050905090565b6109f3610ef0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5890612359565b60405180910390fd5b8060056000610a6e610ef0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610b1b610ef0565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b60919061229c565b60405180910390a35050565b610b7d610b77610ef0565b836111a3565b610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb3906124b9565b60405180910390fd5b610bc8848484846114dd565b50505050565b6060610bd982610e84565b610c18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f90612459565b60405180910390fd5b6000610c22611539565b90506000815111610c425760405180602001604052806000815250610c6d565b80610c4c84611550565b604051602001610c5d929190612211565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610d156006610fc7565b905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90612479565b60405180910390fd5b81600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f6b836107ef565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611045576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103c906123f9565b60405180910390fd5b61104e81610e84565b1561108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108590612319565b60405180910390fd5b61109a600083836116fd565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110ea9190612598565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006111ae82610e84565b6111ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e490612379565b60405180910390fd5b60006111f8836107ef565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061126757508373ffffffffffffffffffffffffffffffffffffffff1661124f84610509565b73ffffffffffffffffffffffffffffffffffffffff16145b8061127857506112778185610c75565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112a1826107ef565b73ffffffffffffffffffffffffffffffffffffffff16146112f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ee90612439565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135e90612339565b60405180910390fd5b6113728383836116fd565b61137d600082610ef8565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113cd919061261f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114249190612598565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6114e8848484611281565b6114f484848484611702565b611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152a906122d9565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611598576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116f8565b600082905060005b600082146115ca5780806115b39061273b565b915050600a826115c391906125ee565b91506115a0565b60008167ffffffffffffffff81111561160c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561163e5781602001600182028036833780820191505090505b5090505b600085146116f157600182611657919061261f565b9150600a856116669190612784565b60306116729190612598565b60f81b8183815181106116ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116ea91906125ee565b9450611642565b8093505050505b919050565b505050565b60006117238473ffffffffffffffffffffffffffffffffffffffff16611899565b1561188c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261174c610ef0565b8786866040518563ffffffff1660e01b815260040161176e9493929190612250565b602060405180830381600087803b15801561178857600080fd5b505af19250505080156117b957506040513d601f19601f820116820180604052508101906117b69190611b4d565b60015b61183c573d80600081146117e9576040519150601f19603f3d011682016040523d82523d6000602084013e6117ee565b606091505b50600081511415611834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182b906122d9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611891565b600190505b949350505050565b600080823b905060008111915050919050565b60006118bf6118ba84612525565b6124f4565b9050828152602081018484840111156118d757600080fd5b6118e28482856126c7565b509392505050565b6000813590506118f981612882565b92915050565b60008135905061190e81612899565b92915050565b600081359050611923816128b0565b92915050565b600081519050611938816128b0565b92915050565b600082601f83011261194f57600080fd5b813561195f8482602086016118ac565b91505092915050565b600081359050611977816128c7565b92915050565b60006020828403121561198f57600080fd5b600061199d848285016118ea565b91505092915050565b600080604083850312156119b957600080fd5b60006119c7858286016118ea565b92505060206119d8858286016118ea565b9150509250929050565b6000806000606084860312156119f757600080fd5b6000611a05868287016118ea565b9350506020611a16868287016118ea565b9250506040611a2786828701611968565b9150509250925092565b60008060008060808587031215611a4757600080fd5b6000611a55878288016118ea565b9450506020611a66878288016118ea565b9350506040611a7787828801611968565b925050606085013567ffffffffffffffff811115611a9457600080fd5b611aa08782880161193e565b91505092959194509250565b60008060408385031215611abf57600080fd5b6000611acd858286016118ea565b9250506020611ade858286016118ff565b9150509250929050565b60008060408385031215611afb57600080fd5b6000611b09858286016118ea565b9250506020611b1a85828601611968565b9150509250929050565b600060208284031215611b3657600080fd5b6000611b4484828501611914565b91505092915050565b600060208284031215611b5f57600080fd5b6000611b6d84828501611929565b91505092915050565b600060208284031215611b8857600080fd5b6000611b9684828501611968565b91505092915050565b611ba881612653565b82525050565b611bb781612665565b82525050565b6000611bc882612555565b611bd2818561256b565b9350611be28185602086016126d6565b611beb81612871565b840191505092915050565b6000611c0182612560565b611c0b818561257c565b9350611c1b8185602086016126d6565b611c2481612871565b840191505092915050565b6000611c3a82612560565b611c44818561258d565b9350611c548185602086016126d6565b80840191505092915050565b6000611c6d60328361257c565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b6000611cd360168361257c565b91507f4f6e6c79204d696e7465722043616e20446f20497421000000000000000000006000830152602082019050919050565b6000611d13601c8361257c565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000611d5360248361257c565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611db960198361257c565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000611df9602c8361257c565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000611e5f60388361257c565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b6000611ec5602a8361257c565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f2b60298361257c565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f9160208361257c565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000611fd1602c8361257c565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b600061203760298361257c565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061209d602f8361257c565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b600061210360158361257c565b91507f4f6e6c79204f776e65722043616e20446f2049742100000000000000000000006000830152602082019050919050565b600061214360218361257c565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006121a960318361257c565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b61220b816126bd565b82525050565b600061221d8285611c2f565b91506122298284611c2f565b91508190509392505050565b600060208201905061224a6000830184611b9f565b92915050565b60006080820190506122656000830187611b9f565b6122726020830186611b9f565b61227f6040830185612202565b81810360608301526122918184611bbd565b905095945050505050565b60006020820190506122b16000830184611bae565b92915050565b600060208201905081810360008301526122d18184611bf6565b905092915050565b600060208201905081810360008301526122f281611c60565b9050919050565b6000602082019050818103600083015261231281611cc6565b9050919050565b6000602082019050818103600083015261233281611d06565b9050919050565b6000602082019050818103600083015261235281611d46565b9050919050565b6000602082019050818103600083015261237281611dac565b9050919050565b6000602082019050818103600083015261239281611dec565b9050919050565b600060208201905081810360008301526123b281611e52565b9050919050565b600060208201905081810360008301526123d281611eb8565b9050919050565b600060208201905081810360008301526123f281611f1e565b9050919050565b6000602082019050818103600083015261241281611f84565b9050919050565b6000602082019050818103600083015261243281611fc4565b9050919050565b600060208201905081810360008301526124528161202a565b9050919050565b6000602082019050818103600083015261247281612090565b9050919050565b60006020820190508181036000830152612492816120f6565b9050919050565b600060208201905081810360008301526124b281612136565b9050919050565b600060208201905081810360008301526124d28161219c565b9050919050565b60006020820190506124ee6000830184612202565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561251b5761251a612842565b5b8060405250919050565b600067ffffffffffffffff8211156125405761253f612842565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125a3826126bd565b91506125ae836126bd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125e3576125e26127b5565b5b828201905092915050565b60006125f9826126bd565b9150612604836126bd565b925082612614576126136127e4565b5b828204905092915050565b600061262a826126bd565b9150612635836126bd565b925082821015612648576126476127b5565b5b828203905092915050565b600061265e8261269d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156126f45780820151818401526020810190506126d9565b83811115612703576000848401525b50505050565b6000600282049050600182168061272157607f821691505b6020821081141561273557612734612813565b5b50919050565b6000612746826126bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612779576127786127b5565b5b600182019050919050565b600061278f826126bd565b915061279a836126bd565b9250826127aa576127a96127e4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61288b81612653565b811461289657600080fd5b50565b6128a281612665565b81146128ad57600080fd5b50565b6128b981612671565b81146128c457600080fd5b50565b6128d0816126bd565b81146128db57600080fd5b5056fea26469706673582212204ee4823e8a224245bc5d309fbccb40a86313f03f266ac2e0c88c7364e724b54564736f6c63430008000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063c87b56dd11610071578063c87b56dd146102dd578063e985e9c51461030d578063ef1e7df31461033d578063f36675171461035b578063fca3b5aa1461037957610116565b806370a082311461025757806395d89b4114610287578063a22cb465146102a5578063b88d4fde146102c157610116565b80631249c58b116100e95780631249c58b146101b557806323b872dd146101bf578063342de179146101db57806342842e0e1461020b5780636352211e1461022757610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611b24565b610395565b604051610142919061229c565b60405180910390f35b610153610477565b60405161016091906122b7565b60405180910390f35b610183600480360381019061017e9190611b76565b610509565b6040516101909190612235565b60405180910390f35b6101b360048036038101906101ae9190611ae8565b61058e565b005b6101bd6106a6565b005b6101d960048036038101906101d491906119e2565b61075d565b005b6101f560048036038101906101f09190611b76565b6107bd565b604051610202919061229c565b60405180910390f35b610225600480360381019061022091906119e2565b6107cf565b005b610241600480360381019061023c9190611b76565b6107ef565b60405161024e9190612235565b60405180910390f35b610271600480360381019061026c919061197d565b6108a1565b60405161027e91906124d9565b60405180910390f35b61028f610959565b60405161029c91906122b7565b60405180910390f35b6102bf60048036038101906102ba9190611aac565b6109eb565b005b6102db60048036038101906102d69190611a31565b610b6c565b005b6102f760048036038101906102f29190611b76565b610bce565b60405161030491906122b7565b60405180910390f35b610327600480360381019061032291906119a6565b610c75565b604051610334919061229c565b60405180910390f35b610345610d09565b60405161035291906124d9565b60405180910390f35b610363610d1a565b6040516103709190612235565b60405180910390f35b610393600480360381019061038e919061197d565b610d44565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610470575061046f82610e1a565b5b9050919050565b60606000805461048690612709565b80601f01602080910402602001604051908101604052809291908181526020018280546104b290612709565b80156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b5050505050905090565b600061051482610e84565b610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a90612419565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610599826107ef565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060190612499565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610629610ef0565b73ffffffffffffffffffffffffffffffffffffffff161480610658575061065781610652610ef0565b610c75565b5b610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068e90612399565b60405180910390fd5b6106a18383610ef8565b505050565b33600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072e906122f9565b60405180910390fd5b6107416006610fb1565b600061074d6006610fc7565b90506107593382610fd5565b5050565b61076e610768610ef0565b826111a3565b6107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906124b9565b60405180910390fd5b6107b8838383611281565b505050565b60006107c882610e84565b9050919050565b6107ea83838360405180602001604052806000815250610b6c565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f906123d9565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610912576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610909906123b9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461096890612709565b80601f016020809104026020016040519081016040528092919081815260200182805461099490612709565b80156109e15780601f106109b6576101008083540402835291602001916109e1565b820191906000526020600020905b8154815290600101906020018083116109c457829003601f168201915b5050505050905090565b6109f3610ef0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5890612359565b60405180910390fd5b8060056000610a6e610ef0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610b1b610ef0565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b60919061229c565b60405180910390a35050565b610b7d610b77610ef0565b836111a3565b610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb3906124b9565b60405180910390fd5b610bc8848484846114dd565b50505050565b6060610bd982610e84565b610c18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f90612459565b60405180910390fd5b6000610c22611539565b90506000815111610c425760405180602001604052806000815250610c6d565b80610c4c84611550565b604051602001610c5d929190612211565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610d156006610fc7565b905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90612479565b60405180910390fd5b81600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f6b836107ef565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611045576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103c906123f9565b60405180910390fd5b61104e81610e84565b1561108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108590612319565b60405180910390fd5b61109a600083836116fd565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110ea9190612598565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006111ae82610e84565b6111ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e490612379565b60405180910390fd5b60006111f8836107ef565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061126757508373ffffffffffffffffffffffffffffffffffffffff1661124f84610509565b73ffffffffffffffffffffffffffffffffffffffff16145b8061127857506112778185610c75565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112a1826107ef565b73ffffffffffffffffffffffffffffffffffffffff16146112f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ee90612439565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135e90612339565b60405180910390fd5b6113728383836116fd565b61137d600082610ef8565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113cd919061261f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114249190612598565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6114e8848484611281565b6114f484848484611702565b611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152a906122d9565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611598576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116f8565b600082905060005b600082146115ca5780806115b39061273b565b915050600a826115c391906125ee565b91506115a0565b60008167ffffffffffffffff81111561160c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561163e5781602001600182028036833780820191505090505b5090505b600085146116f157600182611657919061261f565b9150600a856116669190612784565b60306116729190612598565b60f81b8183815181106116ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116ea91906125ee565b9450611642565b8093505050505b919050565b505050565b60006117238473ffffffffffffffffffffffffffffffffffffffff16611899565b1561188c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261174c610ef0565b8786866040518563ffffffff1660e01b815260040161176e9493929190612250565b602060405180830381600087803b15801561178857600080fd5b505af19250505080156117b957506040513d601f19601f820116820180604052508101906117b69190611b4d565b60015b61183c573d80600081146117e9576040519150601f19603f3d011682016040523d82523d6000602084013e6117ee565b606091505b50600081511415611834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182b906122d9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611891565b600190505b949350505050565b600080823b905060008111915050919050565b60006118bf6118ba84612525565b6124f4565b9050828152602081018484840111156118d757600080fd5b6118e28482856126c7565b509392505050565b6000813590506118f981612882565b92915050565b60008135905061190e81612899565b92915050565b600081359050611923816128b0565b92915050565b600081519050611938816128b0565b92915050565b600082601f83011261194f57600080fd5b813561195f8482602086016118ac565b91505092915050565b600081359050611977816128c7565b92915050565b60006020828403121561198f57600080fd5b600061199d848285016118ea565b91505092915050565b600080604083850312156119b957600080fd5b60006119c7858286016118ea565b92505060206119d8858286016118ea565b9150509250929050565b6000806000606084860312156119f757600080fd5b6000611a05868287016118ea565b9350506020611a16868287016118ea565b9250506040611a2786828701611968565b9150509250925092565b60008060008060808587031215611a4757600080fd5b6000611a55878288016118ea565b9450506020611a66878288016118ea565b9350506040611a7787828801611968565b925050606085013567ffffffffffffffff811115611a9457600080fd5b611aa08782880161193e565b91505092959194509250565b60008060408385031215611abf57600080fd5b6000611acd858286016118ea565b9250506020611ade858286016118ff565b9150509250929050565b60008060408385031215611afb57600080fd5b6000611b09858286016118ea565b9250506020611b1a85828601611968565b9150509250929050565b600060208284031215611b3657600080fd5b6000611b4484828501611914565b91505092915050565b600060208284031215611b5f57600080fd5b6000611b6d84828501611929565b91505092915050565b600060208284031215611b8857600080fd5b6000611b9684828501611968565b91505092915050565b611ba881612653565b82525050565b611bb781612665565b82525050565b6000611bc882612555565b611bd2818561256b565b9350611be28185602086016126d6565b611beb81612871565b840191505092915050565b6000611c0182612560565b611c0b818561257c565b9350611c1b8185602086016126d6565b611c2481612871565b840191505092915050565b6000611c3a82612560565b611c44818561258d565b9350611c548185602086016126d6565b80840191505092915050565b6000611c6d60328361257c565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b6000611cd360168361257c565b91507f4f6e6c79204d696e7465722043616e20446f20497421000000000000000000006000830152602082019050919050565b6000611d13601c8361257c565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000611d5360248361257c565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611db960198361257c565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000611df9602c8361257c565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000611e5f60388361257c565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b6000611ec5602a8361257c565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f2b60298361257c565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f9160208361257c565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000611fd1602c8361257c565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b600061203760298361257c565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061209d602f8361257c565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b600061210360158361257c565b91507f4f6e6c79204f776e65722043616e20446f2049742100000000000000000000006000830152602082019050919050565b600061214360218361257c565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006121a960318361257c565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b61220b816126bd565b82525050565b600061221d8285611c2f565b91506122298284611c2f565b91508190509392505050565b600060208201905061224a6000830184611b9f565b92915050565b60006080820190506122656000830187611b9f565b6122726020830186611b9f565b61227f6040830185612202565b81810360608301526122918184611bbd565b905095945050505050565b60006020820190506122b16000830184611bae565b92915050565b600060208201905081810360008301526122d18184611bf6565b905092915050565b600060208201905081810360008301526122f281611c60565b9050919050565b6000602082019050818103600083015261231281611cc6565b9050919050565b6000602082019050818103600083015261233281611d06565b9050919050565b6000602082019050818103600083015261235281611d46565b9050919050565b6000602082019050818103600083015261237281611dac565b9050919050565b6000602082019050818103600083015261239281611dec565b9050919050565b600060208201905081810360008301526123b281611e52565b9050919050565b600060208201905081810360008301526123d281611eb8565b9050919050565b600060208201905081810360008301526123f281611f1e565b9050919050565b6000602082019050818103600083015261241281611f84565b9050919050565b6000602082019050818103600083015261243281611fc4565b9050919050565b600060208201905081810360008301526124528161202a565b9050919050565b6000602082019050818103600083015261247281612090565b9050919050565b60006020820190508181036000830152612492816120f6565b9050919050565b600060208201905081810360008301526124b281612136565b9050919050565b600060208201905081810360008301526124d28161219c565b9050919050565b60006020820190506124ee6000830184612202565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561251b5761251a612842565b5b8060405250919050565b600067ffffffffffffffff8211156125405761253f612842565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125a3826126bd565b91506125ae836126bd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125e3576125e26127b5565b5b828201905092915050565b60006125f9826126bd565b9150612604836126bd565b925082612614576126136127e4565b5b828204905092915050565b600061262a826126bd565b9150612635836126bd565b925082821015612648576126476127b5565b5b828203905092915050565b600061265e8261269d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156126f45780820151818401526020810190506126d9565b83811115612703576000848401525b50505050565b6000600282049050600182168061272157607f821691505b6020821081141561273557612734612813565b5b50919050565b6000612746826126bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612779576127786127b5565b5b600182019050919050565b600061278f826126bd565b915061279a836126bd565b9250826127aa576127a96127e4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61288b81612653565b811461289657600080fd5b50565b6128a281612665565b81146128ad57600080fd5b50565b6128b981612671565b81146128c457600080fd5b50565b6128d0816126bd565b81146128db57600080fd5b5056fea26469706673582212204ee4823e8a224245bc5d309fbccb40a86313f03f266ac2e0c88c7364e724b54564736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:516:14",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "58:269:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "68:22:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "82:4:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "88:1:14",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "78:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "78:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "68:6:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "99:38:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "129:4:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "135:1:14",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "125:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "125:12:14"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "103:18:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "176:51:14",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "190:27:14",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "204:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "212:4:14",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "200:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "200:17:14"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "190:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "156:18:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "149:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "149:26:14"
                  },
                  "nodeType": "YulIf",
                  "src": "146:2:14"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "279:42:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "293:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "293:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "293:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "243:18:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "266:6:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "274:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "263:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "263:14:14"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "240:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "240:38:14"
                  },
                  "nodeType": "YulIf",
                  "src": "237:2:14"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "42:4:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "51:6:14",
                "type": ""
              }
            ],
            "src": "7:320:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "361:152:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "378:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "381:77:14",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "371:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "371:88:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "371:88:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "475:1:14",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "478:4:14",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "468:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "468:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "468:15:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "499:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "502:4:14",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "492:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "492:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "492:15:14"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "333:180:14"
          }
        ]
      },
      "contents": "{\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n}\n",
      "id": 14,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:26447:14",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "90:259:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "100:73:14",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "165:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "124:40:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "124:48:14"
                      }
                    ],
                    "functionName": {
                      "name": "allocateMemory",
                      "nodeType": "YulIdentifier",
                      "src": "109:14:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "109:64:14"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "100:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "189:5:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "196:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "182:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "182:21:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "182:21:14"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "212:27:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "227:5:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "234:4:14",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "223:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "223:16:14"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "216:3:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "277:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "286:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "289:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "279:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "279:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "279:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "258:3:14"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "263:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "254:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "254:16:14"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "272:3:14"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "251:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "251:25:14"
                  },
                  "nodeType": "YulIf",
                  "src": "248:2:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "326:3:14"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "331:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "302:23:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "302:41:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "302:41:14"
                }
              ]
            },
            "name": "abi_decode_available_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "63:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "68:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "76:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "84:5:14",
                "type": ""
              }
            ],
            "src": "7:342:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "407:87:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "417:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "439:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "426:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "426:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "417:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "482:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "455:26:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "455:33:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "455:33:14"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "385:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "393:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "401:5:14",
                "type": ""
              }
            ],
            "src": "355:139:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "549:84:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "559:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "581:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "568:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "568:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "559:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "621:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "597:23:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "597:30:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "597:30:14"
                }
              ]
            },
            "name": "abi_decode_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "527:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "535:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "543:5:14",
                "type": ""
              }
            ],
            "src": "500:133:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "690:86:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "700:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "722:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "709:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "709:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "700:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "764:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "738:25:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "738:32:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "738:32:14"
                }
              ]
            },
            "name": "abi_decode_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "668:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "676:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "684:5:14",
                "type": ""
              }
            ],
            "src": "639:137:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "844:79:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "854:22:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "869:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "863:5:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "863:13:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "854:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "911:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "885:25:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "885:32:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "885:32:14"
                }
              ]
            },
            "name": "abi_decode_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "822:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "830:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "838:5:14",
                "type": ""
              }
            ],
            "src": "782:141:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1003:210:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1052:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1061:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1064:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1054:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1054:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1054:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1031:6:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1039:4:14",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1027:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1027:17:14"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1046:3:14"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1023:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1023:27:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1016:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1016:35:14"
                  },
                  "nodeType": "YulIf",
                  "src": "1013:2:14"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1077:34:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1104:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1091:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1091:20:14"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1081:6:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1120:87:14",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1180:6:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1188:4:14",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1176:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1176:17:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1195:6:14"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1203:3:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1129:46:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1129:78:14"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1120:5:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "981:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "989:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "997:5:14",
                "type": ""
              }
            ],
            "src": "942:271:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1271:87:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1281:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1303:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1290:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1290:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1281:5:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1346:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1319:26:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1319:33:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1319:33:14"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1249:6:14",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1257:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1265:5:14",
                "type": ""
              }
            ],
            "src": "1219:139:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1430:196:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1476:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1485:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1488:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1478:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1478:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1478:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1451:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1460:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1447:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1447:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1472:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1443:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1443:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "1440:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1502:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1517:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1531:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1521:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1546:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1581:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1592:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1577:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1577:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1601:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1556:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1556:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1546:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1400:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1411:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1423:6:14",
                "type": ""
              }
            ],
            "src": "1364:262:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1715:324:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1761:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1770:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1773:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1763:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1763:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1763:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1736:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1745:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1732:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1732:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1757:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1728:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1728:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "1725:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1787:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1802:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1816:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1806:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1831:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1866:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1877:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1862:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1862:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1886:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1841:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1841:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1831:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1914:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1929:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1943:2:14",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1933:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1959:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1994:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2005:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1990:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1990:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2014:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1969:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1969:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1959:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1677:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1688:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1700:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1708:6:14",
                "type": ""
              }
            ],
            "src": "1632:407:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2145:452:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2191:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2200:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2203:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2193:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2193:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2193:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2166:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2175:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2162:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2162:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2187:2:14",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2158:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2158:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "2155:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2217:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2232:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2246:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2236:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2261:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2296:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2307:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2292:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2292:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2316:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2271:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2271:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2261:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2344:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2359:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2373:2:14",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2363:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2389:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2424:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2435:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2420:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2420:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2444:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2399:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2399:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2389:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2472:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2487:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2501:2:14",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2491:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2517:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2552:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2563:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2548:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2548:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2572:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2527:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2527:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "2517:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2099:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2110:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2122:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2130:6:14",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2138:6:14",
                "type": ""
              }
            ],
            "src": "2045:552:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2729:683:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2776:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2785:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2788:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2778:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2778:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2778:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2750:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2759:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2746:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2746:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2771:3:14",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2742:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2742:33:14"
                  },
                  "nodeType": "YulIf",
                  "src": "2739:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2802:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2817:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2831:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2821:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2846:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2881:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2892:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2877:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2877:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2901:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2856:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2856:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2846:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2929:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2944:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2958:2:14",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2948:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2974:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3009:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3020:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3005:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3005:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3029:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2984:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2984:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2974:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3057:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3072:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3086:2:14",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3076:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3102:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3137:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3148:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3133:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3133:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3157:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3112:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3112:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "3102:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3185:220:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3200:46:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3231:9:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3242:2:14",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3227:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3227:18:14"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3214:12:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3214:32:14"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3204:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3293:16:14",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3302:1:14",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3305:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "3295:6:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3295:12:14"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3295:12:14"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3265:6:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3273:18:14",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3262:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3262:30:14"
                      },
                      "nodeType": "YulIf",
                      "src": "3259:2:14"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3323:72:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3367:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3378:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3363:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3363:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3387:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3333:29:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3333:62:14"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "3323:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2675:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2686:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2698:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2706:6:14",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2714:6:14",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2722:6:14",
                "type": ""
              }
            ],
            "src": "2603:809:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3498:321:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3544:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3553:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3556:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3546:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3546:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3546:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3519:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3528:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3515:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3515:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3540:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3511:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3511:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "3508:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3570:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3585:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3599:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3589:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3614:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3649:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3660:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3645:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3645:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3669:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3624:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3624:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3614:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3697:115:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3712:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3726:2:14",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3716:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3742:60:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3774:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3785:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3770:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3770:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3794:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "3752:17:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3752:50:14"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "3742:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3460:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3471:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3483:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3491:6:14",
                "type": ""
              }
            ],
            "src": "3418:401:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3908:324:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3954:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3963:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3966:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3956:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3956:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3956:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3929:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3938:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3925:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3925:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3950:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3921:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3921:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "3918:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3980:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3995:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4009:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3999:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4024:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4059:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4070:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4055:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4055:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4079:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4034:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4034:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4024:6:14"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4107:118:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4122:16:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4136:2:14",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4126:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4152:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4187:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4198:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4183:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4183:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4207:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4162:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4162:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4152:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3870:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3881:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3893:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3901:6:14",
                "type": ""
              }
            ],
            "src": "3825:407:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4303:195:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4349:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4358:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4361:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4351:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4351:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4351:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4324:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4333:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4320:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4320:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4345:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4316:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4316:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "4313:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4375:116:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4390:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4404:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4394:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4419:62:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4453:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4464:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4449:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4449:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4473:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4",
                          "nodeType": "YulIdentifier",
                          "src": "4429:19:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4429:52:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4419:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4273:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4284:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4296:6:14",
                "type": ""
              }
            ],
            "src": "4238:260:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4580:206:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4626:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4635:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4638:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4628:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4628:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4628:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4601:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4610:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4597:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4597:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4622:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4593:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4593:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "4590:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4652:127:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4667:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4681:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4671:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4696:73:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4741:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4752:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4737:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4737:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4761:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "4706:30:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4706:63:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4696:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4550:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4561:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4573:6:14",
                "type": ""
              }
            ],
            "src": "4504:282:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4858:196:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4904:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4913:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4916:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4906:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4906:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4906:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4879:7:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4888:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4875:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4875:23:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4900:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4871:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4871:32:14"
                  },
                  "nodeType": "YulIf",
                  "src": "4868:2:14"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4930:117:14",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4945:15:14",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4959:1:14",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4949:6:14",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4974:63:14",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5009:9:14"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5020:6:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5005:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5005:22:14"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5029:7:14"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4984:20:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4984:53:14"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4974:6:14"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4828:9:14",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4839:7:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4851:6:14",
                "type": ""
              }
            ],
            "src": "4792:262:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5125:53:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5142:3:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5165:5:14"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5147:17:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5147:24:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5135:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5135:37:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5135:37:14"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5113:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5120:3:14",
                "type": ""
              }
            ],
            "src": "5060:118:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5243:50:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5260:3:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5280:5:14"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "5265:14:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5265:21:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5253:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5253:34:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5253:34:14"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5231:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5238:3:14",
                "type": ""
              }
            ],
            "src": "5184:109:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5389:270:14",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5399:52:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5445:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5413:31:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5413:38:14"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5403:6:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5460:77:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5525:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5530:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5467:57:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5467:70:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5460:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5572:5:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5579:4:14",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5568:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5568:16:14"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5586:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5591:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5546:21:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5546:52:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5546:52:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5607:46:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5618:3:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5645:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "5623:21:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5623:29:14"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5614:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5614:39:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5607:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5370:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5377:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5385:3:14",
                "type": ""
              }
            ],
            "src": "5299:360:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5757:272:14",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5767:53:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5814:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5781:32:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5781:39:14"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5771:6:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5829:78:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5895:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5900:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5836:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5836:71:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5829:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5942:5:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5949:4:14",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5938:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5938:16:14"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5956:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5961:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5916:21:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5916:52:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5916:52:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5977:46:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5988:3:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6015:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "5993:21:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5993:29:14"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5984:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5984:39:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5977:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5738:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5745:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5753:3:14",
                "type": ""
              }
            ],
            "src": "5665:364:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6145:267:14",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6155:53:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6202:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "6169:32:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6169:39:14"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6159:6:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6217:96:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6301:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6306:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6224:76:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6224:89:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6217:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6348:5:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6355:4:14",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6344:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6344:16:14"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6362:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6367:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "6322:21:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6322:52:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6322:52:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6383:23:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6394:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6399:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6390:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6390:16:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6383:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6126:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6133:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6141:3:14",
                "type": ""
              }
            ],
            "src": "6035:377:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6564:236:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6574:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6640:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6645:2:14",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6581:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6581:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6574:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "6669:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6674:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6665:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6665:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6678:34:14",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6658:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6658:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6658:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "6734:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6739:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6730:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6730:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6744:20:14",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6723:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6723:42:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6723:42:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6775:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6786:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6791:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6782:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6782:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6775:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6552:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6560:3:14",
                "type": ""
              }
            ],
            "src": "6418:382:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6952:174:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6962:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7028:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7033:2:14",
                        "type": "",
                        "value": "22"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6969:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6969:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6962:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7057:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7062:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7053:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7053:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7066:24:14",
                        "type": "",
                        "value": "Only Minter Can Do It!"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7046:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7046:45:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7046:45:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7101:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7112:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7117:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7108:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7108:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7101:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6940:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6948:3:14",
                "type": ""
              }
            ],
            "src": "6806:320:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7278:180:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7288:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7354:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7359:2:14",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7295:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7295:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7288:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7383:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7388:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7379:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7379:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7392:30:14",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7372:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7372:51:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7372:51:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7433:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7444:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7449:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7440:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7440:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7433:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7266:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7274:3:14",
                "type": ""
              }
            ],
            "src": "7132:326:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7610:222:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7620:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7686:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7691:2:14",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7627:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7627:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7620:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7715:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7720:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7711:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7711:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7724:34:14",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7704:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7704:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7704:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7780:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7785:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7776:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7776:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7790:6:14",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7769:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7769:28:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7769:28:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7807:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7818:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7823:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7814:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7814:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7807:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7598:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7606:3:14",
                "type": ""
              }
            ],
            "src": "7464:368:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7984:177:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7994:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8060:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8065:2:14",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8001:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8001:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7994:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8089:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8094:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8085:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8085:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8098:27:14",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8078:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8078:48:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8078:48:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8136:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8147:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8152:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8143:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8143:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8136:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7972:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7980:3:14",
                "type": ""
              }
            ],
            "src": "7838:323:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8313:230:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8323:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8389:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8394:2:14",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8330:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8330:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8323:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8418:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8423:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8414:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8414:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8427:34:14",
                        "type": "",
                        "value": "ERC721: operator query for nonex"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8407:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8407:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8407:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8483:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8488:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8479:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8479:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8493:14:14",
                        "type": "",
                        "value": "istent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8472:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8472:36:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8472:36:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8518:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8529:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8534:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8525:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8525:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8518:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8301:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8309:3:14",
                "type": ""
              }
            ],
            "src": "8167:376:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8695:242:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8705:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8771:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8776:2:14",
                        "type": "",
                        "value": "56"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8712:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8712:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8705:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8800:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8805:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8796:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8796:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8809:34:14",
                        "type": "",
                        "value": "ERC721: approve caller is not ow"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8789:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8789:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8789:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8865:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8870:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8861:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8861:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8875:26:14",
                        "type": "",
                        "value": "ner nor approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8854:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8854:48:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8854:48:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8912:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8923:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8928:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8919:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8919:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8912:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8683:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8691:3:14",
                "type": ""
              }
            ],
            "src": "8549:388:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9089:228:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9099:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9165:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9170:2:14",
                        "type": "",
                        "value": "42"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9106:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9106:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9099:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9194:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9199:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9190:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9190:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9203:34:14",
                        "type": "",
                        "value": "ERC721: balance query for the ze"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9183:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9183:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9183:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9259:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9264:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9255:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9255:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9269:12:14",
                        "type": "",
                        "value": "ro address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9248:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9248:34:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9248:34:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9292:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9303:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9308:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9299:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9299:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9292:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9077:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9085:3:14",
                "type": ""
              }
            ],
            "src": "8943:374:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9469:227:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9479:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9545:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9550:2:14",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9486:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9486:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9479:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9574:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9579:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9570:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9570:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9583:34:14",
                        "type": "",
                        "value": "ERC721: owner query for nonexist"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9563:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9563:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9563:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9639:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9644:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9635:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9635:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9649:11:14",
                        "type": "",
                        "value": "ent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9628:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9628:33:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9628:33:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9671:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9682:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9687:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9678:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9678:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9671:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9457:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9465:3:14",
                "type": ""
              }
            ],
            "src": "9323:373:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9848:184:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9858:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9924:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9929:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9865:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9865:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9858:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9953:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9958:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9949:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9949:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9962:34:14",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9942:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9942:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9942:55:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10007:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10018:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10023:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10014:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10014:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10007:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "9836:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "9844:3:14",
                "type": ""
              }
            ],
            "src": "9702:330:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10184:230:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10194:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10260:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10265:2:14",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10201:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10201:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10194:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10289:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10294:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10285:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10285:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10298:34:14",
                        "type": "",
                        "value": "ERC721: approved query for nonex"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10278:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10278:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10278:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10354:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10359:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10350:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10350:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10364:14:14",
                        "type": "",
                        "value": "istent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10343:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10343:36:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10343:36:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10389:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10400:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10405:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10396:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10396:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10389:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10172:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10180:3:14",
                "type": ""
              }
            ],
            "src": "10038:376:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10566:227:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10576:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10642:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10647:2:14",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10583:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10583:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10576:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10671:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10676:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10667:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10667:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10680:34:14",
                        "type": "",
                        "value": "ERC721: transfer of token that i"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10660:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10660:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10660:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10736:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10741:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10732:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10732:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10746:11:14",
                        "type": "",
                        "value": "s not own"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10725:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10725:33:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10725:33:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10768:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10779:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10784:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10775:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10775:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10768:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10554:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10562:3:14",
                "type": ""
              }
            ],
            "src": "10420:373:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10945:233:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10955:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11021:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11026:2:14",
                        "type": "",
                        "value": "47"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10962:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10962:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "10955:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11050:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11055:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11046:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11046:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11059:34:14",
                        "type": "",
                        "value": "ERC721Metadata: URI query for no"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11039:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11039:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11039:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11115:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11120:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11111:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11111:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11125:17:14",
                        "type": "",
                        "value": "nexistent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11104:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11104:39:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11104:39:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11153:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11164:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11169:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11160:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11160:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11153:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10933:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10941:3:14",
                "type": ""
              }
            ],
            "src": "10799:379:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11330:173:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11340:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11406:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11411:2:14",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11347:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11347:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11340:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11435:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11440:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11431:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11431:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11444:23:14",
                        "type": "",
                        "value": "Only Owner Can Do It!"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11424:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11424:44:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11424:44:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11478:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11489:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11494:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11485:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11485:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11478:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11318:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11326:3:14",
                "type": ""
              }
            ],
            "src": "11184:319:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11655:219:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11665:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11731:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11736:2:14",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11672:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11672:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "11665:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11760:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11765:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11756:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11756:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11769:34:14",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11749:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11749:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11749:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11825:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11830:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11821:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11821:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11835:3:14",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11814:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11814:25:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11814:25:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11849:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "11860:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11865:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11856:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11856:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "11849:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "11643:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11651:3:14",
                "type": ""
              }
            ],
            "src": "11509:365:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12026:235:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12036:74:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12102:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12107:2:14",
                        "type": "",
                        "value": "49"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12043:58:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12043:67:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12036:3:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12131:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12136:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12127:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12127:11:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12140:34:14",
                        "type": "",
                        "value": "ERC721: transfer caller is not o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12120:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12120:55:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12120:55:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12196:3:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12201:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12192:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12192:12:14"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12206:19:14",
                        "type": "",
                        "value": "wner nor approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12185:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12185:41:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12185:41:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12236:19:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12247:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12252:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12243:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12243:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12236:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12014:3:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12022:3:14",
                "type": ""
              }
            ],
            "src": "11880:381:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12332:53:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12349:3:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "12372:5:14"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "12354:17:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12354:24:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12342:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12342:37:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12342:37:14"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12320:5:14",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12327:3:14",
                "type": ""
              }
            ],
            "src": "12267:118:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12575:251:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12586:102:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "12675:6:14"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12684:3:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12593:81:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12593:95:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12586:3:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12698:102:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "12787:6:14"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12796:3:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12705:81:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12705:95:14"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "12698:3:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12810:10:14",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "12817:3:14"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "12810:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12546:3:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12552:6:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12560:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "12571:3:14",
                "type": ""
              }
            ],
            "src": "12391:435:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12930:124:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12940:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12952:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12963:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12948:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12948:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12940:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13020:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13033:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13044:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13029:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13029:17:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12976:43:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12976:71:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12976:71:14"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12902:9:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12914:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12925:4:14",
                "type": ""
              }
            ],
            "src": "12832:222:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13260:440:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13270:27:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13282:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13293:3:14",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13278:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13278:19:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13270:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13351:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13364:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13375:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13360:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13360:17:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13307:43:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13307:71:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13307:71:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "13432:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13445:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13456:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13441:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13441:18:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13388:43:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13388:72:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13388:72:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "13514:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13527:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13538:2:14",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13523:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13523:18:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13470:43:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13470:72:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13470:72:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13563:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13574:2:14",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13559:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13559:18:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13583:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13589:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13579:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13579:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13552:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13552:48:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13552:48:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13609:84:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "13679:6:14"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13688:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13617:61:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13617:76:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13609:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13208:9:14",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "13220:6:14",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "13228:6:14",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "13236:6:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13244:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13255:4:14",
                "type": ""
              }
            ],
            "src": "13060:640:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13798:118:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13808:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13820:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13831:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13816:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13816:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13808:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13882:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13895:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13906:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13891:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13891:17:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13844:37:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13844:65:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13844:65:14"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13770:9:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13782:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13793:4:14",
                "type": ""
              }
            ],
            "src": "13706:210:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14040:195:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14050:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14062:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14073:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14058:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14058:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14050:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14097:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14108:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14093:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14093:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14116:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14122:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14112:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14112:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14086:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14086:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14086:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14142:86:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14214:6:14"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14223:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14150:63:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14150:78:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14142:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14012:9:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "14024:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14035:4:14",
                "type": ""
              }
            ],
            "src": "13922:313:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14412:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14422:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14434:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14445:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14430:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14430:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14422:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14469:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14480:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14465:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14465:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14488:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14494:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14484:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14484:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14458:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14458:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14458:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14514:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14648:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14522:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14522:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14514:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14392:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14407:4:14",
                "type": ""
              }
            ],
            "src": "14241:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14837:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14847:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14859:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14870:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14855:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14855:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14847:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14894:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14905:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14890:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14890:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14913:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14919:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14909:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14909:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14883:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14883:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14883:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14939:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15073:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14947:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14947:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14939:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14817:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14832:4:14",
                "type": ""
              }
            ],
            "src": "14666:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15262:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15272:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15284:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15295:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15280:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15280:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15272:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15319:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15330:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15315:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15315:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15338:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15344:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15334:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15334:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15308:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15308:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15308:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15364:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15498:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15372:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15372:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15364:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15242:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15257:4:14",
                "type": ""
              }
            ],
            "src": "15091:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15687:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15697:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15709:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15720:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15705:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15705:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15697:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15744:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15755:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15740:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15740:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15763:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15769:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15759:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15759:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15733:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15733:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15733:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15789:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15923:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15797:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15797:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15789:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15667:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15682:4:14",
                "type": ""
              }
            ],
            "src": "15516:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16112:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16122:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16134:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16145:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16130:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16130:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16122:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16169:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16180:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16165:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16165:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16188:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16194:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16184:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16184:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16158:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16158:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16158:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16214:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16348:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16222:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16222:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16214:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16092:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16107:4:14",
                "type": ""
              }
            ],
            "src": "15941:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16537:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16547:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16559:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16570:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16555:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16555:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16547:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16594:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16605:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16590:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16590:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16613:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16619:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16609:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16609:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16583:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16583:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16583:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16639:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16773:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16647:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16647:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16639:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16517:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16532:4:14",
                "type": ""
              }
            ],
            "src": "16366:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16962:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16972:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16984:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16995:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16980:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16980:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16972:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17019:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17030:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17015:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17015:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17038:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17044:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17034:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17034:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17008:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17008:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17008:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17064:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17198:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17072:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17072:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17064:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16942:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16957:4:14",
                "type": ""
              }
            ],
            "src": "16791:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17387:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17397:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17409:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17420:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17405:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17405:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17397:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17444:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17455:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17440:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17440:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17463:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17469:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17459:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17459:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17433:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17433:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17433:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17489:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17623:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17497:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17497:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17489:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17367:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17382:4:14",
                "type": ""
              }
            ],
            "src": "17216:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17812:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17822:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17834:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17845:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17830:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17830:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17822:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17869:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17880:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17865:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17865:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17888:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17894:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17884:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17884:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17858:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17858:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17858:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17914:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18048:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17922:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17922:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17914:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17792:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17807:4:14",
                "type": ""
              }
            ],
            "src": "17641:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18237:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18247:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18259:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18270:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18255:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18255:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18247:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18294:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18305:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18290:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18290:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18313:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18319:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18309:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18309:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18283:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18283:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18283:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18339:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18473:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18347:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18347:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18339:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18217:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18232:4:14",
                "type": ""
              }
            ],
            "src": "18066:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18662:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18672:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18684:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18695:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18680:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18680:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18672:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18719:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18730:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18715:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18715:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18738:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18744:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18734:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18734:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18708:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18708:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18708:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18764:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18898:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18772:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18772:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18764:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18642:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18657:4:14",
                "type": ""
              }
            ],
            "src": "18491:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19087:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19097:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19109:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19120:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19105:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19105:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19097:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19144:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19155:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19140:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19140:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19163:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19169:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19159:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19159:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19133:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19133:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19133:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19189:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19323:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19197:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19197:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19189:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19067:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19082:4:14",
                "type": ""
              }
            ],
            "src": "18916:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19512:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19522:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19534:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19545:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19530:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19530:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19522:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19569:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19580:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19565:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19565:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19588:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19594:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19584:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19584:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19558:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19558:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19558:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19614:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19748:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19622:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19622:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19614:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19492:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19507:4:14",
                "type": ""
              }
            ],
            "src": "19341:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19937:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19947:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19959:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19970:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19955:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19955:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19947:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19994:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20005:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19990:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19990:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20013:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20019:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20009:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20009:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19983:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19983:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19983:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20039:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20173:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20047:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20047:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20039:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19917:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19932:4:14",
                "type": ""
              }
            ],
            "src": "19766:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20362:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20372:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20384:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20395:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20380:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20380:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20372:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20419:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20430:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20415:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20415:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20438:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20444:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20434:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20434:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20408:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20408:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20408:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20464:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20598:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20472:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20472:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20464:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "20342:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20357:4:14",
                "type": ""
              }
            ],
            "src": "20191:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20787:248:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20797:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20809:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20820:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20805:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20805:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20797:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20844:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20855:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20840:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20840:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20863:4:14"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20869:9:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20859:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20859:20:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20833:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20833:47:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20833:47:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20889:139:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21023:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20897:124:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20897:131:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20889:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "20767:9:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20782:4:14",
                "type": ""
              }
            ],
            "src": "20616:419:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21139:124:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21149:26:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21161:9:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21172:2:14",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21157:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21157:18:14"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21149:4:14"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "21229:6:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21242:9:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21253:1:14",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21238:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21238:17:14"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21185:43:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21185:71:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21185:71:14"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "21111:9:14",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "21123:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21134:4:14",
                "type": ""
              }
            ],
            "src": "21041:222:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21309:243:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21319:19:14",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21335:2:14",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "21329:5:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21329:9:14"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "21319:6:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "21347:35:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "21369:6:14"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "21377:4:14"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21365:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21365:17:14"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "21351:10:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "21493:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "21495:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21495:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "21495:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "21436:10:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21448:18:14",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "21433:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21433:34:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "21472:10:14"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "21484:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "21469:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21469:22:14"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "21430:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21430:62:14"
                  },
                  "nodeType": "YulIf",
                  "src": "21427:2:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21531:2:14",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "21535:10:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21524:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21524:22:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21524:22:14"
                }
              ]
            },
            "name": "allocateMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "21293:4:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "21302:6:14",
                "type": ""
              }
            ],
            "src": "21269:283:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21624:265:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "21729:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "21731:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21731:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "21731:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "21701:6:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21709:18:14",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "21698:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21698:30:14"
                  },
                  "nodeType": "YulIf",
                  "src": "21695:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21781:41:14",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "21797:6:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21805:4:14",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21793:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21793:17:14"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21816:4:14",
                            "type": "",
                            "value": "0x1f"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "21812:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21812:9:14"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "21789:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21789:33:14"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "21781:4:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21859:23:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "21871:4:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21877:4:14",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21867:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21867:15:14"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "21859:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "21608:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "21619:4:14",
                "type": ""
              }
            ],
            "src": "21558:331:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21953:40:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21964:22:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "21980:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "21974:5:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21974:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "21964:6:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "21936:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "21946:6:14",
                "type": ""
              }
            ],
            "src": "21895:98:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22058:40:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22069:22:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "22085:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "22079:5:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22079:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "22069:6:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "22041:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "22051:6:14",
                "type": ""
              }
            ],
            "src": "21999:99:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22199:73:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22216:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "22221:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22209:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22209:19:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22209:19:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22237:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22256:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22261:4:14",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22252:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22252:14:14"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "22237:11:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "22171:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "22176:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "22187:11:14",
                "type": ""
              }
            ],
            "src": "22104:168:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22374:73:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22391:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "22396:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22384:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22384:19:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22384:19:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22412:29:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22431:3:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22436:4:14",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22427:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22427:14:14"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "22412:11:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "22346:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "22351:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "22362:11:14",
                "type": ""
              }
            ],
            "src": "22278:169:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22567:34:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22577:18:14",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "22592:3:14"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "22577:11:14"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "22539:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "22544:6:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "22555:11:14",
                "type": ""
              }
            ],
            "src": "22453:148:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22651:261:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22661:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "22684:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "22666:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22666:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "22661:1:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22695:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "22718:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "22700:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22700:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "22695:1:14"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "22858:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "22860:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22860:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "22860:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "22779:1:14"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22786:66:14",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "22854:1:14"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "22782:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22782:74:14"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "22776:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22776:81:14"
                  },
                  "nodeType": "YulIf",
                  "src": "22773:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22890:16:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "22901:1:14"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "22904:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22897:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22897:9:14"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "22890:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "22638:1:14",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "22641:1:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "22647:3:14",
                "type": ""
              }
            ],
            "src": "22607:305:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22960:143:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22970:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "22993:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "22975:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22975:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "22970:1:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23004:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23027:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23009:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23009:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23004:1:14"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23051:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "23053:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23053:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23053:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23048:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "23041:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23041:9:14"
                  },
                  "nodeType": "YulIf",
                  "src": "23038:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23083:14:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23092:1:14"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23095:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "23088:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23088:9:14"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "23083:1:14"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "22949:1:14",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "22952:1:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "22958:1:14",
                "type": ""
              }
            ],
            "src": "22918:185:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23154:146:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23164:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23187:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23169:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23169:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "23164:1:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23198:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23221:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23203:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23203:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23198:1:14"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23245:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "23247:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23247:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23247:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23239:1:14"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23242:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "23236:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23236:8:14"
                  },
                  "nodeType": "YulIf",
                  "src": "23233:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23277:17:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23289:1:14"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23292:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "23285:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23285:9:14"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "23277:4:14"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "23140:1:14",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "23143:1:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "23149:4:14",
                "type": ""
              }
            ],
            "src": "23109:191:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23351:51:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23361:35:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23390:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "23372:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23372:24:14"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "23361:7:14"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23333:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "23343:7:14",
                "type": ""
              }
            ],
            "src": "23306:96:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23450:48:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23460:32:14",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "23485:5:14"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "23478:6:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23478:13:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "23471:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23471:21:14"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "23460:7:14"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23432:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "23442:7:14",
                "type": ""
              }
            ],
            "src": "23408:90:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23548:105:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23558:89:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23573:5:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23580:66:14",
                        "type": "",
                        "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "23569:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23569:78:14"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "23558:7:14"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23530:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "23540:7:14",
                "type": ""
              }
            ],
            "src": "23504:149:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23704:81:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23714:65:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23729:5:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23736:42:14",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "23725:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23725:54:14"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "23714:7:14"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23686:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "23696:7:14",
                "type": ""
              }
            ],
            "src": "23659:126:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23836:32:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23846:16:14",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "23857:5:14"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "23846:7:14"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "23818:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "23828:7:14",
                "type": ""
              }
            ],
            "src": "23791:77:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23925:103:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "23948:3:14"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "23953:3:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "23958:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "23935:12:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23935:30:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23935:30:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "24006:3:14"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "24011:6:14"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "24002:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24002:16:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24020:1:14",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23995:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23995:27:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23995:27:14"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "23907:3:14",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "23912:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "23917:6:14",
                "type": ""
              }
            ],
            "src": "23874:154:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24083:258:14",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "24093:10:14",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "24102:1:14",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "24097:1:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24162:63:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "24187:3:14"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "24192:1:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "24183:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24183:11:14"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "24206:3:14"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "24211:1:14"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "24202:3:14"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "24202:11:14"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "24196:5:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24196:18:14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "24176:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24176:39:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24176:39:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "24123:1:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "24126:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "24120:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24120:13:14"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "24134:19:14",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "24136:15:14",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "24145:1:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24148:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24141:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24141:10:14"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "24136:1:14"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "24116:3:14",
                    "statements": []
                  },
                  "src": "24112:113:14"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24259:76:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "24309:3:14"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "24314:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "24305:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24305:16:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24323:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "24298:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24298:27:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24298:27:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "24240:1:14"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "24243:6:14"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "24237:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24237:13:14"
                  },
                  "nodeType": "YulIf",
                  "src": "24234:2:14"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "24065:3:14",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "24070:3:14",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "24075:6:14",
                "type": ""
              }
            ],
            "src": "24034:307:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24398:269:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24408:22:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "24422:4:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24428:1:14",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "24418:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24418:12:14"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "24408:6:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "24439:38:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "24469:4:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24475:1:14",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "24465:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24465:12:14"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "24443:18:14",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24516:51:14",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "24530:27:14",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "24544:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24552:4:14",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "24540:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24540:17:14"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "24530:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "24496:18:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "24489:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24489:26:14"
                  },
                  "nodeType": "YulIf",
                  "src": "24486:2:14"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24619:42:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "24633:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24633:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24633:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "24583:18:14"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "24606:6:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24614:2:14",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "24603:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24603:14:14"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "24580:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24580:38:14"
                  },
                  "nodeType": "YulIf",
                  "src": "24577:2:14"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "24382:4:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "24391:6:14",
                "type": ""
              }
            ],
            "src": "24347:320:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24716:190:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24726:33:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "24753:5:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24735:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24735:24:14"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "24726:5:14"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24849:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "24851:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24851:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24851:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "24774:5:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24781:66:14",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "24771:2:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24771:77:14"
                  },
                  "nodeType": "YulIf",
                  "src": "24768:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24880:20:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "24891:5:14"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24898:1:14",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24887:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24887:13:14"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "24880:3:14"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "24702:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "24712:3:14",
                "type": ""
              }
            ],
            "src": "24673:233:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24946:142:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24956:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "24979:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24961:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24961:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "24956:1:14"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24990:25:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "25013:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "24995:17:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24995:20:14"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "24990:1:14"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25037:22:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "25039:16:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25039:18:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25039:18:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "25034:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "25027:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25027:9:14"
                  },
                  "nodeType": "YulIf",
                  "src": "25024:2:14"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25068:14:14",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "25077:1:14"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "25080:1:14"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "25073:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25073:9:14"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "25068:1:14"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "24935:1:14",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "24938:1:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "24944:1:14",
                "type": ""
              }
            ],
            "src": "24912:176:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25122:152:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25139:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25142:77:14",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25132:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25132:88:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25132:88:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25236:1:14",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25239:4:14",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25229:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25229:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25229:15:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25260:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25263:4:14",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "25253:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25253:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25253:15:14"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "25094:180:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25308:152:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25325:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25328:77:14",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25318:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25318:88:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25318:88:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25422:1:14",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25425:4:14",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25415:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25415:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25415:15:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25446:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25449:4:14",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "25439:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25439:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25439:15:14"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "25280:180:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25494:152:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25511:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25514:77:14",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25504:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25504:88:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25504:88:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25608:1:14",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25611:4:14",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25601:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25601:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25601:15:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25632:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25635:4:14",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "25625:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25625:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25625:15:14"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "25466:180:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25680:152:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25697:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25700:77:14",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25690:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25690:88:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25690:88:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25794:1:14",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25797:4:14",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25787:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25787:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25787:15:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25818:1:14",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25821:4:14",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "25811:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25811:15:14"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25811:15:14"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "25652:180:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25886:54:14",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25896:38:14",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "25914:5:14"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25921:2:14",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25910:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25910:14:14"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25930:2:14",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "25926:3:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25926:7:14"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "25906:3:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25906:28:14"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "25896:6:14"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25869:5:14",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "25879:6:14",
                "type": ""
              }
            ],
            "src": "25838:102:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25989:79:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26046:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26055:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26058:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "26048:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26048:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26048:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "26012:5:14"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "26037:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "26019:17:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "26019:24:14"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "26009:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26009:35:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "26002:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26002:43:14"
                  },
                  "nodeType": "YulIf",
                  "src": "25999:2:14"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "25982:5:14",
                "type": ""
              }
            ],
            "src": "25946:122:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26114:76:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26168:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26177:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26180:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "26170:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26170:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26170:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "26137:5:14"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "26159:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "26144:14:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "26144:21:14"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "26134:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26134:32:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "26127:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26127:40:14"
                  },
                  "nodeType": "YulIf",
                  "src": "26124:2:14"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "26107:5:14",
                "type": ""
              }
            ],
            "src": "26074:116:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26238:78:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26294:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26303:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26306:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "26296:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26296:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26296:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "26261:5:14"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "26285:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bytes4",
                              "nodeType": "YulIdentifier",
                              "src": "26268:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "26268:23:14"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "26258:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26258:34:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "26251:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26251:42:14"
                  },
                  "nodeType": "YulIf",
                  "src": "26248:2:14"
                }
              ]
            },
            "name": "validator_revert_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "26231:5:14",
                "type": ""
              }
            ],
            "src": "26196:120:14"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26365:79:14",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26422:16:14",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26431:1:14",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26434:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "26424:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26424:12:14"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26424:12:14"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "26388:5:14"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "26413:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "26395:17:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "26395:24:14"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "26385:2:14"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26385:35:14"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "26378:6:14"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26378:43:14"
                  },
                  "nodeType": "YulIf",
                  "src": "26375:2:14"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "26358:5:14",
                "type": ""
              }
            ],
            "src": "26322:122:14"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocateMemory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n\n        mstore(add(pos, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(pos, 32), \"ceiver implementer\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n\n        mstore(add(pos, 0), \"Only Minter Can Do It!\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n\n        mstore(add(pos, 0), \"ERC721: token already minted\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n\n        mstore(add(pos, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(pos, 32), \"ress\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n\n        mstore(add(pos, 0), \"ERC721: approve to caller\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n\n        mstore(add(pos, 0), \"ERC721: operator query for nonex\")\n\n        mstore(add(pos, 32), \"istent token\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 56)\n\n        mstore(add(pos, 0), \"ERC721: approve caller is not ow\")\n\n        mstore(add(pos, 32), \"ner nor approved for all\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 42)\n\n        mstore(add(pos, 0), \"ERC721: balance query for the ze\")\n\n        mstore(add(pos, 32), \"ro address\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n\n        mstore(add(pos, 0), \"ERC721: owner query for nonexist\")\n\n        mstore(add(pos, 32), \"ent token\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n\n        mstore(add(pos, 0), \"ERC721: mint to the zero address\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n\n        mstore(add(pos, 0), \"ERC721: approved query for nonex\")\n\n        mstore(add(pos, 32), \"istent token\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n\n        mstore(add(pos, 0), \"ERC721: transfer of token that i\")\n\n        mstore(add(pos, 32), \"s not own\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 47)\n\n        mstore(add(pos, 0), \"ERC721Metadata: URI query for no\")\n\n        mstore(add(pos, 32), \"nexistent token\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 21)\n\n        mstore(add(pos, 0), \"Only Owner Can Do It!\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n\n        mstore(add(pos, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(pos, 32), \"r\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 49)\n\n        mstore(add(pos, 0), \"ERC721: transfer caller is not o\")\n\n        mstore(add(pos, 32), \"wner nor approved\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocateMemory(size) -> memPtr {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, size)\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        // round up\n        size := and(add(length, 0x1f), not(0x1f))\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 14,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "173:1020:2:-:0;;;560:82;;;;;;;;;;1316:113:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1390:5;1382;:13;;;;;;;;;;;;:::i;:::-;;1415:7;1405;:17;;;;;;;;;;;;:::i;:::-;;1316:113;;625:10:2::1;616:6;;:19;;;;;;;;;;;;;;;;;;173:1020:::0;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:320:14:-;;88:1;82:4;78:12;68:22;;135:1;129:4;125:12;156:18;146:2;;212:4;204:6;200:17;190:27;;146:2;274;266:6;263:14;243:18;240:38;237:2;;;293:18;;:::i;:::-;237:2;58:269;;;;:::o;333:180::-;381:77;378:1;371:88;478:4;475:1;468:15;502:4;499:1;492:15;173:1020:2;;;;;;;",
  "deployedSourceMap": "173:1020:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1496:300:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2414:98;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3925:217;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3463:401;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;648:155:2;;;:::i;:::-;;4789:330:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;809:89:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5185:179:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2117:235;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1855:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2576:102;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4209:290;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5430:320;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2744:329;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4565:162;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1095:96:2;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1007:82;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;904:97;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1496:300:4;1598:4;1648:25;1633:40;;;:11;:40;;;;:104;;;;1704:33;1689:48;;;:11;:48;;;;1633:104;:156;;;;1753:36;1777:11;1753:23;:36::i;:::-;1633:156;1614:175;;1496:300;;;:::o;2414:98::-;2468:13;2500:5;2493:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2414:98;:::o;3925:217::-;4001:7;4028:16;4036:7;4028;:16::i;:::-;4020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;4111:15;:24;4127:7;4111:24;;;;;;;;;;;;;;;;;;;;;4104:31;;3925:217;;;:::o;3463:401::-;3543:13;3559:23;3574:7;3559:14;:23::i;:::-;3543:39;;3606:5;3600:11;;:2;:11;;;;3592:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3697:5;3681:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3706:37;3723:5;3730:12;:10;:12::i;:::-;3706:16;:37::i;:::-;3681:62;3660:165;;;;;;;;;;;;:::i;:::-;;;;;;;;;3836:21;3845:2;3849:7;3836:8;:21::i;:::-;3463:401;;;:::o;648:155:2:-;682:10;387:7;;;;;;;;;;;379:15;;:4;:15;;;371:50;;;;;;;;;;;;:::i;:::-;;;;;;;;;704:20:::1;:8;:18;:20::i;:::-;734:10;747:18;:8;:16;:18::i;:::-;734:31;;775:21;781:10;793:2;775:5;:21::i;:::-;431:1;648:155:::0;:::o;4789:330:4:-;4978:41;4997:12;:10;:12::i;:::-;5011:7;4978:18;:41::i;:::-;4970:103;;;;;;;;;;;;:::i;:::-;;;;;;;;;5084:28;5094:4;5100:2;5104:7;5084:9;:28::i;:::-;4789:330;;;:::o;809:89:2:-;857:4;880:11;888:2;880:7;:11::i;:::-;873:18;;809:89;;;:::o;5185:179:4:-;5318:39;5335:4;5341:2;5345:7;5318:39;;;;;;;;;;;;:16;:39::i;:::-;5185:179;;;:::o;2117:235::-;2189:7;2208:13;2224:7;:16;2232:7;2224:16;;;;;;;;;;;;;;;;;;;;;2208:32;;2275:1;2258:19;;:5;:19;;;;2250:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2340:5;2333:12;;;2117:235;;;:::o;1855:205::-;1927:7;1971:1;1954:19;;:5;:19;;;;1946:74;;;;;;;;;;;;:::i;:::-;;;;;;;;;2037:9;:16;2047:5;2037:16;;;;;;;;;;;;;;;;2030:23;;1855:205;;;:::o;2576:102::-;2632:13;2664:7;2657:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2576:102;:::o;4209:290::-;4323:12;:10;:12::i;:::-;4311:24;;:8;:24;;;;4303:62;;;;;;;;;;;;:::i;:::-;;;;;;;;;4421:8;4376:18;:32;4395:12;:10;:12::i;:::-;4376:32;;;;;;;;;;;;;;;:42;4409:8;4376:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;4473:8;4444:48;;4459:12;:10;:12::i;:::-;4444:48;;;4483:8;4444:48;;;;;;:::i;:::-;;;;;;;;4209:290;;:::o;5430:320::-;5599:41;5618:12;:10;:12::i;:::-;5632:7;5599:18;:41::i;:::-;5591:103;;;;;;;;;;;;:::i;:::-;;;;;;;;;5704:39;5718:4;5724:2;5728:7;5737:5;5704:13;:39::i;:::-;5430:320;;;;:::o;2744:329::-;2817:13;2850:16;2858:7;2850;:16::i;:::-;2842:76;;;;;;;;;;;;:::i;:::-;;;;;;;;;2929:21;2953:10;:8;:10::i;:::-;2929:34;;3004:1;2986:7;2980:21;:25;:86;;;;;;;;;;;;;;;;;3032:7;3041:18;:7;:16;:18::i;:::-;3015:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2980:86;2973:93;;;2744:329;;;:::o;4565:162::-;4662:4;4685:18;:25;4704:5;4685:25;;;;;;;;;;;;;;;:35;4711:8;4685:35;;;;;;;;;;;;;;;;;;;;;;;;;4678:42;;4565:162;;;;:::o;1095:96:2:-;1140:7;1166:18;:8;:16;:18::i;:::-;1159:25;;1095:96;:::o;1007:82::-;1049:7;1075;;;;;;;;;;;1068:14;;1007:82;:::o;904:97::-;956:10;504:6;;;;;;;;;;;496:14;;:4;:14;;;488:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;988:6:::1;978:7;;:16;;;;;;;;;;;;;;;;;;904:97:::0;;:::o;763:155:12:-;848:4;886:25;871:40;;;:11;:40;;;;864:47;;763:155;;;:::o;7222:125:4:-;7287:4;7338:1;7310:30;;:7;:16;7318:7;7310:16;;;;;;;;;;;;;;;;;;;;;:30;;;;7303:37;;7222:125;;;:::o;587:96:9:-;640:7;666:10;659:17;;587:96;:::o;11073:171:4:-;11174:2;11147:15;:24;11163:7;11147:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;11229:7;11225:2;11191:46;;11200:23;11215:7;11200:14;:23::i;:::-;11191:46;;;;;;;;;;;;11073:171;;:::o;891:123:10:-;996:1;978:7;:14;;;:19;;;;;;;;;;;891:123;:::o;773:112::-;838:7;864;:14;;;857:21;;773:112;;;:::o;9141:372:4:-;9234:1;9220:16;;:2;:16;;;;9212:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9292:16;9300:7;9292;:16::i;:::-;9291:17;9283:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9352:45;9381:1;9385:2;9389:7;9352:20;:45::i;:::-;9425:1;9408:9;:13;9418:2;9408:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;9455:2;9436:7;:16;9444:7;9436:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9498:7;9494:2;9473:33;;9490:1;9473:33;;;;;;;;;;;;9141:372;;:::o;7505:344::-;7598:4;7622:16;7630:7;7622;:16::i;:::-;7614:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;7697:13;7713:23;7728:7;7713:14;:23::i;:::-;7697:39;;7765:5;7754:16;;:7;:16;;;:51;;;;7798:7;7774:31;;:20;7786:7;7774:11;:20::i;:::-;:31;;;7754:51;:87;;;;7809:32;7826:5;7833:7;7809:16;:32::i;:::-;7754:87;7746:96;;;7505:344;;;;:::o;10402:560::-;10556:4;10529:31;;:23;10544:7;10529:14;:23::i;:::-;:31;;;10521:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;10638:1;10624:16;;:2;:16;;;;10616:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;10692:39;10713:4;10719:2;10723:7;10692:20;:39::i;:::-;10793:29;10810:1;10814:7;10793:8;:29::i;:::-;10852:1;10833:9;:15;10843:4;10833:15;;;;;;;;;;;;;;;;:20;;;;;;;:::i;:::-;;;;;;;;10880:1;10863:9;:13;10873:2;10863:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;10910:2;10891:7;:16;10899:7;10891:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;10947:7;10943:2;10928:27;;10937:4;10928:27;;;;;;;;;;;;10402:560;;;:::o;6612:307::-;6763:28;6773:4;6779:2;6783:7;6763:9;:28::i;:::-;6809:48;6832:4;6838:2;6842:7;6851:5;6809:22;:48::i;:::-;6801:111;;;;;;;;;;;;:::i;:::-;;;;;;;;;6612:307;;;;:::o;3314:92::-;3365:13;3390:9;;;;;;;;;;;;;;3314:92;:::o;275:703:11:-;331:13;557:1;548:5;:10;544:51;;;574:10;;;;;;;;;;;;;;;;;;;;;544:51;604:12;619:5;604:20;;634:14;658:75;673:1;665:4;:9;658:75;;690:8;;;;;:::i;:::-;;;;720:2;712:10;;;;;:::i;:::-;;;658:75;;;742:19;774:6;764:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;742:39;;791:150;807:1;798:5;:10;791:150;;834:1;824:11;;;;;:::i;:::-;;;900:2;892:5;:10;;;;:::i;:::-;879:2;:24;;;;:::i;:::-;866:39;;849:6;856;849:14;;;;;;;;;;;;;;;;;;;:56;;;;;;;;;;;928:2;919:11;;;;;:::i;:::-;;;791:150;;;964:6;950:21;;;;;275:703;;;;:::o;13131:122:4:-;;;;:::o;11797:778::-;11947:4;11967:15;:2;:13;;;:15::i;:::-;11963:606;;;12018:2;12002:36;;;12039:12;:10;:12::i;:::-;12053:4;12059:7;12068:5;12002:72;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;11998:519;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12258:1;12241:6;:13;:18;12237:266;;;12283:60;;;;;;;;;;:::i;:::-;;;;;;;;12237:266;12455:6;12449:13;12440:6;12436:2;12432:15;12425:38;11998:519;12134:41;;;12124:51;;;:6;:51;;;;12117:58;;;;;11963:606;12554:4;12547:11;;11797:778;;;;;;;:::o;718:377:8:-;778:4;981:12;1046:7;1034:20;1026:28;;1087:1;1080:4;:8;1073:15;;;718:377;;;:::o;7:342:14:-;;109:64;124:48;165:6;124:48;:::i;:::-;109:64;:::i;:::-;100:73;;196:6;189:5;182:21;234:4;227:5;223:16;272:3;263:6;258:3;254:16;251:25;248:2;;;289:1;286;279:12;248:2;302:41;336:6;331:3;326;302:41;:::i;:::-;90:259;;;;;;:::o;355:139::-;;439:6;426:20;417:29;;455:33;482:5;455:33;:::i;:::-;407:87;;;;:::o;500:133::-;;581:6;568:20;559:29;;597:30;621:5;597:30;:::i;:::-;549:84;;;;:::o;639:137::-;;722:6;709:20;700:29;;738:32;764:5;738:32;:::i;:::-;690:86;;;;:::o;782:141::-;;869:6;863:13;854:22;;885:32;911:5;885:32;:::i;:::-;844:79;;;;:::o;942:271::-;;1046:3;1039:4;1031:6;1027:17;1023:27;1013:2;;1064:1;1061;1054:12;1013:2;1104:6;1091:20;1129:78;1203:3;1195:6;1188:4;1180:6;1176:17;1129:78;:::i;:::-;1120:87;;1003:210;;;;;:::o;1219:139::-;;1303:6;1290:20;1281:29;;1319:33;1346:5;1319:33;:::i;:::-;1271:87;;;;:::o;1364:262::-;;1472:2;1460:9;1451:7;1447:23;1443:32;1440:2;;;1488:1;1485;1478:12;1440:2;1531:1;1556:53;1601:7;1592:6;1581:9;1577:22;1556:53;:::i;:::-;1546:63;;1502:117;1430:196;;;;:::o;1632:407::-;;;1757:2;1745:9;1736:7;1732:23;1728:32;1725:2;;;1773:1;1770;1763:12;1725:2;1816:1;1841:53;1886:7;1877:6;1866:9;1862:22;1841:53;:::i;:::-;1831:63;;1787:117;1943:2;1969:53;2014:7;2005:6;1994:9;1990:22;1969:53;:::i;:::-;1959:63;;1914:118;1715:324;;;;;:::o;2045:552::-;;;;2187:2;2175:9;2166:7;2162:23;2158:32;2155:2;;;2203:1;2200;2193:12;2155:2;2246:1;2271:53;2316:7;2307:6;2296:9;2292:22;2271:53;:::i;:::-;2261:63;;2217:117;2373:2;2399:53;2444:7;2435:6;2424:9;2420:22;2399:53;:::i;:::-;2389:63;;2344:118;2501:2;2527:53;2572:7;2563:6;2552:9;2548:22;2527:53;:::i;:::-;2517:63;;2472:118;2145:452;;;;;:::o;2603:809::-;;;;;2771:3;2759:9;2750:7;2746:23;2742:33;2739:2;;;2788:1;2785;2778:12;2739:2;2831:1;2856:53;2901:7;2892:6;2881:9;2877:22;2856:53;:::i;:::-;2846:63;;2802:117;2958:2;2984:53;3029:7;3020:6;3009:9;3005:22;2984:53;:::i;:::-;2974:63;;2929:118;3086:2;3112:53;3157:7;3148:6;3137:9;3133:22;3112:53;:::i;:::-;3102:63;;3057:118;3242:2;3231:9;3227:18;3214:32;3273:18;3265:6;3262:30;3259:2;;;3305:1;3302;3295:12;3259:2;3333:62;3387:7;3378:6;3367:9;3363:22;3333:62;:::i;:::-;3323:72;;3185:220;2729:683;;;;;;;:::o;3418:401::-;;;3540:2;3528:9;3519:7;3515:23;3511:32;3508:2;;;3556:1;3553;3546:12;3508:2;3599:1;3624:53;3669:7;3660:6;3649:9;3645:22;3624:53;:::i;:::-;3614:63;;3570:117;3726:2;3752:50;3794:7;3785:6;3774:9;3770:22;3752:50;:::i;:::-;3742:60;;3697:115;3498:321;;;;;:::o;3825:407::-;;;3950:2;3938:9;3929:7;3925:23;3921:32;3918:2;;;3966:1;3963;3956:12;3918:2;4009:1;4034:53;4079:7;4070:6;4059:9;4055:22;4034:53;:::i;:::-;4024:63;;3980:117;4136:2;4162:53;4207:7;4198:6;4187:9;4183:22;4162:53;:::i;:::-;4152:63;;4107:118;3908:324;;;;;:::o;4238:260::-;;4345:2;4333:9;4324:7;4320:23;4316:32;4313:2;;;4361:1;4358;4351:12;4313:2;4404:1;4429:52;4473:7;4464:6;4453:9;4449:22;4429:52;:::i;:::-;4419:62;;4375:116;4303:195;;;;:::o;4504:282::-;;4622:2;4610:9;4601:7;4597:23;4593:32;4590:2;;;4638:1;4635;4628:12;4590:2;4681:1;4706:63;4761:7;4752:6;4741:9;4737:22;4706:63;:::i;:::-;4696:73;;4652:127;4580:206;;;;:::o;4792:262::-;;4900:2;4888:9;4879:7;4875:23;4871:32;4868:2;;;4916:1;4913;4906:12;4868:2;4959:1;4984:53;5029:7;5020:6;5009:9;5005:22;4984:53;:::i;:::-;4974:63;;4930:117;4858:196;;;;:::o;5060:118::-;5147:24;5165:5;5147:24;:::i;:::-;5142:3;5135:37;5125:53;;:::o;5184:109::-;5265:21;5280:5;5265:21;:::i;:::-;5260:3;5253:34;5243:50;;:::o;5299:360::-;;5413:38;5445:5;5413:38;:::i;:::-;5467:70;5530:6;5525:3;5467:70;:::i;:::-;5460:77;;5546:52;5591:6;5586:3;5579:4;5572:5;5568:16;5546:52;:::i;:::-;5623:29;5645:6;5623:29;:::i;:::-;5618:3;5614:39;5607:46;;5389:270;;;;;:::o;5665:364::-;;5781:39;5814:5;5781:39;:::i;:::-;5836:71;5900:6;5895:3;5836:71;:::i;:::-;5829:78;;5916:52;5961:6;5956:3;5949:4;5942:5;5938:16;5916:52;:::i;:::-;5993:29;6015:6;5993:29;:::i;:::-;5988:3;5984:39;5977:46;;5757:272;;;;;:::o;6035:377::-;;6169:39;6202:5;6169:39;:::i;:::-;6224:89;6306:6;6301:3;6224:89;:::i;:::-;6217:96;;6322:52;6367:6;6362:3;6355:4;6348:5;6344:16;6322:52;:::i;:::-;6399:6;6394:3;6390:16;6383:23;;6145:267;;;;;:::o;6418:382::-;;6581:67;6645:2;6640:3;6581:67;:::i;:::-;6574:74;;6678:34;6674:1;6669:3;6665:11;6658:55;6744:20;6739:2;6734:3;6730:12;6723:42;6791:2;6786:3;6782:12;6775:19;;6564:236;;;:::o;6806:320::-;;6969:67;7033:2;7028:3;6969:67;:::i;:::-;6962:74;;7066:24;7062:1;7057:3;7053:11;7046:45;7117:2;7112:3;7108:12;7101:19;;6952:174;;;:::o;7132:326::-;;7295:67;7359:2;7354:3;7295:67;:::i;:::-;7288:74;;7392:30;7388:1;7383:3;7379:11;7372:51;7449:2;7444:3;7440:12;7433:19;;7278:180;;;:::o;7464:368::-;;7627:67;7691:2;7686:3;7627:67;:::i;:::-;7620:74;;7724:34;7720:1;7715:3;7711:11;7704:55;7790:6;7785:2;7780:3;7776:12;7769:28;7823:2;7818:3;7814:12;7807:19;;7610:222;;;:::o;7838:323::-;;8001:67;8065:2;8060:3;8001:67;:::i;:::-;7994:74;;8098:27;8094:1;8089:3;8085:11;8078:48;8152:2;8147:3;8143:12;8136:19;;7984:177;;;:::o;8167:376::-;;8330:67;8394:2;8389:3;8330:67;:::i;:::-;8323:74;;8427:34;8423:1;8418:3;8414:11;8407:55;8493:14;8488:2;8483:3;8479:12;8472:36;8534:2;8529:3;8525:12;8518:19;;8313:230;;;:::o;8549:388::-;;8712:67;8776:2;8771:3;8712:67;:::i;:::-;8705:74;;8809:34;8805:1;8800:3;8796:11;8789:55;8875:26;8870:2;8865:3;8861:12;8854:48;8928:2;8923:3;8919:12;8912:19;;8695:242;;;:::o;8943:374::-;;9106:67;9170:2;9165:3;9106:67;:::i;:::-;9099:74;;9203:34;9199:1;9194:3;9190:11;9183:55;9269:12;9264:2;9259:3;9255:12;9248:34;9308:2;9303:3;9299:12;9292:19;;9089:228;;;:::o;9323:373::-;;9486:67;9550:2;9545:3;9486:67;:::i;:::-;9479:74;;9583:34;9579:1;9574:3;9570:11;9563:55;9649:11;9644:2;9639:3;9635:12;9628:33;9687:2;9682:3;9678:12;9671:19;;9469:227;;;:::o;9702:330::-;;9865:67;9929:2;9924:3;9865:67;:::i;:::-;9858:74;;9962:34;9958:1;9953:3;9949:11;9942:55;10023:2;10018:3;10014:12;10007:19;;9848:184;;;:::o;10038:376::-;;10201:67;10265:2;10260:3;10201:67;:::i;:::-;10194:74;;10298:34;10294:1;10289:3;10285:11;10278:55;10364:14;10359:2;10354:3;10350:12;10343:36;10405:2;10400:3;10396:12;10389:19;;10184:230;;;:::o;10420:373::-;;10583:67;10647:2;10642:3;10583:67;:::i;:::-;10576:74;;10680:34;10676:1;10671:3;10667:11;10660:55;10746:11;10741:2;10736:3;10732:12;10725:33;10784:2;10779:3;10775:12;10768:19;;10566:227;;;:::o;10799:379::-;;10962:67;11026:2;11021:3;10962:67;:::i;:::-;10955:74;;11059:34;11055:1;11050:3;11046:11;11039:55;11125:17;11120:2;11115:3;11111:12;11104:39;11169:2;11164:3;11160:12;11153:19;;10945:233;;;:::o;11184:319::-;;11347:67;11411:2;11406:3;11347:67;:::i;:::-;11340:74;;11444:23;11440:1;11435:3;11431:11;11424:44;11494:2;11489:3;11485:12;11478:19;;11330:173;;;:::o;11509:365::-;;11672:67;11736:2;11731:3;11672:67;:::i;:::-;11665:74;;11769:34;11765:1;11760:3;11756:11;11749:55;11835:3;11830:2;11825:3;11821:12;11814:25;11865:2;11860:3;11856:12;11849:19;;11655:219;;;:::o;11880:381::-;;12043:67;12107:2;12102:3;12043:67;:::i;:::-;12036:74;;12140:34;12136:1;12131:3;12127:11;12120:55;12206:19;12201:2;12196:3;12192:12;12185:41;12252:2;12247:3;12243:12;12236:19;;12026:235;;;:::o;12267:118::-;12354:24;12372:5;12354:24;:::i;:::-;12349:3;12342:37;12332:53;;:::o;12391:435::-;;12593:95;12684:3;12675:6;12593:95;:::i;:::-;12586:102;;12705:95;12796:3;12787:6;12705:95;:::i;:::-;12698:102;;12817:3;12810:10;;12575:251;;;;;:::o;12832:222::-;;12963:2;12952:9;12948:18;12940:26;;12976:71;13044:1;13033:9;13029:17;13020:6;12976:71;:::i;:::-;12930:124;;;;:::o;13060:640::-;;13293:3;13282:9;13278:19;13270:27;;13307:71;13375:1;13364:9;13360:17;13351:6;13307:71;:::i;:::-;13388:72;13456:2;13445:9;13441:18;13432:6;13388:72;:::i;:::-;13470;13538:2;13527:9;13523:18;13514:6;13470:72;:::i;:::-;13589:9;13583:4;13579:20;13574:2;13563:9;13559:18;13552:48;13617:76;13688:4;13679:6;13617:76;:::i;:::-;13609:84;;13260:440;;;;;;;:::o;13706:210::-;;13831:2;13820:9;13816:18;13808:26;;13844:65;13906:1;13895:9;13891:17;13882:6;13844:65;:::i;:::-;13798:118;;;;:::o;13922:313::-;;14073:2;14062:9;14058:18;14050:26;;14122:9;14116:4;14112:20;14108:1;14097:9;14093:17;14086:47;14150:78;14223:4;14214:6;14150:78;:::i;:::-;14142:86;;14040:195;;;;:::o;14241:419::-;;14445:2;14434:9;14430:18;14422:26;;14494:9;14488:4;14484:20;14480:1;14469:9;14465:17;14458:47;14522:131;14648:4;14522:131;:::i;:::-;14514:139;;14412:248;;;:::o;14666:419::-;;14870:2;14859:9;14855:18;14847:26;;14919:9;14913:4;14909:20;14905:1;14894:9;14890:17;14883:47;14947:131;15073:4;14947:131;:::i;:::-;14939:139;;14837:248;;;:::o;15091:419::-;;15295:2;15284:9;15280:18;15272:26;;15344:9;15338:4;15334:20;15330:1;15319:9;15315:17;15308:47;15372:131;15498:4;15372:131;:::i;:::-;15364:139;;15262:248;;;:::o;15516:419::-;;15720:2;15709:9;15705:18;15697:26;;15769:9;15763:4;15759:20;15755:1;15744:9;15740:17;15733:47;15797:131;15923:4;15797:131;:::i;:::-;15789:139;;15687:248;;;:::o;15941:419::-;;16145:2;16134:9;16130:18;16122:26;;16194:9;16188:4;16184:20;16180:1;16169:9;16165:17;16158:47;16222:131;16348:4;16222:131;:::i;:::-;16214:139;;16112:248;;;:::o;16366:419::-;;16570:2;16559:9;16555:18;16547:26;;16619:9;16613:4;16609:20;16605:1;16594:9;16590:17;16583:47;16647:131;16773:4;16647:131;:::i;:::-;16639:139;;16537:248;;;:::o;16791:419::-;;16995:2;16984:9;16980:18;16972:26;;17044:9;17038:4;17034:20;17030:1;17019:9;17015:17;17008:47;17072:131;17198:4;17072:131;:::i;:::-;17064:139;;16962:248;;;:::o;17216:419::-;;17420:2;17409:9;17405:18;17397:26;;17469:9;17463:4;17459:20;17455:1;17444:9;17440:17;17433:47;17497:131;17623:4;17497:131;:::i;:::-;17489:139;;17387:248;;;:::o;17641:419::-;;17845:2;17834:9;17830:18;17822:26;;17894:9;17888:4;17884:20;17880:1;17869:9;17865:17;17858:47;17922:131;18048:4;17922:131;:::i;:::-;17914:139;;17812:248;;;:::o;18066:419::-;;18270:2;18259:9;18255:18;18247:26;;18319:9;18313:4;18309:20;18305:1;18294:9;18290:17;18283:47;18347:131;18473:4;18347:131;:::i;:::-;18339:139;;18237:248;;;:::o;18491:419::-;;18695:2;18684:9;18680:18;18672:26;;18744:9;18738:4;18734:20;18730:1;18719:9;18715:17;18708:47;18772:131;18898:4;18772:131;:::i;:::-;18764:139;;18662:248;;;:::o;18916:419::-;;19120:2;19109:9;19105:18;19097:26;;19169:9;19163:4;19159:20;19155:1;19144:9;19140:17;19133:47;19197:131;19323:4;19197:131;:::i;:::-;19189:139;;19087:248;;;:::o;19341:419::-;;19545:2;19534:9;19530:18;19522:26;;19594:9;19588:4;19584:20;19580:1;19569:9;19565:17;19558:47;19622:131;19748:4;19622:131;:::i;:::-;19614:139;;19512:248;;;:::o;19766:419::-;;19970:2;19959:9;19955:18;19947:26;;20019:9;20013:4;20009:20;20005:1;19994:9;19990:17;19983:47;20047:131;20173:4;20047:131;:::i;:::-;20039:139;;19937:248;;;:::o;20191:419::-;;20395:2;20384:9;20380:18;20372:26;;20444:9;20438:4;20434:20;20430:1;20419:9;20415:17;20408:47;20472:131;20598:4;20472:131;:::i;:::-;20464:139;;20362:248;;;:::o;20616:419::-;;20820:2;20809:9;20805:18;20797:26;;20869:9;20863:4;20859:20;20855:1;20844:9;20840:17;20833:47;20897:131;21023:4;20897:131;:::i;:::-;20889:139;;20787:248;;;:::o;21041:222::-;;21172:2;21161:9;21157:18;21149:26;;21185:71;21253:1;21242:9;21238:17;21229:6;21185:71;:::i;:::-;21139:124;;;;:::o;21269:283::-;;21335:2;21329:9;21319:19;;21377:4;21369:6;21365:17;21484:6;21472:10;21469:22;21448:18;21436:10;21433:34;21430:62;21427:2;;;21495:18;;:::i;:::-;21427:2;21535:10;21531:2;21524:22;21309:243;;;;:::o;21558:331::-;;21709:18;21701:6;21698:30;21695:2;;;21731:18;;:::i;:::-;21695:2;21816:4;21812:9;21805:4;21797:6;21793:17;21789:33;21781:41;;21877:4;21871;21867:15;21859:23;;21624:265;;;:::o;21895:98::-;;21980:5;21974:12;21964:22;;21953:40;;;:::o;21999:99::-;;22085:5;22079:12;22069:22;;22058:40;;;:::o;22104:168::-;;22221:6;22216:3;22209:19;22261:4;22256:3;22252:14;22237:29;;22199:73;;;;:::o;22278:169::-;;22396:6;22391:3;22384:19;22436:4;22431:3;22427:14;22412:29;;22374:73;;;;:::o;22453:148::-;;22592:3;22577:18;;22567:34;;;;:::o;22607:305::-;;22666:20;22684:1;22666:20;:::i;:::-;22661:25;;22700:20;22718:1;22700:20;:::i;:::-;22695:25;;22854:1;22786:66;22782:74;22779:1;22776:81;22773:2;;;22860:18;;:::i;:::-;22773:2;22904:1;22901;22897:9;22890:16;;22651:261;;;;:::o;22918:185::-;;22975:20;22993:1;22975:20;:::i;:::-;22970:25;;23009:20;23027:1;23009:20;:::i;:::-;23004:25;;23048:1;23038:2;;23053:18;;:::i;:::-;23038:2;23095:1;23092;23088:9;23083:14;;22960:143;;;;:::o;23109:191::-;;23169:20;23187:1;23169:20;:::i;:::-;23164:25;;23203:20;23221:1;23203:20;:::i;:::-;23198:25;;23242:1;23239;23236:8;23233:2;;;23247:18;;:::i;:::-;23233:2;23292:1;23289;23285:9;23277:17;;23154:146;;;;:::o;23306:96::-;;23372:24;23390:5;23372:24;:::i;:::-;23361:35;;23351:51;;;:::o;23408:90::-;;23485:5;23478:13;23471:21;23460:32;;23450:48;;;:::o;23504:149::-;;23580:66;23573:5;23569:78;23558:89;;23548:105;;;:::o;23659:126::-;;23736:42;23729:5;23725:54;23714:65;;23704:81;;;:::o;23791:77::-;;23857:5;23846:16;;23836:32;;;:::o;23874:154::-;23958:6;23953:3;23948;23935:30;24020:1;24011:6;24006:3;24002:16;23995:27;23925:103;;;:::o;24034:307::-;24102:1;24112:113;24126:6;24123:1;24120:13;24112:113;;;24211:1;24206:3;24202:11;24196:18;24192:1;24187:3;24183:11;24176:39;24148:2;24145:1;24141:10;24136:15;;24112:113;;;24243:6;24240:1;24237:13;24234:2;;;24323:1;24314:6;24309:3;24305:16;24298:27;24234:2;24083:258;;;;:::o;24347:320::-;;24428:1;24422:4;24418:12;24408:22;;24475:1;24469:4;24465:12;24496:18;24486:2;;24552:4;24544:6;24540:17;24530:27;;24486:2;24614;24606:6;24603:14;24583:18;24580:38;24577:2;;;24633:18;;:::i;:::-;24577:2;24398:269;;;;:::o;24673:233::-;;24735:24;24753:5;24735:24;:::i;:::-;24726:33;;24781:66;24774:5;24771:77;24768:2;;;24851:18;;:::i;:::-;24768:2;24898:1;24891:5;24887:13;24880:20;;24716:190;;;:::o;24912:176::-;;24961:20;24979:1;24961:20;:::i;:::-;24956:25;;24995:20;25013:1;24995:20;:::i;:::-;24990:25;;25034:1;25024:2;;25039:18;;:::i;:::-;25024:2;25080:1;25077;25073:9;25068:14;;24946:142;;;;:::o;25094:180::-;25142:77;25139:1;25132:88;25239:4;25236:1;25229:15;25263:4;25260:1;25253:15;25280:180;25328:77;25325:1;25318:88;25425:4;25422:1;25415:15;25449:4;25446:1;25439:15;25466:180;25514:77;25511:1;25504:88;25611:4;25608:1;25601:15;25635:4;25632:1;25625:15;25652:180;25700:77;25697:1;25690:88;25797:4;25794:1;25787:15;25821:4;25818:1;25811:15;25838:102;;25930:2;25926:7;25921:2;25914:5;25910:14;25906:28;25896:38;;25886:54;;;:::o;25946:122::-;26019:24;26037:5;26019:24;:::i;:::-;26012:5;26009:35;25999:2;;26058:1;26055;26048:12;25999:2;25989:79;:::o;26074:116::-;26144:21;26159:5;26144:21;:::i;:::-;26137:5;26134:32;26124:2;;26180:1;26177;26170:12;26124:2;26114:76;:::o;26196:120::-;26268:23;26285:5;26268:23;:::i;:::-;26261:5;26258:34;26248:2;;26306:1;26303;26296:12;26248:2;26238:78;:::o;26322:122::-;26395:24;26413:5;26395:24;:::i;:::-;26388:5;26385:35;26375:2;;26434:1;26431;26424:12;26375:2;26365:79;:::o",
  "source": "// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\ncontract PMT721 is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenId;\n    address _owner;\n    address _minter;\n\n    modifier MustMinter(address from) {\n        require(from == _minter, \"Only Minter Can Do It!\");\n        _;\n    }\n\n    modifier MustOwner(address from) {\n        require(from == _owner, \"Only Owner Can Do It!\");\n        _;\n    }\n\n    constructor() ERC721(\"PixelsMetavers\", \"PMT\") {\n        _owner = msg.sender;\n    }\n\n    function mint() public MustMinter(msg.sender) {\n        _tokenId.increment();\n        uint256 id = _tokenId.current();\n        _mint(msg.sender, id);\n    }\n\n    function exits(uint256 id) public view returns (bool) {\n        return _exists(id);\n    }\n\n    function setMinter(address minter) public MustOwner(msg.sender) {\n        _minter = minter;\n    }\n\n    function getMinter() public view returns (address) {\n        return _minter;\n    }\n\n    function getCurrentID() public view returns (uint256) {\n        return _tokenId.current();\n    }\n}\n",
  "sourcePath": "/Users/xiangzhengfeng/Desktop/mine/project/pixels-metavers/contracts/PMT721.sol",
  "ast": {
    "absolutePath": "/Users/xiangzhengfeng/Desktop/mine/project/pixels-metavers/contracts/PMT721.sol",
    "exportedSymbols": {
      "Address": [
        1941
      ],
      "Context": [
        1963
      ],
      "Counters": [
        2037
      ],
      "ERC165": [
        2264
      ],
      "ERC721": [
        1483
      ],
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ],
      "IERC721Metadata": [
        1644
      ],
      "IERC721Receiver": [
        1617
      ],
      "PMT721": [
        184
      ],
      "Strings": [
        2240
      ]
    },
    "id": 185,
    "license": "GPL-3.0",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 60,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "36:23:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 61,
        "nodeType": "ImportDirective",
        "scope": 185,
        "sourceUnit": 1484,
        "src": "61:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 62,
        "nodeType": "ImportDirective",
        "scope": 185,
        "sourceUnit": 2038,
        "src": "119:52:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 63,
              "name": "ERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1483,
              "src": "192:6:2"
            },
            "id": 64,
            "nodeType": "InheritanceSpecifier",
            "src": "192:6:2"
          }
        ],
        "contractDependencies": [
          1483,
          1599,
          1644,
          1963,
          2264,
          2276
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 184,
        "linearizedBaseContracts": [
          184,
          1483,
          1644,
          1599,
          2264,
          2276,
          1963
        ],
        "name": "PMT721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 68,
            "libraryName": {
              "id": 65,
              "name": "Counters",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2037,
              "src": "211:8:2"
            },
            "nodeType": "UsingForDirective",
            "src": "205:36:2",
            "typeName": {
              "id": 67,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 66,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1969,
                "src": "224:16:2"
              },
              "referencedDeclaration": 1969,
              "src": "224:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 71,
            "mutability": "mutable",
            "name": "_tokenId",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "246:33:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1969_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 70,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 69,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1969,
                "src": "246:16:2"
              },
              "referencedDeclaration": 1969,
              "src": "246:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 73,
            "mutability": "mutable",
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "285:14:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 72,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "285:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 75,
            "mutability": "mutable",
            "name": "_minter",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "305:15:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 74,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "305:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "361:78:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 80,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "379:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 81,
                          "name": "_minter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 75,
                          "src": "387:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "379:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79204d696e7465722043616e20446f20497421",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "396:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7",
                          "typeString": "literal_string \"Only Minter Can Do It!\""
                        },
                        "value": "Only Minter Can Do It!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7",
                          "typeString": "literal_string \"Only Minter Can Do It!\""
                        }
                      ],
                      "id": 79,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "371:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "371:50:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "371:50:2"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "431:1:2"
                }
              ]
            },
            "id": 88,
            "name": "MustMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "347:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "346:14:2"
            },
            "src": "327:112:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 100,
              "nodeType": "Block",
              "src": "478:76:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 93,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 90,
                          "src": "496:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 94,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "504:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "496:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79204f776e65722043616e20446f20497421",
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "512:23:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a",
                          "typeString": "literal_string \"Only Owner Can Do It!\""
                        },
                        "value": "Only Owner Can Do It!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a",
                          "typeString": "literal_string \"Only Owner Can Do It!\""
                        }
                      ],
                      "id": 92,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "488:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "488:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "488:48:2"
                },
                {
                  "id": 99,
                  "nodeType": "PlaceholderStatement",
                  "src": "546:1:2"
                }
              ]
            },
            "id": 101,
            "name": "MustOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "464:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "464:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "463:14:2"
            },
            "src": "445:109:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 113,
              "nodeType": "Block",
              "src": "606:36:2",
              "statements": [
                {
                  "expression": {
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 108,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "616:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 109,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "625:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "625:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "616:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 112,
                  "nodeType": "ExpressionStatement",
                  "src": "616:19:2"
                }
              ]
            },
            "id": 114,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "506978656c734d65746176657273",
                    "id": 104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "581:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_69e67cf8bf6176166586a072463a3c2642aa02c0dcdba0459addbdab7fc4c217",
                      "typeString": "literal_string \"PixelsMetavers\""
                    },
                    "value": "PixelsMetavers"
                  },
                  {
                    "hexValue": "504d54",
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "599:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_0d7e2e6d931d17c7cd37fab2b0574b4da6412441de289b64253b319a38c709b0",
                      "typeString": "literal_string \"PMT\""
                    },
                    "value": "PMT"
                  }
                ],
                "id": 106,
                "modifierName": {
                  "id": 103,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1483,
                  "src": "574:6:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "574:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "571:2:2"
            },
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:2"
            },
            "scope": 184,
            "src": "560:82:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 138,
              "nodeType": "Block",
              "src": "694:109:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "704:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1995,
                      "src": "704:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1969_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "704:20:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125,
                  "nodeType": "ExpressionStatement",
                  "src": "704:20:2"
                },
                {
                  "assignments": [
                    127
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 127,
                      "mutability": "mutable",
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "734:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 126,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "734:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 131,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 128,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "747:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 129,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1981,
                      "src": "747:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1969_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "734:31:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 133,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "781:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "781:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 135,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "793:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 132,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1265,
                      "src": "775:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "775:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "775:21:2"
                }
              ]
            },
            "functionSelector": "1249c58b",
            "id": 139,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 117,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "682:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "682:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 119,
                "modifierName": {
                  "id": 116,
                  "name": "MustMinter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 88,
                  "src": "671:10:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "671:22:2"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "661:2:2"
            },
            "returnParameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "694:0:2"
            },
            "scope": 184,
            "src": "648:155:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 150,
              "nodeType": "Block",
              "src": "863:35:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 147,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "888:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 146,
                      "name": "_exists",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1123,
                      "src": "880:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) view returns (bool)"
                      }
                    },
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:11:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 145,
                  "id": 149,
                  "nodeType": "Return",
                  "src": "873:18:2"
                }
              ]
            },
            "functionSelector": "342de179",
            "id": 151,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exits",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "824:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "824:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "823:12:2"
            },
            "returnParameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "857:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "857:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "856:6:2"
            },
            "scope": 184,
            "src": "809:89:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 164,
              "nodeType": "Block",
              "src": "968:33:2",
              "statements": [
                {
                  "expression": {
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 160,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "978:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 161,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 153,
                      "src": "988:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "978:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "978:16:2"
                }
              ]
            },
            "functionSelector": "fca3b5aa",
            "id": 165,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 156,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "956:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "956:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 158,
                "modifierName": {
                  "id": 155,
                  "name": "MustOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 101,
                  "src": "946:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "946:21:2"
              }
            ],
            "name": "setMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "mutability": "mutable",
                  "name": "minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 165,
                  "src": "923:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "922:16:2"
            },
            "returnParameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "968:0:2"
            },
            "scope": 184,
            "src": "904:97:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 172,
              "nodeType": "Block",
              "src": "1058:31:2",
              "statements": [
                {
                  "expression": {
                    "id": 170,
                    "name": "_minter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 75,
                    "src": "1075:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 169,
                  "id": 171,
                  "nodeType": "Return",
                  "src": "1068:14:2"
                }
              ]
            },
            "functionSelector": "f3667517",
            "id": 173,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 166,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1025:2:2"
            },
            "returnParameters": {
              "id": 169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 168,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 173,
                  "src": "1049:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 167,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1048:9:2"
            },
            "scope": 184,
            "src": "1007:82:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 182,
              "nodeType": "Block",
              "src": "1149:42:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 178,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1166:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1981,
                      "src": "1166:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1969_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1166:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 177,
                  "id": 181,
                  "nodeType": "Return",
                  "src": "1159:25:2"
                }
              ]
            },
            "functionSelector": "ef1e7df3",
            "id": 183,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1116:2:2"
            },
            "returnParameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 176,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 183,
                  "src": "1140:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1139:9:2"
            },
            "scope": 184,
            "src": "1095:96:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 185,
        "src": "173:1020:2"
      }
    ],
    "src": "36:1158:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/xiangzhengfeng/Desktop/mine/project/pixels-metavers/contracts/PMT721.sol",
    "exportedSymbols": {
      "Address": [
        1941
      ],
      "Context": [
        1963
      ],
      "Counters": [
        2037
      ],
      "ERC165": [
        2264
      ],
      "ERC721": [
        1483
      ],
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ],
      "IERC721Metadata": [
        1644
      ],
      "IERC721Receiver": [
        1617
      ],
      "PMT721": [
        184
      ],
      "Strings": [
        2240
      ]
    },
    "id": 185,
    "license": "GPL-3.0",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 60,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "36:23:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 61,
        "nodeType": "ImportDirective",
        "scope": 185,
        "sourceUnit": 1484,
        "src": "61:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 62,
        "nodeType": "ImportDirective",
        "scope": 185,
        "sourceUnit": 2038,
        "src": "119:52:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 63,
              "name": "ERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1483,
              "src": "192:6:2"
            },
            "id": 64,
            "nodeType": "InheritanceSpecifier",
            "src": "192:6:2"
          }
        ],
        "contractDependencies": [
          1483,
          1599,
          1644,
          1963,
          2264,
          2276
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 184,
        "linearizedBaseContracts": [
          184,
          1483,
          1644,
          1599,
          2264,
          2276,
          1963
        ],
        "name": "PMT721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 68,
            "libraryName": {
              "id": 65,
              "name": "Counters",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2037,
              "src": "211:8:2"
            },
            "nodeType": "UsingForDirective",
            "src": "205:36:2",
            "typeName": {
              "id": 67,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 66,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1969,
                "src": "224:16:2"
              },
              "referencedDeclaration": 1969,
              "src": "224:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 71,
            "mutability": "mutable",
            "name": "_tokenId",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "246:33:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1969_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 70,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 69,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1969,
                "src": "246:16:2"
              },
              "referencedDeclaration": 1969,
              "src": "246:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 73,
            "mutability": "mutable",
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "285:14:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 72,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "285:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 75,
            "mutability": "mutable",
            "name": "_minter",
            "nodeType": "VariableDeclaration",
            "scope": 184,
            "src": "305:15:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 74,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "305:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "361:78:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 80,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "379:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 81,
                          "name": "_minter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 75,
                          "src": "387:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "379:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79204d696e7465722043616e20446f20497421",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "396:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7",
                          "typeString": "literal_string \"Only Minter Can Do It!\""
                        },
                        "value": "Only Minter Can Do It!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2482c0c62198985605370c66912f4fbc2cadba3b4ceccd3bd07d8497dfc965d7",
                          "typeString": "literal_string \"Only Minter Can Do It!\""
                        }
                      ],
                      "id": 79,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "371:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "371:50:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "371:50:2"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "431:1:2"
                }
              ]
            },
            "id": 88,
            "name": "MustMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "347:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "346:14:2"
            },
            "src": "327:112:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 100,
              "nodeType": "Block",
              "src": "478:76:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 93,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 90,
                          "src": "496:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 94,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "504:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "496:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79204f776e65722043616e20446f20497421",
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "512:23:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a",
                          "typeString": "literal_string \"Only Owner Can Do It!\""
                        },
                        "value": "Only Owner Can Do It!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a521e30293fa21c099bf71672b9164f19fb4bc5b6b2ba026007df1172f90277a",
                          "typeString": "literal_string \"Only Owner Can Do It!\""
                        }
                      ],
                      "id": 92,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "488:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "488:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "488:48:2"
                },
                {
                  "id": 99,
                  "nodeType": "PlaceholderStatement",
                  "src": "546:1:2"
                }
              ]
            },
            "id": 101,
            "name": "MustOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "464:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "464:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "463:14:2"
            },
            "src": "445:109:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 113,
              "nodeType": "Block",
              "src": "606:36:2",
              "statements": [
                {
                  "expression": {
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 108,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "616:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 109,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "625:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "625:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "616:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 112,
                  "nodeType": "ExpressionStatement",
                  "src": "616:19:2"
                }
              ]
            },
            "id": 114,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "506978656c734d65746176657273",
                    "id": 104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "581:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_69e67cf8bf6176166586a072463a3c2642aa02c0dcdba0459addbdab7fc4c217",
                      "typeString": "literal_string \"PixelsMetavers\""
                    },
                    "value": "PixelsMetavers"
                  },
                  {
                    "hexValue": "504d54",
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "599:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_0d7e2e6d931d17c7cd37fab2b0574b4da6412441de289b64253b319a38c709b0",
                      "typeString": "literal_string \"PMT\""
                    },
                    "value": "PMT"
                  }
                ],
                "id": 106,
                "modifierName": {
                  "id": 103,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1483,
                  "src": "574:6:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "574:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "571:2:2"
            },
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:2"
            },
            "scope": 184,
            "src": "560:82:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 138,
              "nodeType": "Block",
              "src": "694:109:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "704:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1995,
                      "src": "704:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1969_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "704:20:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125,
                  "nodeType": "ExpressionStatement",
                  "src": "704:20:2"
                },
                {
                  "assignments": [
                    127
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 127,
                      "mutability": "mutable",
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "734:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 126,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "734:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 131,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 128,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "747:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 129,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1981,
                      "src": "747:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1969_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "734:31:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 133,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "781:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "781:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 135,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "793:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 132,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1265,
                      "src": "775:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "775:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "775:21:2"
                }
              ]
            },
            "functionSelector": "1249c58b",
            "id": 139,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 117,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "682:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "682:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 119,
                "modifierName": {
                  "id": 116,
                  "name": "MustMinter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 88,
                  "src": "671:10:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "671:22:2"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "661:2:2"
            },
            "returnParameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "694:0:2"
            },
            "scope": 184,
            "src": "648:155:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 150,
              "nodeType": "Block",
              "src": "863:35:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 147,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "888:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 146,
                      "name": "_exists",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1123,
                      "src": "880:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) view returns (bool)"
                      }
                    },
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:11:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 145,
                  "id": 149,
                  "nodeType": "Return",
                  "src": "873:18:2"
                }
              ]
            },
            "functionSelector": "342de179",
            "id": 151,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exits",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "824:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "824:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "823:12:2"
            },
            "returnParameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "857:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "857:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "856:6:2"
            },
            "scope": 184,
            "src": "809:89:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 164,
              "nodeType": "Block",
              "src": "968:33:2",
              "statements": [
                {
                  "expression": {
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 160,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "978:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 161,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 153,
                      "src": "988:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "978:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "978:16:2"
                }
              ]
            },
            "functionSelector": "fca3b5aa",
            "id": 165,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 156,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "956:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "956:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 158,
                "modifierName": {
                  "id": 155,
                  "name": "MustOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 101,
                  "src": "946:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "946:21:2"
              }
            ],
            "name": "setMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "mutability": "mutable",
                  "name": "minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 165,
                  "src": "923:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "922:16:2"
            },
            "returnParameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "968:0:2"
            },
            "scope": 184,
            "src": "904:97:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 172,
              "nodeType": "Block",
              "src": "1058:31:2",
              "statements": [
                {
                  "expression": {
                    "id": 170,
                    "name": "_minter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 75,
                    "src": "1075:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 169,
                  "id": 171,
                  "nodeType": "Return",
                  "src": "1068:14:2"
                }
              ]
            },
            "functionSelector": "f3667517",
            "id": 173,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 166,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1025:2:2"
            },
            "returnParameters": {
              "id": 169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 168,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 173,
                  "src": "1049:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 167,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1048:9:2"
            },
            "scope": 184,
            "src": "1007:82:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 182,
              "nodeType": "Block",
              "src": "1149:42:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 178,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1166:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1981,
                      "src": "1166:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1969_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1969_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1166:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 177,
                  "id": 181,
                  "nodeType": "Return",
                  "src": "1159:25:2"
                }
              ]
            },
            "functionSelector": "ef1e7df3",
            "id": 183,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1116:2:2"
            },
            "returnParameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 176,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 183,
                  "src": "1140:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1139:9:2"
            },
            "scope": 184,
            "src": "1095:96:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 185,
        "src": "173:1020:2"
      }
    ],
    "src": "36:1158:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xA2e215f451036f3c6295Ce0d6B021ed8DC75064E",
      "transactionHash": "0x57bde4c2465e2b00e1d12d633195ca70a6a433741f9a15e6ed29eb141e463ec5"
    }
  },
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T12:02:14.765Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}