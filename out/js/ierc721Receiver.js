const ierc721Receiver = {
  "contractName": "IERC721Receiver",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "from",
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
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support safeTransfers from ERC721 asset contracts.\",\"kind\":\"dev\",\"methods\":{\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\"}},\"title\":\"ERC721 token receiver interface\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":\"IERC721Receiver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xd9517254724276e2e8de3769183c1f738f445f0095c26fd9b86d3c6687e887b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e604bcdcd5e5b2fb299ad09769cde6db19d5aa1929d1b5e939234a0f10d7eb8\",\"dweb:/ipfs/Qmd8hXE3GZfBHuWx3RNiYgFW2ci7KvHtib8DiwzJ2dgo9V\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ninterface IERC721Receiver {\n    /**\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n     * by `operator` from `from`, this function is called.\n     *\n     * It must return its Solidity selector to confirm the token transfer.\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n     *\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n     */\n    function onERC721Received(\n        address operator,\n        address from,\n        uint256 tokenId,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n",
  "sourcePath": "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        1617
      ]
    },
    "id": 1618,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1601,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:6"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 1602,
          "nodeType": "StructuredDocumentation",
          "src": "58:152:6",
          "text": " @title ERC721 token receiver interface\n @dev Interface for any contract that wants to support safeTransfers\n from ERC721 asset contracts."
        },
        "fullyImplemented": false,
        "id": 1617,
        "linearizedBaseContracts": [
          1617
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1603,
              "nodeType": "StructuredDocumentation",
              "src": "243:485:6",
              "text": " @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n by `operator` from `from`, this function is called.\n It must return its Solidity selector to confirm the token transfer.\n If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "id": 1616,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1605,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "768:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1604,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "768:7:6",
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
                  "id": 1607,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "794:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:6",
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
                  "id": 1609,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "816:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "816:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1611,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "841:19:6",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1610,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "758:108:6"
            },
            "returnParameters": {
              "id": 1615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1614,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "885:6:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 1613,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "884:8:6"
            },
            "scope": 1617,
            "src": "733:160:6",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1618,
        "src": "211:684:6"
      }
    ],
    "src": "33:863:6"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        1617
      ]
    },
    "id": 1618,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1601,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:6"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 1602,
          "nodeType": "StructuredDocumentation",
          "src": "58:152:6",
          "text": " @title ERC721 token receiver interface\n @dev Interface for any contract that wants to support safeTransfers\n from ERC721 asset contracts."
        },
        "fullyImplemented": false,
        "id": 1617,
        "linearizedBaseContracts": [
          1617
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1603,
              "nodeType": "StructuredDocumentation",
              "src": "243:485:6",
              "text": " @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n by `operator` from `from`, this function is called.\n It must return its Solidity selector to confirm the token transfer.\n If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "id": 1616,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1605,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "768:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1604,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "768:7:6",
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
                  "id": 1607,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "794:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:6",
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
                  "id": 1609,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "816:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "816:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1611,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "841:19:6",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1610,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "758:108:6"
            },
            "returnParameters": {
              "id": 1615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1614,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1616,
                  "src": "885:6:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 1613,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "885:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "884:8:6"
            },
            "scope": 1617,
            "src": "733:160:6",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1618,
        "src": "211:684:6"
      }
    ],
    "src": "33:863:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.583Z",
  "devdoc": {
    "details": "Interface for any contract that wants to support safeTransfers from ERC721 asset contracts.",
    "kind": "dev",
    "methods": {
      "onERC721Received(address,address,uint256,bytes)": {
        "details": "Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`."
      }
    },
    "title": "ERC721 token receiver interface",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}