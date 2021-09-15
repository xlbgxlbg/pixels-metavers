const ierc165 = {
  "contractName": "IERC165",
  "abi": [
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC165 standard, as defined in the https://eips.ethereum.org/EIPS/eip-165[EIP]. Implementers can declare support of contract interfaces, which can then be queried by others ({ERC165Checker}). For an implementation, see {ERC165}.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":\"IERC165\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ]
    },
    "id": 2277,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2266,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:13"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 2267,
          "nodeType": "StructuredDocumentation",
          "src": "58:279:13",
          "text": " @dev Interface of the ERC165 standard, as defined in the\n https://eips.ethereum.org/EIPS/eip-165[EIP].\n Implementers can declare support of contract interfaces, which can then be\n queried by others ({ERC165Checker}).\n For an implementation, see {ERC165}."
        },
        "fullyImplemented": false,
        "id": 2276,
        "linearizedBaseContracts": [
          2276
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 2268,
              "nodeType": "StructuredDocumentation",
              "src": "362:340:13",
              "text": " @dev Returns true if this contract implements the interface defined by\n `interfaceId`. See the corresponding\n https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n to learn more about how these ids are created.\n This function call must use less than 30 000 gas."
            },
            "functionSelector": "01ffc9a7",
            "id": 2275,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2270,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2275,
                  "src": "734:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2269,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "734:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "733:20:13"
            },
            "returnParameters": {
              "id": 2274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2273,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2275,
                  "src": "777:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2272,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "776:6:13"
            },
            "scope": 2276,
            "src": "707:76:13",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 2277,
        "src": "338:447:13"
      }
    ],
    "src": "33:753:13"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ]
    },
    "id": 2277,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2266,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:13"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 2267,
          "nodeType": "StructuredDocumentation",
          "src": "58:279:13",
          "text": " @dev Interface of the ERC165 standard, as defined in the\n https://eips.ethereum.org/EIPS/eip-165[EIP].\n Implementers can declare support of contract interfaces, which can then be\n queried by others ({ERC165Checker}).\n For an implementation, see {ERC165}."
        },
        "fullyImplemented": false,
        "id": 2276,
        "linearizedBaseContracts": [
          2276
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 2268,
              "nodeType": "StructuredDocumentation",
              "src": "362:340:13",
              "text": " @dev Returns true if this contract implements the interface defined by\n `interfaceId`. See the corresponding\n https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n to learn more about how these ids are created.\n This function call must use less than 30 000 gas."
            },
            "functionSelector": "01ffc9a7",
            "id": 2275,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2270,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2275,
                  "src": "734:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2269,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "734:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "733:20:13"
            },
            "returnParameters": {
              "id": 2274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2273,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2275,
                  "src": "777:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2272,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "776:6:13"
            },
            "scope": 2276,
            "src": "707:76:13",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 2277,
        "src": "338:447:13"
      }
    ],
    "src": "33:753:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.593Z",
  "devdoc": {
    "details": "Interface of the ERC165 standard, as defined in the https://eips.ethereum.org/EIPS/eip-165[EIP]. Implementers can declare support of contract interfaces, which can then be queried by others ({ERC165Checker}). For an implementation, see {ERC165}.",
    "kind": "dev",
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
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