const context = {
  "contractName": "Context",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26e8b38a7ac8e7b4463af00cf7fff1bf48ae9875765bf4f7751e100124d0bc8c\",\"dweb:/ipfs/QmWcsmkVr24xmmjfnBQZoemFniXjj3vwT78Cz6uqZW1Hux\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/Context.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
    "exportedSymbols": {
      "Context": [
        1963
      ]
    },
    "id": 1964,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1943,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:9"
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1944,
          "nodeType": "StructuredDocumentation",
          "src": "58:496:9",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "id": 1963,
        "linearizedBaseContracts": [
          1963
        ],
        "name": "Context",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1952,
              "nodeType": "Block",
              "src": "649:34:9",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1949,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "666:3:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1950,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "666:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1948,
                  "id": 1951,
                  "nodeType": "Return",
                  "src": "659:17:9"
                }
              ]
            },
            "id": 1953,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:2:9"
            },
            "returnParameters": {
              "id": 1948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1947,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1953,
                  "src": "640:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "640:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "639:9:9"
            },
            "scope": 1963,
            "src": "587:96:9",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1961,
              "nodeType": "Block",
              "src": "756:32:9",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1958,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "773:3:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "773:8:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 1957,
                  "id": 1960,
                  "nodeType": "Return",
                  "src": "766:15:9"
                }
              ]
            },
            "id": 1962,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:9"
            },
            "returnParameters": {
              "id": 1957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1956,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1962,
                  "src": "740:14:9",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1955,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "739:16:9"
            },
            "scope": 1963,
            "src": "689:99:9",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 1964,
        "src": "555:235:9"
      }
    ],
    "src": "33:758:9"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
    "exportedSymbols": {
      "Context": [
        1963
      ]
    },
    "id": 1964,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1943,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:9"
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1944,
          "nodeType": "StructuredDocumentation",
          "src": "58:496:9",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "id": 1963,
        "linearizedBaseContracts": [
          1963
        ],
        "name": "Context",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1952,
              "nodeType": "Block",
              "src": "649:34:9",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1949,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "666:3:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1950,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "666:10:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1948,
                  "id": 1951,
                  "nodeType": "Return",
                  "src": "659:17:9"
                }
              ]
            },
            "id": 1953,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:2:9"
            },
            "returnParameters": {
              "id": 1948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1947,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1953,
                  "src": "640:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "640:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "639:9:9"
            },
            "scope": 1963,
            "src": "587:96:9",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1961,
              "nodeType": "Block",
              "src": "756:32:9",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1958,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "773:3:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "773:8:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 1957,
                  "id": 1960,
                  "nodeType": "Return",
                  "src": "766:15:9"
                }
              ]
            },
            "id": 1962,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "706:2:9"
            },
            "returnParameters": {
              "id": 1957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1956,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1962,
                  "src": "740:14:9",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1955,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "739:16:9"
            },
            "scope": 1963,
            "src": "689:99:9",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 1964,
        "src": "555:235:9"
      }
    ],
    "src": "33:758:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.588Z",
  "devdoc": {
    "details": "Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.",
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}