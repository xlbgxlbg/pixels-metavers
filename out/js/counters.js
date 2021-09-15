const counters = {
  "contractName": "Counters",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Matt Condon (@shrugs)\",\"details\":\"Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number of elements in a mapping, issuing ERC721 ids, or counting request ids. Include with `using Counters for Counters.Counter;`\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Counters\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/Counters.sol\":\"Counters\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x78450f4e3b722cce467b21e285f72ce5eaf361e9ba9dd2241a413926246773cd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f103065051300cd995fd4599ba91188d4071b92175b52f26110e02db091617c0\",\"dweb:/ipfs/QmSyDz67R2HCypDE8Pacn3voVwxw9x17NM66q47YgBnGqc\"]}},\"version\":1}",
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202144823f7376c1dc018c7eea243dfea11d51f63fa8c9634c07e5ab3651e6049e64736f6c63430008000033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202144823f7376c1dc018c7eea243dfea11d51f63fa8c9634c07e5ab3651e6049e64736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "370:971:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "370:971:10:-:0;;;;;;;;",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @title Counters\n * @author Matt Condon (@shrugs)\n * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\n * of elements in a mapping, issuing ERC721 ids, or counting request ids.\n *\n * Include with `using Counters for Counters.Counter;`\n */\nlibrary Counters {\n    struct Counter {\n        // This variable should never be directly accessed by users of the library: interactions must be restricted to\n        // the library's function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\n        // this feature: see https://github.com/ethereum/solidity/issues/4637\n        uint256 _value; // default: 0\n    }\n\n    function current(Counter storage counter) internal view returns (uint256) {\n        return counter._value;\n    }\n\n    function increment(Counter storage counter) internal {\n        unchecked {\n            counter._value += 1;\n        }\n    }\n\n    function decrement(Counter storage counter) internal {\n        uint256 value = counter._value;\n        require(value > 0, \"Counter: decrement overflow\");\n        unchecked {\n            counter._value = value - 1;\n        }\n    }\n\n    function reset(Counter storage counter) internal {\n        counter._value = 0;\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/Counters.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
    "exportedSymbols": {
      "Counters": [
        2037
      ]
    },
    "id": 2038,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1965,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:10"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 1966,
          "nodeType": "StructuredDocumentation",
          "src": "58:311:10",
          "text": " @title Counters\n @author Matt Condon (@shrugs)\n @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\n of elements in a mapping, issuing ERC721 ids, or counting request ids.\n Include with `using Counters for Counters.Counter;`"
        },
        "fullyImplemented": true,
        "id": 2037,
        "linearizedBaseContracts": [
          2037
        ],
        "name": "Counters",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Counters.Counter",
            "id": 1969,
            "members": [
              {
                "constant": false,
                "id": 1968,
                "mutability": "mutable",
                "name": "_value",
                "nodeType": "VariableDeclaration",
                "scope": 1969,
                "src": "732:14:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1967,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "732:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Counter",
            "nodeType": "StructDefinition",
            "scope": 2037,
            "src": "393:374:10",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1980,
              "nodeType": "Block",
              "src": "847:38:10",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1977,
                      "name": "counter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1972,
                      "src": "864:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                        "typeString": "struct Counters.Counter storage pointer"
                      }
                    },
                    "id": 1978,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "_value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1968,
                    "src": "864:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1976,
                  "id": 1979,
                  "nodeType": "Return",
                  "src": "857:21:10"
                }
              ]
            },
            "id": 1981,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "current",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1972,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 1981,
                  "src": "790:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1971,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1970,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "790:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "790:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "789:25:10"
            },
            "returnParameters": {
              "id": 1976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1975,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1981,
                  "src": "838:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "837:9:10"
            },
            "scope": 2037,
            "src": "773:112:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1994,
              "nodeType": "Block",
              "src": "944:70:10",
              "statements": [
                {
                  "id": 1993,
                  "nodeType": "UncheckedBlock",
                  "src": "954:54:10",
                  "statements": [
                    {
                      "expression": {
                        "id": 1991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 1987,
                            "name": "counter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1984,
                            "src": "978:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                              "typeString": "struct Counters.Counter storage pointer"
                            }
                          },
                          "id": 1989,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberName": "_value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1968,
                          "src": "978:14:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "hexValue": "31",
                          "id": 1990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "996:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "978:19:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1992,
                      "nodeType": "ExpressionStatement",
                      "src": "978:19:10"
                    }
                  ]
                }
              ]
            },
            "id": 1995,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "increment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1984,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 1995,
                  "src": "910:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1983,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1982,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "910:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "910:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "909:25:10"
            },
            "returnParameters": {
              "id": 1986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "944:0:10"
            },
            "scope": 2037,
            "src": "891:123:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2022,
              "nodeType": "Block",
              "src": "1073:176:10",
              "statements": [
                {
                  "assignments": [
                    2002
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2002,
                      "mutability": "mutable",
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 2022,
                      "src": "1083:13:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2001,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1083:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2005,
                  "initialValue": {
                    "expression": {
                      "id": 2003,
                      "name": "counter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1998,
                      "src": "1099:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                        "typeString": "struct Counters.Counter storage pointer"
                      }
                    },
                    "id": 2004,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "_value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1968,
                    "src": "1099:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1083:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 2007,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2002,
                          "src": "1131:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 2008,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1139:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1131:9:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "436f756e7465723a2064656372656d656e74206f766572666c6f77",
                        "id": 2010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1142:29:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1dfd0d5389474d871b8e8929aab9d4def041f55f90f625754fb5f9a9ba08af6f",
                          "typeString": "literal_string \"Counter: decrement overflow\""
                        },
                        "value": "Counter: decrement overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1dfd0d5389474d871b8e8929aab9d4def041f55f90f625754fb5f9a9ba08af6f",
                          "typeString": "literal_string \"Counter: decrement overflow\""
                        }
                      ],
                      "id": 2006,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1123:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1123:49:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2012,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:49:10"
                },
                {
                  "id": 2021,
                  "nodeType": "UncheckedBlock",
                  "src": "1182:61:10",
                  "statements": [
                    {
                      "expression": {
                        "id": 2019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 2013,
                            "name": "counter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1998,
                            "src": "1206:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                              "typeString": "struct Counters.Counter storage pointer"
                            }
                          },
                          "id": 2015,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberName": "_value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1968,
                          "src": "1206:14:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2018,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2016,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2002,
                            "src": "1223:5:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 2017,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1231:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1223:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1206:26:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2020,
                      "nodeType": "ExpressionStatement",
                      "src": "1206:26:10"
                    }
                  ]
                }
              ]
            },
            "id": 2023,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decrement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1998,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 2023,
                  "src": "1039:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1997,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1996,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "1039:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "1039:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1038:25:10"
            },
            "returnParameters": {
              "id": 2000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1073:0:10"
            },
            "scope": 2037,
            "src": "1020:229:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2035,
              "nodeType": "Block",
              "src": "1304:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 2033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2029,
                        "name": "counter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2026,
                        "src": "1314:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                          "typeString": "struct Counters.Counter storage pointer"
                        }
                      },
                      "id": 2031,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "_value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1968,
                      "src": "1314:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 2032,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1331:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1314:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2034,
                  "nodeType": "ExpressionStatement",
                  "src": "1314:18:10"
                }
              ]
            },
            "id": 2036,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2026,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 2036,
                  "src": "1270:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 2025,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2024,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "1270:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "1270:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1269:25:10"
            },
            "returnParameters": {
              "id": 2028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1304:0:10"
            },
            "scope": 2037,
            "src": "1255:84:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2038,
        "src": "370:971:10"
      }
    ],
    "src": "33:1309:10"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
    "exportedSymbols": {
      "Counters": [
        2037
      ]
    },
    "id": 2038,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1965,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:10"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 1966,
          "nodeType": "StructuredDocumentation",
          "src": "58:311:10",
          "text": " @title Counters\n @author Matt Condon (@shrugs)\n @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\n of elements in a mapping, issuing ERC721 ids, or counting request ids.\n Include with `using Counters for Counters.Counter;`"
        },
        "fullyImplemented": true,
        "id": 2037,
        "linearizedBaseContracts": [
          2037
        ],
        "name": "Counters",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Counters.Counter",
            "id": 1969,
            "members": [
              {
                "constant": false,
                "id": 1968,
                "mutability": "mutable",
                "name": "_value",
                "nodeType": "VariableDeclaration",
                "scope": 1969,
                "src": "732:14:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1967,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "732:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Counter",
            "nodeType": "StructDefinition",
            "scope": 2037,
            "src": "393:374:10",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1980,
              "nodeType": "Block",
              "src": "847:38:10",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1977,
                      "name": "counter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1972,
                      "src": "864:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                        "typeString": "struct Counters.Counter storage pointer"
                      }
                    },
                    "id": 1978,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "_value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1968,
                    "src": "864:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1976,
                  "id": 1979,
                  "nodeType": "Return",
                  "src": "857:21:10"
                }
              ]
            },
            "id": 1981,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "current",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1972,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 1981,
                  "src": "790:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1971,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1970,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "790:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "790:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "789:25:10"
            },
            "returnParameters": {
              "id": 1976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1975,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1981,
                  "src": "838:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "837:9:10"
            },
            "scope": 2037,
            "src": "773:112:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1994,
              "nodeType": "Block",
              "src": "944:70:10",
              "statements": [
                {
                  "id": 1993,
                  "nodeType": "UncheckedBlock",
                  "src": "954:54:10",
                  "statements": [
                    {
                      "expression": {
                        "id": 1991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 1987,
                            "name": "counter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1984,
                            "src": "978:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                              "typeString": "struct Counters.Counter storage pointer"
                            }
                          },
                          "id": 1989,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberName": "_value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1968,
                          "src": "978:14:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "hexValue": "31",
                          "id": 1990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "996:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "978:19:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1992,
                      "nodeType": "ExpressionStatement",
                      "src": "978:19:10"
                    }
                  ]
                }
              ]
            },
            "id": 1995,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "increment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1984,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 1995,
                  "src": "910:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1983,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1982,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "910:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "910:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "909:25:10"
            },
            "returnParameters": {
              "id": 1986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "944:0:10"
            },
            "scope": 2037,
            "src": "891:123:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2022,
              "nodeType": "Block",
              "src": "1073:176:10",
              "statements": [
                {
                  "assignments": [
                    2002
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2002,
                      "mutability": "mutable",
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 2022,
                      "src": "1083:13:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2001,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1083:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2005,
                  "initialValue": {
                    "expression": {
                      "id": 2003,
                      "name": "counter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1998,
                      "src": "1099:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                        "typeString": "struct Counters.Counter storage pointer"
                      }
                    },
                    "id": 2004,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "_value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1968,
                    "src": "1099:14:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1083:30:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 2007,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2002,
                          "src": "1131:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 2008,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1139:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1131:9:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "436f756e7465723a2064656372656d656e74206f766572666c6f77",
                        "id": 2010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1142:29:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1dfd0d5389474d871b8e8929aab9d4def041f55f90f625754fb5f9a9ba08af6f",
                          "typeString": "literal_string \"Counter: decrement overflow\""
                        },
                        "value": "Counter: decrement overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1dfd0d5389474d871b8e8929aab9d4def041f55f90f625754fb5f9a9ba08af6f",
                          "typeString": "literal_string \"Counter: decrement overflow\""
                        }
                      ],
                      "id": 2006,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1123:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1123:49:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2012,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:49:10"
                },
                {
                  "id": 2021,
                  "nodeType": "UncheckedBlock",
                  "src": "1182:61:10",
                  "statements": [
                    {
                      "expression": {
                        "id": 2019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 2013,
                            "name": "counter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1998,
                            "src": "1206:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                              "typeString": "struct Counters.Counter storage pointer"
                            }
                          },
                          "id": 2015,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberName": "_value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1968,
                          "src": "1206:14:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2018,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2016,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2002,
                            "src": "1223:5:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 2017,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1231:1:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1223:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1206:26:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2020,
                      "nodeType": "ExpressionStatement",
                      "src": "1206:26:10"
                    }
                  ]
                }
              ]
            },
            "id": 2023,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decrement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1998,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 2023,
                  "src": "1039:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 1997,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1996,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "1039:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "1039:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1038:25:10"
            },
            "returnParameters": {
              "id": 2000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1073:0:10"
            },
            "scope": 2037,
            "src": "1020:229:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2035,
              "nodeType": "Block",
              "src": "1304:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 2033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2029,
                        "name": "counter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2026,
                        "src": "1314:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                          "typeString": "struct Counters.Counter storage pointer"
                        }
                      },
                      "id": 2031,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "_value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1968,
                      "src": "1314:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 2032,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1331:1:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1314:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2034,
                  "nodeType": "ExpressionStatement",
                  "src": "1314:18:10"
                }
              ]
            },
            "id": 2036,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2026,
                  "mutability": "mutable",
                  "name": "counter",
                  "nodeType": "VariableDeclaration",
                  "scope": 2036,
                  "src": "1270:23:10",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 2025,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2024,
                      "name": "Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1969,
                      "src": "1270:7:10"
                    },
                    "referencedDeclaration": 1969,
                    "src": "1270:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$1969_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1269:25:10"
            },
            "returnParameters": {
              "id": 2028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1304:0:10"
            },
            "scope": 2037,
            "src": "1255:84:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 2038,
        "src": "370:971:10"
      }
    ],
    "src": "33:1309:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.589Z",
  "devdoc": {
    "author": "Matt Condon (@shrugs)",
    "details": "Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number of elements in a mapping, issuing ERC721 ids, or counting request ids. Include with `using Counters for Counters.Counter;`",
    "kind": "dev",
    "methods": {},
    "title": "Counters",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}