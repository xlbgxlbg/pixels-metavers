const strings = {
  "contractName": "Strings",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"String operations.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/Strings.sol\":\"Strings\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x391d3ba97ab6856a16b225d6ee29617ad15ff00db70f3b4df1ab5ea33aa47c9d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d636ba90bbbeed04a1ea7fe9ec2466757e30fd38ba2ca173636dbf69a518735e\",\"dweb:/ipfs/QmQwCB2BHnEuYR22PYt9HkpbgeFDhq4rHmaYqAZbX3WRC7\"]}},\"version\":1}",
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122059cbc0fa3febd51933ba1ec1b15d5a0c0f0808817a68def7193edbefd1a1409364736f6c63430008000033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122059cbc0fa3febd51933ba1ec1b15d5a0c0f0808817a68def7193edbefd1a1409364736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "93:1885:11:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "93:1885:11:-:0;;;;;;;;",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = \"0123456789abcdef\";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI's implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return \"0\";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return \"0x00\";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = \"0\";\n        buffer[1] = \"x\";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, \"Strings: hex length insufficient\");\n        return string(buffer);\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/Strings.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
    "exportedSymbols": {
      "Strings": [
        2240
      ]
    },
    "id": 2241,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2039,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:11"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 2040,
          "nodeType": "StructuredDocumentation",
          "src": "58:34:11",
          "text": " @dev String operations."
        },
        "fullyImplemented": true,
        "id": 2240,
        "linearizedBaseContracts": [
          2240
        ],
        "name": "Strings",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2043,
            "mutability": "constant",
            "name": "_HEX_SYMBOLS",
            "nodeType": "VariableDeclaration",
            "scope": 2240,
            "src": "115:58:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes16",
              "typeString": "bytes16"
            },
            "typeName": {
              "id": 2041,
              "name": "bytes16",
              "nodeType": "ElementaryTypeName",
              "src": "115:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes16",
                "typeString": "bytes16"
              }
            },
            "value": {
              "hexValue": "30313233343536373839616263646566",
              "id": 2042,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "155:18:11",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_cb29997ed99ead0db59ce4d12b7d3723198c827273e5796737c926d78019c39f",
                "typeString": "literal_string \"0123456789abcdef\""
              },
              "value": "0123456789abcdef"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2121,
              "nodeType": "Block",
              "src": "346:632:11",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2051,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "548:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "557:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "548:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2057,
                  "nodeType": "IfStatement",
                  "src": "544:51:11",
                  "trueBody": {
                    "id": 2056,
                    "nodeType": "Block",
                    "src": "560:35:11",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 2054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "581:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                            "typeString": "literal_string \"0\""
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 2050,
                        "id": 2055,
                        "nodeType": "Return",
                        "src": "574:10:11"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2059
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2059,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "604:12:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2058,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "604:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2061,
                  "initialValue": {
                    "id": 2060,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2046,
                    "src": "619:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "604:20:11"
                },
                {
                  "assignments": [
                    2063
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2063,
                      "mutability": "mutable",
                      "name": "digits",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "634:14:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2062,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "634:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2064,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "634:14:11"
                },
                {
                  "body": {
                    "id": 2075,
                    "nodeType": "Block",
                    "src": "676:57:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "690:8:11",
                          "subExpression": {
                            "id": 2068,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2063,
                            "src": "690:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2070,
                        "nodeType": "ExpressionStatement",
                        "src": "690:8:11"
                      },
                      {
                        "expression": {
                          "id": 2073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2071,
                            "name": "temp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2059,
                            "src": "712:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "hexValue": "3130",
                            "id": 2072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "720:2:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "src": "712:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2074,
                        "nodeType": "ExpressionStatement",
                        "src": "712:10:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2065,
                      "name": "temp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2059,
                      "src": "665:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "673:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "665:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2076,
                  "nodeType": "WhileStatement",
                  "src": "658:75:11"
                },
                {
                  "assignments": [
                    2078
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2078,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "742:19:11",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2077,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "742:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2083,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 2081,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2063,
                        "src": "774:6:11",
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
                      "id": 2080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "764:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 2079,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "768:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 2082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "764:17:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "742:39:11"
                },
                {
                  "body": {
                    "id": 2114,
                    "nodeType": "Block",
                    "src": "810:131:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2089,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2087,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2063,
                            "src": "824:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 2088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "834:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "824:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2090,
                        "nodeType": "ExpressionStatement",
                        "src": "824:11:11"
                      },
                      {
                        "expression": {
                          "id": 2108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2091,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2078,
                              "src": "849:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 2093,
                            "indexExpression": {
                              "id": 2092,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2063,
                              "src": "856:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "849:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 2105,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3438",
                                      "id": 2098,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "879:2:11",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_48_by_1",
                                        "typeString": "int_const 48"
                                      },
                                      "value": "48"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 2103,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 2101,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2046,
                                            "src": "892:5:11",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "%",
                                          "rightExpression": {
                                            "hexValue": "3130",
                                            "id": 2102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "900:2:11",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_10_by_1",
                                              "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                          },
                                          "src": "892:10:11",
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
                                        "id": 2100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "884:7:11",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 2099,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "884:7:11",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 2104,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "884:19:11",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "879:24:11",
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
                                  "id": 2097,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "873:5:11",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint8_$",
                                    "typeString": "type(uint8)"
                                  },
                                  "typeName": {
                                    "id": 2096,
                                    "name": "uint8",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "873:5:11",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "873:31:11",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              ],
                              "id": 2095,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "866:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": {
                                "id": 2094,
                                "name": "bytes1",
                                "nodeType": "ElementaryTypeName",
                                "src": "866:6:11",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "866:39:11",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "849:56:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 2109,
                        "nodeType": "ExpressionStatement",
                        "src": "849:56:11"
                      },
                      {
                        "expression": {
                          "id": 2112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2110,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "919:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "hexValue": "3130",
                            "id": 2111,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "928:2:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "src": "919:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2113,
                        "nodeType": "ExpressionStatement",
                        "src": "919:11:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2084,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "798:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "807:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "798:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2115,
                  "nodeType": "WhileStatement",
                  "src": "791:150:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2118,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2078,
                        "src": "964:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 2117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "957:6:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 2116,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "957:6:11",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "957:14:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2050,
                  "id": 2120,
                  "nodeType": "Return",
                  "src": "950:21:11"
                }
              ]
            },
            "documentation": {
              "id": 2044,
              "nodeType": "StructuredDocumentation",
              "src": "180:90:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` decimal representation."
            },
            "id": 2122,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2046,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2122,
                  "src": "293:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "293:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "292:15:11"
            },
            "returnParameters": {
              "id": 2050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2049,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2122,
                  "src": "331:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2048,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "330:15:11"
            },
            "scope": 2240,
            "src": "275:703:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2162,
              "nodeType": "Block",
              "src": "1157:255:11",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2130,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2125,
                      "src": "1171:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1180:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1171:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2136,
                  "nodeType": "IfStatement",
                  "src": "1167:54:11",
                  "trueBody": {
                    "id": 2135,
                    "nodeType": "Block",
                    "src": "1183:38:11",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30783030",
                          "id": 2133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1204:6:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_27489e20a0060b723a1748bdff5e44570ee9fae64141728105692eac6031e8a4",
                            "typeString": "literal_string \"0x00\""
                          },
                          "value": "0x00"
                        },
                        "functionReturnParameters": 2129,
                        "id": 2134,
                        "nodeType": "Return",
                        "src": "1197:13:11"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2138
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2138,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "1230:12:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2137,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1230:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2140,
                  "initialValue": {
                    "id": 2139,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2125,
                    "src": "1245:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1230:20:11"
                },
                {
                  "assignments": [
                    2142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2142,
                      "mutability": "mutable",
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "1260:14:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2141,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1260:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2144,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 2143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1277:1:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1260:18:11"
                },
                {
                  "body": {
                    "id": 2155,
                    "nodeType": "Block",
                    "src": "1306:57:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1320:8:11",
                          "subExpression": {
                            "id": 2148,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2142,
                            "src": "1320:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2150,
                        "nodeType": "ExpressionStatement",
                        "src": "1320:8:11"
                      },
                      {
                        "expression": {
                          "id": 2153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2151,
                            "name": "temp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2138,
                            "src": "1342:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "38",
                            "id": 2152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1351:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "1342:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2154,
                        "nodeType": "ExpressionStatement",
                        "src": "1342:10:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2145,
                      "name": "temp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2138,
                      "src": "1295:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1303:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1295:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2156,
                  "nodeType": "WhileStatement",
                  "src": "1288:75:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2158,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2125,
                        "src": "1391:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 2159,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2142,
                        "src": "1398:6:11",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2157,
                      "name": "toHexString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2163,
                        2239
                      ],
                      "referencedDeclaration": 2239,
                      "src": "1379:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (string memory)"
                      }
                    },
                    "id": 2160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1379:26:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2129,
                  "id": 2161,
                  "nodeType": "Return",
                  "src": "1372:33:11"
                }
              ]
            },
            "documentation": {
              "id": 2123,
              "nodeType": "StructuredDocumentation",
              "src": "984:94:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation."
            },
            "id": 2163,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2125,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "1104:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1104:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1103:15:11"
            },
            "returnParameters": {
              "id": 2129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2128,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "1142:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2127,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1142:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1141:15:11"
            },
            "scope": 2240,
            "src": "1083:329:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2238,
              "nodeType": "Block",
              "src": "1625:351:11",
              "statements": [
                {
                  "assignments": [
                    2174
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2174,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nodeType": "VariableDeclaration",
                      "scope": 2238,
                      "src": "1635:19:11",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2173,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1635:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2183,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 2177,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1667:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 2178,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2168,
                            "src": "1671:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1667:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 2180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1680:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "1667:14:11",
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
                      "id": 2176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1657:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 2175,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1661:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 2182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1657:25:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1635:47:11"
                },
                {
                  "expression": {
                    "id": 2188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2184,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1692:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 2186,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 2185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1699:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1692:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 2187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1704:3:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                        "typeString": "literal_string \"0\""
                      },
                      "value": "0"
                    },
                    "src": "1692:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 2189,
                  "nodeType": "ExpressionStatement",
                  "src": "1692:15:11"
                },
                {
                  "expression": {
                    "id": 2194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2190,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1717:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 2192,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 2191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1724:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1717:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "78",
                      "id": 2193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1729:3:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7521d1cadbcfa91eec65aa16715b94ffc1c9654ba57ea2ef1a2127bca1127a83",
                        "typeString": "literal_string \"x\""
                      },
                      "value": "x"
                    },
                    "src": "1717:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 2195,
                  "nodeType": "ExpressionStatement",
                  "src": "1717:15:11"
                },
                {
                  "body": {
                    "id": 2224,
                    "nodeType": "Block",
                    "src": "1787:87:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2210,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2174,
                              "src": "1801:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 2212,
                            "indexExpression": {
                              "id": 2211,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2197,
                              "src": "1808:1:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1801:9:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 2213,
                              "name": "_HEX_SYMBOLS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2043,
                              "src": "1813:12:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes16",
                                "typeString": "bytes16"
                              }
                            },
                            "id": 2217,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 2216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 2214,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2166,
                                "src": "1826:5:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 2215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1834:3:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "1826:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1813:25:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "1801:37:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 2219,
                        "nodeType": "ExpressionStatement",
                        "src": "1801:37:11"
                      },
                      {
                        "expression": {
                          "id": 2222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2220,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2166,
                            "src": "1852:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 2221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1862:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "1852:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2223,
                        "nodeType": "ExpressionStatement",
                        "src": "1852:11:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2204,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2197,
                      "src": "1775:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 2205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1779:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1775:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2225,
                  "initializationExpression": {
                    "assignments": [
                      2197
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2197,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 2225,
                        "src": "1747:9:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2196,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1747:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2203,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 2202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 2198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1759:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 2199,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2168,
                          "src": "1763:6:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1759:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 2201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1772:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1759:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1747:26:11"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "1782:3:11",
                      "subExpression": {
                        "id": 2207,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2197,
                        "src": "1784:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2209,
                    "nodeType": "ExpressionStatement",
                    "src": "1782:3:11"
                  },
                  "nodeType": "ForStatement",
                  "src": "1742:132:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 2227,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2166,
                          "src": "1891:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 2228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1900:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1891:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537472696e67733a20686578206c656e67746820696e73756666696369656e74",
                        "id": 2230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1903:34:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
                          "typeString": "literal_string \"Strings: hex length insufficient\""
                        },
                        "value": "Strings: hex length insufficient"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
                          "typeString": "literal_string \"Strings: hex length insufficient\""
                        }
                      ],
                      "id": 2226,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1883:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:55:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2232,
                  "nodeType": "ExpressionStatement",
                  "src": "1883:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2235,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1962:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 2234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1955:6:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 2233,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1955:6:11",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1955:14:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2172,
                  "id": 2237,
                  "nodeType": "Return",
                  "src": "1948:21:11"
                }
              ]
            },
            "documentation": {
              "id": 2164,
              "nodeType": "StructuredDocumentation",
              "src": "1418:112:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length."
            },
            "id": 2239,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2166,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1556:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1556:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2168,
                  "mutability": "mutable",
                  "name": "length",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1571:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2167,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1571:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1555:31:11"
            },
            "returnParameters": {
              "id": 2172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2171,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1610:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2170,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1609:15:11"
            },
            "scope": 2240,
            "src": "1535:441:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2241,
        "src": "93:1885:11"
      }
    ],
    "src": "33:1946:11"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
    "exportedSymbols": {
      "Strings": [
        2240
      ]
    },
    "id": 2241,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2039,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:11"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 2040,
          "nodeType": "StructuredDocumentation",
          "src": "58:34:11",
          "text": " @dev String operations."
        },
        "fullyImplemented": true,
        "id": 2240,
        "linearizedBaseContracts": [
          2240
        ],
        "name": "Strings",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2043,
            "mutability": "constant",
            "name": "_HEX_SYMBOLS",
            "nodeType": "VariableDeclaration",
            "scope": 2240,
            "src": "115:58:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes16",
              "typeString": "bytes16"
            },
            "typeName": {
              "id": 2041,
              "name": "bytes16",
              "nodeType": "ElementaryTypeName",
              "src": "115:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes16",
                "typeString": "bytes16"
              }
            },
            "value": {
              "hexValue": "30313233343536373839616263646566",
              "id": 2042,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "155:18:11",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_cb29997ed99ead0db59ce4d12b7d3723198c827273e5796737c926d78019c39f",
                "typeString": "literal_string \"0123456789abcdef\""
              },
              "value": "0123456789abcdef"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2121,
              "nodeType": "Block",
              "src": "346:632:11",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2051,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "548:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "557:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "548:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2057,
                  "nodeType": "IfStatement",
                  "src": "544:51:11",
                  "trueBody": {
                    "id": 2056,
                    "nodeType": "Block",
                    "src": "560:35:11",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 2054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "581:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                            "typeString": "literal_string \"0\""
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 2050,
                        "id": 2055,
                        "nodeType": "Return",
                        "src": "574:10:11"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2059
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2059,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "604:12:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2058,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "604:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2061,
                  "initialValue": {
                    "id": 2060,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2046,
                    "src": "619:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "604:20:11"
                },
                {
                  "assignments": [
                    2063
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2063,
                      "mutability": "mutable",
                      "name": "digits",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "634:14:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2062,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "634:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2064,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "634:14:11"
                },
                {
                  "body": {
                    "id": 2075,
                    "nodeType": "Block",
                    "src": "676:57:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "690:8:11",
                          "subExpression": {
                            "id": 2068,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2063,
                            "src": "690:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2070,
                        "nodeType": "ExpressionStatement",
                        "src": "690:8:11"
                      },
                      {
                        "expression": {
                          "id": 2073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2071,
                            "name": "temp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2059,
                            "src": "712:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "hexValue": "3130",
                            "id": 2072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "720:2:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "src": "712:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2074,
                        "nodeType": "ExpressionStatement",
                        "src": "712:10:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2065,
                      "name": "temp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2059,
                      "src": "665:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "673:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "665:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2076,
                  "nodeType": "WhileStatement",
                  "src": "658:75:11"
                },
                {
                  "assignments": [
                    2078
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2078,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nodeType": "VariableDeclaration",
                      "scope": 2121,
                      "src": "742:19:11",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2077,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "742:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2083,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 2081,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2063,
                        "src": "774:6:11",
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
                      "id": 2080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "764:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 2079,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "768:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 2082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "764:17:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "742:39:11"
                },
                {
                  "body": {
                    "id": 2114,
                    "nodeType": "Block",
                    "src": "810:131:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2089,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2087,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2063,
                            "src": "824:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 2088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "834:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "824:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2090,
                        "nodeType": "ExpressionStatement",
                        "src": "824:11:11"
                      },
                      {
                        "expression": {
                          "id": 2108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2091,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2078,
                              "src": "849:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 2093,
                            "indexExpression": {
                              "id": 2092,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2063,
                              "src": "856:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "849:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 2105,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3438",
                                      "id": 2098,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "879:2:11",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_48_by_1",
                                        "typeString": "int_const 48"
                                      },
                                      "value": "48"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 2103,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 2101,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2046,
                                            "src": "892:5:11",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "%",
                                          "rightExpression": {
                                            "hexValue": "3130",
                                            "id": 2102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "900:2:11",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_10_by_1",
                                              "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                          },
                                          "src": "892:10:11",
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
                                        "id": 2100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "884:7:11",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 2099,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "884:7:11",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 2104,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "884:19:11",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "879:24:11",
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
                                  "id": 2097,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "873:5:11",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint8_$",
                                    "typeString": "type(uint8)"
                                  },
                                  "typeName": {
                                    "id": 2096,
                                    "name": "uint8",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "873:5:11",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "873:31:11",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              ],
                              "id": 2095,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "866:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes1_$",
                                "typeString": "type(bytes1)"
                              },
                              "typeName": {
                                "id": 2094,
                                "name": "bytes1",
                                "nodeType": "ElementaryTypeName",
                                "src": "866:6:11",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "866:39:11",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "849:56:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 2109,
                        "nodeType": "ExpressionStatement",
                        "src": "849:56:11"
                      },
                      {
                        "expression": {
                          "id": 2112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2110,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2046,
                            "src": "919:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "hexValue": "3130",
                            "id": 2111,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "928:2:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "src": "919:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2113,
                        "nodeType": "ExpressionStatement",
                        "src": "919:11:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2084,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2046,
                      "src": "798:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "807:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "798:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2115,
                  "nodeType": "WhileStatement",
                  "src": "791:150:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2118,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2078,
                        "src": "964:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 2117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "957:6:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 2116,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "957:6:11",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "957:14:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2050,
                  "id": 2120,
                  "nodeType": "Return",
                  "src": "950:21:11"
                }
              ]
            },
            "documentation": {
              "id": 2044,
              "nodeType": "StructuredDocumentation",
              "src": "180:90:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` decimal representation."
            },
            "id": 2122,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2046,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2122,
                  "src": "293:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "293:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "292:15:11"
            },
            "returnParameters": {
              "id": 2050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2049,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2122,
                  "src": "331:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2048,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "330:15:11"
            },
            "scope": 2240,
            "src": "275:703:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2162,
              "nodeType": "Block",
              "src": "1157:255:11",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2130,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2125,
                      "src": "1171:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1180:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1171:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2136,
                  "nodeType": "IfStatement",
                  "src": "1167:54:11",
                  "trueBody": {
                    "id": 2135,
                    "nodeType": "Block",
                    "src": "1183:38:11",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30783030",
                          "id": 2133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1204:6:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_27489e20a0060b723a1748bdff5e44570ee9fae64141728105692eac6031e8a4",
                            "typeString": "literal_string \"0x00\""
                          },
                          "value": "0x00"
                        },
                        "functionReturnParameters": 2129,
                        "id": 2134,
                        "nodeType": "Return",
                        "src": "1197:13:11"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2138
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2138,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "1230:12:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2137,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1230:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2140,
                  "initialValue": {
                    "id": 2139,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2125,
                    "src": "1245:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1230:20:11"
                },
                {
                  "assignments": [
                    2142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2142,
                      "mutability": "mutable",
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 2162,
                      "src": "1260:14:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2141,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1260:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2144,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 2143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1277:1:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1260:18:11"
                },
                {
                  "body": {
                    "id": 2155,
                    "nodeType": "Block",
                    "src": "1306:57:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1320:8:11",
                          "subExpression": {
                            "id": 2148,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2142,
                            "src": "1320:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2150,
                        "nodeType": "ExpressionStatement",
                        "src": "1320:8:11"
                      },
                      {
                        "expression": {
                          "id": 2153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2151,
                            "name": "temp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2138,
                            "src": "1342:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "38",
                            "id": 2152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1351:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "1342:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2154,
                        "nodeType": "ExpressionStatement",
                        "src": "1342:10:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2145,
                      "name": "temp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2138,
                      "src": "1295:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1303:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1295:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2156,
                  "nodeType": "WhileStatement",
                  "src": "1288:75:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2158,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2125,
                        "src": "1391:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 2159,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2142,
                        "src": "1398:6:11",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2157,
                      "name": "toHexString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2163,
                        2239
                      ],
                      "referencedDeclaration": 2239,
                      "src": "1379:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (string memory)"
                      }
                    },
                    "id": 2160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1379:26:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2129,
                  "id": 2161,
                  "nodeType": "Return",
                  "src": "1372:33:11"
                }
              ]
            },
            "documentation": {
              "id": 2123,
              "nodeType": "StructuredDocumentation",
              "src": "984:94:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation."
            },
            "id": 2163,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2125,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "1104:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1104:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1103:15:11"
            },
            "returnParameters": {
              "id": 2129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2128,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2163,
                  "src": "1142:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2127,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1142:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1141:15:11"
            },
            "scope": 2240,
            "src": "1083:329:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2238,
              "nodeType": "Block",
              "src": "1625:351:11",
              "statements": [
                {
                  "assignments": [
                    2174
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2174,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nodeType": "VariableDeclaration",
                      "scope": 2238,
                      "src": "1635:19:11",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2173,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1635:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2183,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 2177,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1667:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 2178,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2168,
                            "src": "1671:6:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1667:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 2180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1680:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "1667:14:11",
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
                      "id": 2176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1657:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 2175,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1661:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 2182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1657:25:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1635:47:11"
                },
                {
                  "expression": {
                    "id": 2188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2184,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1692:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 2186,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 2185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1699:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1692:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 2187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1704:3:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                        "typeString": "literal_string \"0\""
                      },
                      "value": "0"
                    },
                    "src": "1692:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 2189,
                  "nodeType": "ExpressionStatement",
                  "src": "1692:15:11"
                },
                {
                  "expression": {
                    "id": 2194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2190,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1717:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 2192,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 2191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1724:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1717:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "78",
                      "id": 2193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1729:3:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7521d1cadbcfa91eec65aa16715b94ffc1c9654ba57ea2ef1a2127bca1127a83",
                        "typeString": "literal_string \"x\""
                      },
                      "value": "x"
                    },
                    "src": "1717:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 2195,
                  "nodeType": "ExpressionStatement",
                  "src": "1717:15:11"
                },
                {
                  "body": {
                    "id": 2224,
                    "nodeType": "Block",
                    "src": "1787:87:11",
                    "statements": [
                      {
                        "expression": {
                          "id": 2218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2210,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2174,
                              "src": "1801:6:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 2212,
                            "indexExpression": {
                              "id": 2211,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2197,
                              "src": "1808:1:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1801:9:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 2213,
                              "name": "_HEX_SYMBOLS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2043,
                              "src": "1813:12:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes16",
                                "typeString": "bytes16"
                              }
                            },
                            "id": 2217,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 2216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 2214,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2166,
                                "src": "1826:5:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 2215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1834:3:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "1826:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1813:25:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "1801:37:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 2219,
                        "nodeType": "ExpressionStatement",
                        "src": "1801:37:11"
                      },
                      {
                        "expression": {
                          "id": 2222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2220,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2166,
                            "src": "1852:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 2221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1862:1:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "1852:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2223,
                        "nodeType": "ExpressionStatement",
                        "src": "1852:11:11"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2204,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2197,
                      "src": "1775:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 2205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1779:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1775:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2225,
                  "initializationExpression": {
                    "assignments": [
                      2197
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2197,
                        "mutability": "mutable",
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 2225,
                        "src": "1747:9:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2196,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1747:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2203,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 2202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 2198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1759:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 2199,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2168,
                          "src": "1763:6:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1759:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 2201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1772:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1759:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1747:26:11"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "1782:3:11",
                      "subExpression": {
                        "id": 2207,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2197,
                        "src": "1784:1:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2209,
                    "nodeType": "ExpressionStatement",
                    "src": "1782:3:11"
                  },
                  "nodeType": "ForStatement",
                  "src": "1742:132:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 2227,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2166,
                          "src": "1891:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 2228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1900:1:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1891:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537472696e67733a20686578206c656e67746820696e73756666696369656e74",
                        "id": 2230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1903:34:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
                          "typeString": "literal_string \"Strings: hex length insufficient\""
                        },
                        "value": "Strings: hex length insufficient"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
                          "typeString": "literal_string \"Strings: hex length insufficient\""
                        }
                      ],
                      "id": 2226,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1883:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:55:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2232,
                  "nodeType": "ExpressionStatement",
                  "src": "1883:55:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2235,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2174,
                        "src": "1962:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 2234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1955:6:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 2233,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1955:6:11",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1955:14:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2172,
                  "id": 2237,
                  "nodeType": "Return",
                  "src": "1948:21:11"
                }
              ]
            },
            "documentation": {
              "id": 2164,
              "nodeType": "StructuredDocumentation",
              "src": "1418:112:11",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length."
            },
            "id": 2239,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2166,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1556:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1556:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2168,
                  "mutability": "mutable",
                  "name": "length",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1571:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2167,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1571:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1555:31:11"
            },
            "returnParameters": {
              "id": 2172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2171,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2239,
                  "src": "1610:13:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2170,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1609:15:11"
            },
            "scope": 2240,
            "src": "1535:441:11",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2241,
        "src": "93:1885:11"
      }
    ],
    "src": "33:1946:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.590Z",
  "devdoc": {
    "details": "String operations.",
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