const erc165 = {
  "contractName": "ERC165",
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ``` Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":\"ERC165\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x5718c5df9bd67ac68a796961df938821bb5dc0cd4c6118d77e9145afb187409b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d10e1d9b26042424789246603906ad06143bf9a928f4e99de8b5e3bdc662f549\",\"dweb:/ipfs/Qmejonoaj5MLekPus229rJQHcC6E9dz2xorjHJR84fMfmn\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"./IERC165.sol\";\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/introspection/ERC165.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/introspection/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        2264
      ],
      "IERC165": [
        2276
      ]
    },
    "id": 2265,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2242,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:12"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 2243,
        "nodeType": "ImportDirective",
        "scope": 2265,
        "sourceUnit": 2277,
        "src": "58:23:12",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 2245,
              "name": "IERC165",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2276,
              "src": "688:7:12"
            },
            "id": 2246,
            "nodeType": "InheritanceSpecifier",
            "src": "688:7:12"
          }
        ],
        "contractDependencies": [
          2276
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 2244,
          "nodeType": "StructuredDocumentation",
          "src": "83:576:12",
          "text": " @dev Implementation of the {IERC165} interface.\n Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n for the additional interface id that will be supported. For example:\n ```solidity\n function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n }\n ```\n Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation."
        },
        "fullyImplemented": true,
        "id": 2264,
        "linearizedBaseContracts": [
          2264,
          2276
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "baseFunctions": [
              2275
            ],
            "body": {
              "id": 2262,
              "nodeType": "Block",
              "src": "854:64:12",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 2260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2255,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2249,
                      "src": "871:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 2257,
                            "name": "IERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2276,
                            "src": "891:7:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$2276_$",
                              "typeString": "type(contract IERC165)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$2276_$",
                              "typeString": "type(contract IERC165)"
                            }
                          ],
                          "id": 2256,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967269,
                          "src": "886:4:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 2258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "886:13:12",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$2276",
                          "typeString": "type(contract IERC165)"
                        }
                      },
                      "id": 2259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "interfaceId",
                      "nodeType": "MemberAccess",
                      "src": "886:25:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "871:40:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2254,
                  "id": 2261,
                  "nodeType": "Return",
                  "src": "864:47:12"
                }
              ]
            },
            "documentation": {
              "id": 2247,
              "nodeType": "StructuredDocumentation",
              "src": "702:56:12",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "id": 2263,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2251,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "830:8:12"
            },
            "parameters": {
              "id": 2250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2249,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2263,
                  "src": "790:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2248,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "790:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "789:20:12"
            },
            "returnParameters": {
              "id": 2254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2253,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2263,
                  "src": "848:4:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2252,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "848:4:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "847:6:12"
            },
            "scope": 2264,
            "src": "763:155:12",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 2265,
        "src": "660:260:12"
      }
    ],
    "src": "33:888:12"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/introspection/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        2264
      ],
      "IERC165": [
        2276
      ]
    },
    "id": 2265,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2242,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:12"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 2243,
        "nodeType": "ImportDirective",
        "scope": 2265,
        "sourceUnit": 2277,
        "src": "58:23:12",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 2245,
              "name": "IERC165",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2276,
              "src": "688:7:12"
            },
            "id": 2246,
            "nodeType": "InheritanceSpecifier",
            "src": "688:7:12"
          }
        ],
        "contractDependencies": [
          2276
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 2244,
          "nodeType": "StructuredDocumentation",
          "src": "83:576:12",
          "text": " @dev Implementation of the {IERC165} interface.\n Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n for the additional interface id that will be supported. For example:\n ```solidity\n function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n }\n ```\n Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation."
        },
        "fullyImplemented": true,
        "id": 2264,
        "linearizedBaseContracts": [
          2264,
          2276
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "baseFunctions": [
              2275
            ],
            "body": {
              "id": 2262,
              "nodeType": "Block",
              "src": "854:64:12",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 2260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2255,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2249,
                      "src": "871:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 2257,
                            "name": "IERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2276,
                            "src": "891:7:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$2276_$",
                              "typeString": "type(contract IERC165)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$2276_$",
                              "typeString": "type(contract IERC165)"
                            }
                          ],
                          "id": 2256,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967269,
                          "src": "886:4:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 2258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "886:13:12",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$2276",
                          "typeString": "type(contract IERC165)"
                        }
                      },
                      "id": 2259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "interfaceId",
                      "nodeType": "MemberAccess",
                      "src": "886:25:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "871:40:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2254,
                  "id": 2261,
                  "nodeType": "Return",
                  "src": "864:47:12"
                }
              ]
            },
            "documentation": {
              "id": 2247,
              "nodeType": "StructuredDocumentation",
              "src": "702:56:12",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "id": 2263,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2251,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "830:8:12"
            },
            "parameters": {
              "id": 2250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2249,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2263,
                  "src": "790:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2248,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "790:6:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "789:20:12"
            },
            "returnParameters": {
              "id": 2254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2253,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2263,
                  "src": "848:4:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2252,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "848:4:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "847:6:12"
            },
            "scope": 2264,
            "src": "763:155:12",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 2265,
        "src": "660:260:12"
      }
    ],
    "src": "33:888:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.593Z",
  "devdoc": {
    "details": "Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ``` Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.",
    "kind": "dev",
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
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