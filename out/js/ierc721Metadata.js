const ierc721Metadata = {
  "contractName": "IERC721Metadata",
  "abi": [
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
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
      "type": "function"
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
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
          "name": "data",
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
          "name": "_approved",
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
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"See https://eips.ethereum.org/EIPS/eip-721\",\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"name()\":{\"details\":\"Returns the token collection name.\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Returns the token collection symbol.\"},\"tokenURI(uint256)\":{\"details\":\"Returns the Uniform Resource Identifier (URI) for `tokenId` token.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"title\":\"ERC-721 Non-Fungible Token Standard, optional metadata extension\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":\"IERC721Metadata\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf101e8720213560fab41104d53b3cc7ba0456ef3a98455aa7f022391783144a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e7820bcf567e6892d937c3cb10db263a4042e446799bca602535868d822384e\",\"dweb:/ipfs/QmPG2oeDjKncqsEeyYGjAN7CwAJmMgHterXGGnpzhha4z7\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xd32fb7f530a914b1083d10a6bed3a586f2451952fec04fe542bcc670a82f7ba5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af63ab940a34687c45f0ad84960b048fc5f49330c92ccb422db7822a444733b9\",\"dweb:/ipfs/QmUShaQEu8HS1GjDnsMJQ8jkZEBrecn6NuDZ3pfjY1gVck\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"../IERC721.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Metadata is IERC721 {\n    /**\n     * @dev Returns the token collection name.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the token collection symbol.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n     */\n    function tokenURI(uint256 tokenId) external view returns (string memory);\n}\n",
  "sourcePath": "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ],
      "IERC721Metadata": [
        1644
      ]
    },
    "id": 1645,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1619,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:7"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "../IERC721.sol",
        "id": 1620,
        "nodeType": "ImportDirective",
        "scope": 1645,
        "sourceUnit": 1600,
        "src": "58:24:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1622,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1599,
              "src": "247:7:7"
            },
            "id": 1623,
            "nodeType": "InheritanceSpecifier",
            "src": "247:7:7"
          }
        ],
        "contractDependencies": [
          1599,
          2276
        ],
        "contractKind": "interface",
        "documentation": {
          "id": 1621,
          "nodeType": "StructuredDocumentation",
          "src": "84:133:7",
          "text": " @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n @dev See https://eips.ethereum.org/EIPS/eip-721"
        },
        "fullyImplemented": false,
        "id": 1644,
        "linearizedBaseContracts": [
          1644,
          1599,
          2276
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1624,
              "nodeType": "StructuredDocumentation",
              "src": "261:58:7",
              "text": " @dev Returns the token collection name."
            },
            "functionSelector": "06fdde03",
            "id": 1629,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:2:7"
            },
            "returnParameters": {
              "id": 1628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1627,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1629,
                  "src": "363:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1626,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "362:15:7"
            },
            "scope": 1644,
            "src": "324:54:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1630,
              "nodeType": "StructuredDocumentation",
              "src": "384:60:7",
              "text": " @dev Returns the token collection symbol."
            },
            "functionSelector": "95d89b41",
            "id": 1635,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "464:2:7"
            },
            "returnParameters": {
              "id": 1634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1633,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1635,
                  "src": "490:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1632,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "490:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "489:15:7"
            },
            "scope": 1644,
            "src": "449:56:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1636,
              "nodeType": "StructuredDocumentation",
              "src": "511:90:7",
              "text": " @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token."
            },
            "functionSelector": "c87b56dd",
            "id": 1643,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1638,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1643,
                  "src": "624:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:17:7"
            },
            "returnParameters": {
              "id": 1642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1641,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1643,
                  "src": "664:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1640,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "663:15:7"
            },
            "scope": 1644,
            "src": "606:73:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1645,
        "src": "218:463:7"
      }
    ],
    "src": "33:649:7"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ],
      "IERC721Metadata": [
        1644
      ]
    },
    "id": 1645,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1619,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:7"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "../IERC721.sol",
        "id": 1620,
        "nodeType": "ImportDirective",
        "scope": 1645,
        "sourceUnit": 1600,
        "src": "58:24:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1622,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1599,
              "src": "247:7:7"
            },
            "id": 1623,
            "nodeType": "InheritanceSpecifier",
            "src": "247:7:7"
          }
        ],
        "contractDependencies": [
          1599,
          2276
        ],
        "contractKind": "interface",
        "documentation": {
          "id": 1621,
          "nodeType": "StructuredDocumentation",
          "src": "84:133:7",
          "text": " @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n @dev See https://eips.ethereum.org/EIPS/eip-721"
        },
        "fullyImplemented": false,
        "id": 1644,
        "linearizedBaseContracts": [
          1644,
          1599,
          2276
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1624,
              "nodeType": "StructuredDocumentation",
              "src": "261:58:7",
              "text": " @dev Returns the token collection name."
            },
            "functionSelector": "06fdde03",
            "id": 1629,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:2:7"
            },
            "returnParameters": {
              "id": 1628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1627,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1629,
                  "src": "363:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1626,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "362:15:7"
            },
            "scope": 1644,
            "src": "324:54:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1630,
              "nodeType": "StructuredDocumentation",
              "src": "384:60:7",
              "text": " @dev Returns the token collection symbol."
            },
            "functionSelector": "95d89b41",
            "id": 1635,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "464:2:7"
            },
            "returnParameters": {
              "id": 1634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1633,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1635,
                  "src": "490:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1632,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "490:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "489:15:7"
            },
            "scope": 1644,
            "src": "449:56:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1636,
              "nodeType": "StructuredDocumentation",
              "src": "511:90:7",
              "text": " @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token."
            },
            "functionSelector": "c87b56dd",
            "id": 1643,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1638,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1643,
                  "src": "624:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:17:7"
            },
            "returnParameters": {
              "id": 1642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1641,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1643,
                  "src": "664:13:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1640,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "663:15:7"
            },
            "scope": 1644,
            "src": "606:73:7",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1645,
        "src": "218:463:7"
      }
    ],
    "src": "33:649:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.584Z",
  "devdoc": {
    "details": "See https://eips.ethereum.org/EIPS/eip-721",
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the number of tokens in ``owner``'s account."
      },
      "getApproved(uint256)": {
        "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
      },
      "name()": {
        "details": "Returns the token collection name."
      },
      "ownerOf(uint256)": {
        "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Returns the token collection symbol."
      },
      "tokenURI(uint256)": {
        "details": "Returns the Uniform Resource Identifier (URI) for `tokenId` token."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
      }
    },
    "title": "ERC-721 Non-Fungible Token Standard, optional metadata extension",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}