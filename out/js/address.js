const address = {
  "contractName": "Address",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x3336baae5cf23e94274d75336e2d412193be508504aee185e61dc7d58cd05c8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://39a05eec7083dfa0cc7e0cbfe6cd1bd085a340af1ede93fdff3ad047c5fb3d8e\",\"dweb:/ipfs/QmVApz5fCUq2QC8gKTsNNdCmcedJ3ETHp68zR5N3WUKS4r\"]}},\"version\":1}",
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f85112d30be734ffd7d9a0f38c6e337d00c0404216ac7211131afd3c0a1ea0b464736f6c63430008000033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f85112d30be734ffd7d9a0f38c6e337d00c0404216ac7211131afd3c0a1ea0b464736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "126:7729:8:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "126:7729:8:-:0;;;;;;;;",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize, which returns 0 for contracts in\n        // construction, since the code is only stored at the end of the\n        // constructor execution.\n\n        uint256 size;\n        assembly {\n            size := extcodesize(account)\n        }\n        return size > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, \"Address: insufficient balance\");\n\n        (bool success, ) = recipient.call{value: amount}(\"\");\n        require(success, \"Address: unable to send value, recipient may have reverted\");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, \"Address: low-level call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, \"Address: low-level call with value failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, \"Address: insufficient balance for call\");\n        require(isContract(target), \"Address: call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, \"Address: low-level static call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), \"Address: static call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, \"Address: low-level delegate call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), \"Address: delegate call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/utils/Address.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        1941
      ]
    },
    "id": 1942,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1646,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:8"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 1647,
          "nodeType": "StructuredDocumentation",
          "src": "58:67:8",
          "text": " @dev Collection of functions related to the address type"
        },
        "fullyImplemented": true,
        "id": 1941,
        "linearizedBaseContracts": [
          1941
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "784:311:8",
              "statements": [
                {
                  "assignments": [
                    1656
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1656,
                      "mutability": "mutable",
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 1663,
                      "src": "981:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1655,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "981:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1657,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "981:12:8"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1012:52:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1026:28:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "account",
                              "nodeType": "YulIdentifier",
                              "src": "1046:7:8"
                            }
                          ],
                          "functionName": {
                            "name": "extcodesize",
                            "nodeType": "YulIdentifier",
                            "src": "1034:11:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1034:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "1026:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "istanbul",
                  "externalReferences": [
                    {
                      "declaration": 1650,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1046:7:8",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1656,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1026:4:8",
                      "valueSize": 1
                    }
                  ],
                  "id": 1658,
                  "nodeType": "InlineAssembly",
                  "src": "1003:61:8"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1659,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1656,
                      "src": "1080:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1087:1:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1080:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1654,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "1073:15:8"
                }
              ]
            },
            "documentation": {
              "id": 1648,
              "nodeType": "StructuredDocumentation",
              "src": "148:565:8",
              "text": " @dev Returns true if `account` is a contract.\n [IMPORTANT]\n ====\n It is unsafe to assume that an address for which this function returns\n false is an externally-owned account (EOA) and not a contract.\n Among others, `isContract` will return false for the following\n types of addresses:\n  - an externally-owned account\n  - a contract in construction\n  - an address where a contract will be created\n  - an address where a contract lived, but was destroyed\n ===="
            },
            "id": 1664,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1650,
                  "mutability": "mutable",
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "738:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1649,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "737:17:8"
            },
            "returnParameters": {
              "id": 1654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1653,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "778:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1652,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "777:6:8"
            },
            "scope": 1941,
            "src": "718:377:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1697,
              "nodeType": "Block",
              "src": "2083:241:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1679,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1675,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "2109:4:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1674,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2101:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1673,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2101:7:8",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2101:13:8",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "2101:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1678,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1669,
                          "src": "2126:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2101:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e6365",
                        "id": 1680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2134:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        },
                        "value": "Address: insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        }
                      ],
                      "id": 1672,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2093:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2093:73:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1682,
                  "nodeType": "ExpressionStatement",
                  "src": "2093:73:8"
                },
                {
                  "assignments": [
                    1684,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1684,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1697,
                      "src": "2178:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1683,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2178:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 1691,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 1689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2226:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 1685,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1667,
                          "src": "2196:9:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 1686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "2196:14:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1687,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1669,
                          "src": "2218:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "2196:29:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2196:33:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2177:52:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1693,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1684,
                        "src": "2247:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564",
                        "id": 1694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2256:60:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        },
                        "value": "Address: unable to send value, recipient may have reverted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        }
                      ],
                      "id": 1692,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2239:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2239:78:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1696,
                  "nodeType": "ExpressionStatement",
                  "src": "2239:78:8"
                }
              ]
            },
            "documentation": {
              "id": 1665,
              "nodeType": "StructuredDocumentation",
              "src": "1101:906:8",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "id": 1698,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 1698,
                  "src": "2031:25:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:15:8",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1669,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1698,
                  "src": "2058:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1668,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2058:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2030:43:8"
            },
            "returnParameters": {
              "id": 1671,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2083:0:8"
            },
            "scope": 1941,
            "src": "2012:312:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1714,
              "nodeType": "Block",
              "src": "3155:84:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1709,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1701,
                        "src": "3185:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1710,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1703,
                        "src": "3193:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 1711,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3199:32:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        },
                        "value": "Address: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        }
                      ],
                      "id": 1708,
                      "name": "functionCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1715,
                        1735
                      ],
                      "referencedDeclaration": 1735,
                      "src": "3172:12:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3172:60:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1707,
                  "id": 1713,
                  "nodeType": "Return",
                  "src": "3165:67:8"
                }
              ]
            },
            "documentation": {
              "id": 1699,
              "nodeType": "StructuredDocumentation",
              "src": "2330:731:8",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason, it is bubbled up by this\n function (like regular Solidity function calls).\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.\n _Available since v3.1._"
            },
            "id": 1715,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1701,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3088:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3088:7:8",
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
                  "id": 1703,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3104:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1702,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3104:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3087:35:8"
            },
            "returnParameters": {
              "id": 1707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1706,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3141:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1705,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3141:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3140:14:8"
            },
            "scope": 1941,
            "src": "3066:173:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1734,
              "nodeType": "Block",
              "src": "3608:76:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1728,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1718,
                        "src": "3647:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1729,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1720,
                        "src": "3655:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 1730,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3661:1:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 1731,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "3664:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1727,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1755,
                        1805
                      ],
                      "referencedDeclaration": 1805,
                      "src": "3625:21:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3625:52:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1726,
                  "id": 1733,
                  "nodeType": "Return",
                  "src": "3618:59:8"
                }
              ]
            },
            "documentation": {
              "id": 1716,
              "nodeType": "StructuredDocumentation",
              "src": "3245:211:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1735,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1718,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3492:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3492:7:8",
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
                  "id": 1720,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3516:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1719,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3516:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1722,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3543:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1721,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3543:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3482:93:8"
            },
            "returnParameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1725,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3594:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1724,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3594:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3593:14:8"
            },
            "scope": 1941,
            "src": "3461:223:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1754,
              "nodeType": "Block",
              "src": "4189:111:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1748,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1738,
                        "src": "4228:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1749,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "4236:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1750,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1742,
                        "src": "4242:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564",
                        "id": 1751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4249:43:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        },
                        "value": "Address: low-level call with value failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        }
                      ],
                      "id": 1747,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1755,
                        1805
                      ],
                      "referencedDeclaration": 1805,
                      "src": "4206:21:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4206:87:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1746,
                  "id": 1753,
                  "nodeType": "Return",
                  "src": "4199:94:8"
                }
              ]
            },
            "documentation": {
              "id": 1736,
              "nodeType": "StructuredDocumentation",
              "src": "3690:351:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.\n _Available since v3.1._"
            },
            "id": 1755,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1738,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4086:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4086:7:8",
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
                  "id": 1740,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4110:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1739,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4110:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1742,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4137:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4137:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4076:80:8"
            },
            "returnParameters": {
              "id": 1746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1745,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4175:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1744,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4175:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4174:14:8"
            },
            "scope": 1941,
            "src": "4046:254:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1804,
              "nodeType": "Block",
              "src": "4727:320:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1776,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1772,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "4753:4:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1771,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4745:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1770,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4745:7:8",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1773,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4745:13:8",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "4745:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1775,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "4770:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4745:30:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c",
                        "id": 1777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4777:40:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        },
                        "value": "Address: insufficient balance for call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        }
                      ],
                      "id": 1769,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4737:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4737:81:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1779,
                  "nodeType": "ExpressionStatement",
                  "src": "4737:81:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1782,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1758,
                            "src": "4847:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1781,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "4836:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4836:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4856:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        },
                        "value": "Address: call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        }
                      ],
                      "id": 1780,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4828:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4828:60:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1786,
                  "nodeType": "ExpressionStatement",
                  "src": "4828:60:8"
                },
                {
                  "assignments": [
                    1788,
                    1790
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1788,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1804,
                      "src": "4900:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1787,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4900:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1790,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1804,
                      "src": "4914:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1789,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4914:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1797,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1795,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1760,
                        "src": "4967:4:8",
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
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 1791,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1758,
                          "src": "4941:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "4941:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1793,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "4960:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "4941:25:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4941:31:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4899:73:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1799,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1788,
                        "src": "5006:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1800,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1790,
                        "src": "5015:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1801,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1764,
                        "src": "5027:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1798,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "4989:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4989:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1768,
                  "id": 1803,
                  "nodeType": "Return",
                  "src": "4982:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1756,
              "nodeType": "StructuredDocumentation",
              "src": "4306:237:8",
              "text": " @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n with `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1805,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1758,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4588:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4588:7:8",
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
                  "id": 1760,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4612:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1759,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4612:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1762,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4639:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4639:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1764,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4662:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1763,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4662:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4578:116:8"
            },
            "returnParameters": {
              "id": 1768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1767,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4713:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1766,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4713:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4712:14:8"
            },
            "scope": 1941,
            "src": "4548:499:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1821,
              "nodeType": "Block",
              "src": "5324:97:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1816,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1808,
                        "src": "5360:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1817,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1810,
                        "src": "5368:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564",
                        "id": 1818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5374:39:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        },
                        "value": "Address: low-level static call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        }
                      ],
                      "id": 1815,
                      "name": "functionStaticCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1822,
                        1857
                      ],
                      "referencedDeclaration": 1857,
                      "src": "5341:18:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 1819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5341:73:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1814,
                  "id": 1820,
                  "nodeType": "Return",
                  "src": "5334:80:8"
                }
              ]
            },
            "documentation": {
              "id": 1806,
              "nodeType": "StructuredDocumentation",
              "src": "5053:166:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1822,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1808,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5252:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:7:8",
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
                  "id": 1810,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5268:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1809,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5268:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5251:35:8"
            },
            "returnParameters": {
              "id": 1814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1813,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5310:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1812,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5310:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:14:8"
            },
            "scope": 1941,
            "src": "5224:197:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1856,
              "nodeType": "Block",
              "src": "5763:228:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1836,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1825,
                            "src": "5792:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1835,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "5781:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5781:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5801:38:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        },
                        "value": "Address: static call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        }
                      ],
                      "id": 1834,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5773:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5773:67:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1840,
                  "nodeType": "ExpressionStatement",
                  "src": "5773:67:8"
                },
                {
                  "assignments": [
                    1842,
                    1844
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1842,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1856,
                      "src": "5852:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1841,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5852:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1844,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1856,
                      "src": "5866:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1843,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5866:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1849,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1847,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "5911:4:8",
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
                      "expression": {
                        "id": 1845,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1825,
                        "src": "5893:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "5893:17:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 1848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5893:23:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5851:65:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1851,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1842,
                        "src": "5950:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1852,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "5959:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1853,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1829,
                        "src": "5971:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1850,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "5933:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5933:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1833,
                  "id": 1855,
                  "nodeType": "Return",
                  "src": "5926:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1823,
              "nodeType": "StructuredDocumentation",
              "src": "5427:173:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1857,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1825,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5642:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5642:7:8",
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
                  "id": 1827,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5666:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1826,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5666:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1829,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5693:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1828,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5693:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5632:93:8"
            },
            "returnParameters": {
              "id": 1833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1832,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5749:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1831,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5749:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5748:14:8"
            },
            "scope": 1941,
            "src": "5605:386:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1873,
              "nodeType": "Block",
              "src": "6267:101:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1868,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1860,
                        "src": "6305:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1869,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1862,
                        "src": "6313:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
                        "id": 1870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6319:41:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        },
                        "value": "Address: low-level delegate call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        }
                      ],
                      "id": 1867,
                      "name": "functionDelegateCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1874,
                        1909
                      ],
                      "referencedDeclaration": 1909,
                      "src": "6284:20:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6284:77:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1866,
                  "id": 1872,
                  "nodeType": "Return",
                  "src": "6277:84:8"
                }
              ]
            },
            "documentation": {
              "id": 1858,
              "nodeType": "StructuredDocumentation",
              "src": "5997:168:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1874,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1860,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6200:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6200:7:8",
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
                  "id": 1862,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6216:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1861,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6216:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6199:35:8"
            },
            "returnParameters": {
              "id": 1866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1865,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6253:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1864,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6253:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6252:14:8"
            },
            "scope": 1941,
            "src": "6170:198:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1908,
              "nodeType": "Block",
              "src": "6709:232:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1888,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1877,
                            "src": "6738:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1887,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "6727:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6727:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1890,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6747:40:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        },
                        "value": "Address: delegate call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        }
                      ],
                      "id": 1886,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6719:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6719:69:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1892,
                  "nodeType": "ExpressionStatement",
                  "src": "6719:69:8"
                },
                {
                  "assignments": [
                    1894,
                    1896
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1894,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1908,
                      "src": "6800:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1893,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6800:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1896,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1908,
                      "src": "6814:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1895,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6814:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1901,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1899,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1879,
                        "src": "6861:4:8",
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
                      "expression": {
                        "id": 1897,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1877,
                        "src": "6841:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "6841:19:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 1900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6841:25:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6799:67:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1903,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "6900:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1904,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "6909:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1905,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1881,
                        "src": "6921:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1902,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "6883:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6883:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1885,
                  "id": 1907,
                  "nodeType": "Return",
                  "src": "6876:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1875,
              "nodeType": "StructuredDocumentation",
              "src": "6374:175:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1909,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1877,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6593:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6593:7:8",
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
                  "id": 1879,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6617:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1878,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6617:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1881,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6644:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1880,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6583:93:8"
            },
            "returnParameters": {
              "id": 1885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1884,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6695:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1883,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6695:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6694:14:8"
            },
            "scope": 1941,
            "src": "6554:387:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1939,
              "nodeType": "Block",
              "src": "7321:532:8",
              "statements": [
                {
                  "condition": {
                    "id": 1921,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1912,
                    "src": "7335:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1937,
                    "nodeType": "Block",
                    "src": "7392:455:8",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1925,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1914,
                              "src": "7476:10:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 1926,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "7476:17:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 1927,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7496:1:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7476:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 1935,
                          "nodeType": "Block",
                          "src": "7784:53:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 1932,
                                    "name": "errorMessage",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1916,
                                    "src": "7809:12:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "id": 1931,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    4294967277,
                                    4294967277
                                  ],
                                  "referencedDeclaration": 4294967277,
                                  "src": "7802:6:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 1933,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7802:20:8",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 1934,
                              "nodeType": "ExpressionStatement",
                              "src": "7802:20:8"
                            }
                          ]
                        },
                        "id": 1936,
                        "nodeType": "IfStatement",
                        "src": "7472:365:8",
                        "trueBody": {
                          "id": 1930,
                          "nodeType": "Block",
                          "src": "7499:279:8",
                          "statements": [
                            {
                              "AST": {
                                "nodeType": "YulBlock",
                                "src": "7619:145:8",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "7641:40:8",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "returndata",
                                          "nodeType": "YulIdentifier",
                                          "src": "7670:10:8"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "7664:5:8"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "7664:17:8"
                                    },
                                    "variables": [
                                      {
                                        "name": "returndata_size",
                                        "nodeType": "YulTypedName",
                                        "src": "7645:15:8",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "7713:2:8",
                                              "type": "",
                                              "value": "32"
                                            },
                                            {
                                              "name": "returndata",
                                              "nodeType": "YulIdentifier",
                                              "src": "7717:10:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7709:3:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "7709:19:8"
                                        },
                                        {
                                          "name": "returndata_size",
                                          "nodeType": "YulIdentifier",
                                          "src": "7730:15:8"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "7702:6:8"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "7702:44:8"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7702:44:8"
                                  }
                                ]
                              },
                              "evmVersion": "istanbul",
                              "externalReferences": [
                                {
                                  "declaration": 1914,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "7670:10:8",
                                  "valueSize": 1
                                },
                                {
                                  "declaration": 1914,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "7717:10:8",
                                  "valueSize": 1
                                }
                              ],
                              "id": 1929,
                              "nodeType": "InlineAssembly",
                              "src": "7610:154:8"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 1938,
                  "nodeType": "IfStatement",
                  "src": "7331:516:8",
                  "trueBody": {
                    "id": 1924,
                    "nodeType": "Block",
                    "src": "7344:42:8",
                    "statements": [
                      {
                        "expression": {
                          "id": 1922,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1914,
                          "src": "7365:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 1920,
                        "id": 1923,
                        "nodeType": "Return",
                        "src": "7358:17:8"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1910,
              "nodeType": "StructuredDocumentation",
              "src": "6947:209:8",
              "text": " @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\n revert reason using the provided one.\n _Available since v4.3._"
            },
            "id": 1940,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1912,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7196:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1911,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7196:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1914,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7218:23:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1913,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7218:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1916,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7251:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1915,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7251:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7186:97:8"
            },
            "returnParameters": {
              "id": 1920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1919,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7307:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1918,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7307:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7306:14:8"
            },
            "scope": 1941,
            "src": "7161:692:8",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1942,
        "src": "126:7729:8"
      }
    ],
    "src": "33:7823:8"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        1941
      ]
    },
    "id": 1942,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1646,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:8"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 1647,
          "nodeType": "StructuredDocumentation",
          "src": "58:67:8",
          "text": " @dev Collection of functions related to the address type"
        },
        "fullyImplemented": true,
        "id": 1941,
        "linearizedBaseContracts": [
          1941
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "784:311:8",
              "statements": [
                {
                  "assignments": [
                    1656
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1656,
                      "mutability": "mutable",
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 1663,
                      "src": "981:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1655,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "981:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1657,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "981:12:8"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1012:52:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1026:28:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "account",
                              "nodeType": "YulIdentifier",
                              "src": "1046:7:8"
                            }
                          ],
                          "functionName": {
                            "name": "extcodesize",
                            "nodeType": "YulIdentifier",
                            "src": "1034:11:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1034:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "1026:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "istanbul",
                  "externalReferences": [
                    {
                      "declaration": 1650,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1046:7:8",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1656,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1026:4:8",
                      "valueSize": 1
                    }
                  ],
                  "id": 1658,
                  "nodeType": "InlineAssembly",
                  "src": "1003:61:8"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1659,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1656,
                      "src": "1080:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1087:1:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1080:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1654,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "1073:15:8"
                }
              ]
            },
            "documentation": {
              "id": 1648,
              "nodeType": "StructuredDocumentation",
              "src": "148:565:8",
              "text": " @dev Returns true if `account` is a contract.\n [IMPORTANT]\n ====\n It is unsafe to assume that an address for which this function returns\n false is an externally-owned account (EOA) and not a contract.\n Among others, `isContract` will return false for the following\n types of addresses:\n  - an externally-owned account\n  - a contract in construction\n  - an address where a contract will be created\n  - an address where a contract lived, but was destroyed\n ===="
            },
            "id": 1664,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1650,
                  "mutability": "mutable",
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "738:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1649,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "737:17:8"
            },
            "returnParameters": {
              "id": 1654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1653,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "778:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1652,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "777:6:8"
            },
            "scope": 1941,
            "src": "718:377:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1697,
              "nodeType": "Block",
              "src": "2083:241:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1679,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1675,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "2109:4:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1674,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2101:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1673,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2101:7:8",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2101:13:8",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "2101:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1678,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1669,
                          "src": "2126:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2101:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e6365",
                        "id": 1680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2134:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        },
                        "value": "Address: insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        }
                      ],
                      "id": 1672,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2093:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2093:73:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1682,
                  "nodeType": "ExpressionStatement",
                  "src": "2093:73:8"
                },
                {
                  "assignments": [
                    1684,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1684,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1697,
                      "src": "2178:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1683,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2178:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 1691,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 1689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2226:2:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 1685,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1667,
                          "src": "2196:9:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 1686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "2196:14:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1687,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1669,
                          "src": "2218:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "2196:29:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2196:33:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2177:52:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1693,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1684,
                        "src": "2247:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564",
                        "id": 1694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2256:60:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        },
                        "value": "Address: unable to send value, recipient may have reverted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        }
                      ],
                      "id": 1692,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2239:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2239:78:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1696,
                  "nodeType": "ExpressionStatement",
                  "src": "2239:78:8"
                }
              ]
            },
            "documentation": {
              "id": 1665,
              "nodeType": "StructuredDocumentation",
              "src": "1101:906:8",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "id": 1698,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 1698,
                  "src": "2031:25:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:15:8",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1669,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1698,
                  "src": "2058:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1668,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2058:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2030:43:8"
            },
            "returnParameters": {
              "id": 1671,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2083:0:8"
            },
            "scope": 1941,
            "src": "2012:312:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1714,
              "nodeType": "Block",
              "src": "3155:84:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1709,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1701,
                        "src": "3185:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1710,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1703,
                        "src": "3193:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 1711,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3199:32:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        },
                        "value": "Address: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        }
                      ],
                      "id": 1708,
                      "name": "functionCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1715,
                        1735
                      ],
                      "referencedDeclaration": 1735,
                      "src": "3172:12:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3172:60:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1707,
                  "id": 1713,
                  "nodeType": "Return",
                  "src": "3165:67:8"
                }
              ]
            },
            "documentation": {
              "id": 1699,
              "nodeType": "StructuredDocumentation",
              "src": "2330:731:8",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason, it is bubbled up by this\n function (like regular Solidity function calls).\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.\n _Available since v3.1._"
            },
            "id": 1715,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1701,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3088:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3088:7:8",
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
                  "id": 1703,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3104:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1702,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3104:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3087:35:8"
            },
            "returnParameters": {
              "id": 1707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1706,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1715,
                  "src": "3141:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1705,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3141:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3140:14:8"
            },
            "scope": 1941,
            "src": "3066:173:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1734,
              "nodeType": "Block",
              "src": "3608:76:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1728,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1718,
                        "src": "3647:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1729,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1720,
                        "src": "3655:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 1730,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3661:1:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 1731,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "3664:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1727,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1755,
                        1805
                      ],
                      "referencedDeclaration": 1805,
                      "src": "3625:21:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3625:52:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1726,
                  "id": 1733,
                  "nodeType": "Return",
                  "src": "3618:59:8"
                }
              ]
            },
            "documentation": {
              "id": 1716,
              "nodeType": "StructuredDocumentation",
              "src": "3245:211:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1735,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1718,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3492:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3492:7:8",
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
                  "id": 1720,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3516:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1719,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3516:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1722,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3543:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1721,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3543:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3482:93:8"
            },
            "returnParameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1725,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1735,
                  "src": "3594:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1724,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3594:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3593:14:8"
            },
            "scope": 1941,
            "src": "3461:223:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1754,
              "nodeType": "Block",
              "src": "4189:111:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1748,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1738,
                        "src": "4228:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1749,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1740,
                        "src": "4236:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1750,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1742,
                        "src": "4242:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564",
                        "id": 1751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4249:43:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        },
                        "value": "Address: low-level call with value failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        }
                      ],
                      "id": 1747,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1755,
                        1805
                      ],
                      "referencedDeclaration": 1805,
                      "src": "4206:21:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4206:87:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1746,
                  "id": 1753,
                  "nodeType": "Return",
                  "src": "4199:94:8"
                }
              ]
            },
            "documentation": {
              "id": 1736,
              "nodeType": "StructuredDocumentation",
              "src": "3690:351:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.\n _Available since v3.1._"
            },
            "id": 1755,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1738,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4086:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4086:7:8",
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
                  "id": 1740,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4110:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1739,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4110:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1742,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4137:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4137:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4076:80:8"
            },
            "returnParameters": {
              "id": 1746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1745,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1755,
                  "src": "4175:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1744,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4175:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4174:14:8"
            },
            "scope": 1941,
            "src": "4046:254:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1804,
              "nodeType": "Block",
              "src": "4727:320:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1776,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1772,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "4753:4:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1941",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1771,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4745:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1770,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4745:7:8",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1773,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4745:13:8",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "4745:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1775,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "4770:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4745:30:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c",
                        "id": 1777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4777:40:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        },
                        "value": "Address: insufficient balance for call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        }
                      ],
                      "id": 1769,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4737:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4737:81:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1779,
                  "nodeType": "ExpressionStatement",
                  "src": "4737:81:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1782,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1758,
                            "src": "4847:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1781,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "4836:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4836:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4856:31:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        },
                        "value": "Address: call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        }
                      ],
                      "id": 1780,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4828:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4828:60:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1786,
                  "nodeType": "ExpressionStatement",
                  "src": "4828:60:8"
                },
                {
                  "assignments": [
                    1788,
                    1790
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1788,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1804,
                      "src": "4900:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1787,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4900:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1790,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1804,
                      "src": "4914:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1789,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4914:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1797,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1795,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1760,
                        "src": "4967:4:8",
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
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 1791,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1758,
                          "src": "4941:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "4941:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1793,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "4960:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "4941:25:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4941:31:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4899:73:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1799,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1788,
                        "src": "5006:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1800,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1790,
                        "src": "5015:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1801,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1764,
                        "src": "5027:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1798,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "4989:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4989:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1768,
                  "id": 1803,
                  "nodeType": "Return",
                  "src": "4982:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1756,
              "nodeType": "StructuredDocumentation",
              "src": "4306:237:8",
              "text": " @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n with `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1805,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1758,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4588:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4588:7:8",
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
                  "id": 1760,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4612:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1759,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4612:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1762,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4639:13:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4639:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1764,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4662:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1763,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4662:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4578:116:8"
            },
            "returnParameters": {
              "id": 1768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1767,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1805,
                  "src": "4713:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1766,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4713:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4712:14:8"
            },
            "scope": 1941,
            "src": "4548:499:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1821,
              "nodeType": "Block",
              "src": "5324:97:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1816,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1808,
                        "src": "5360:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1817,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1810,
                        "src": "5368:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564",
                        "id": 1818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5374:39:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        },
                        "value": "Address: low-level static call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        }
                      ],
                      "id": 1815,
                      "name": "functionStaticCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1822,
                        1857
                      ],
                      "referencedDeclaration": 1857,
                      "src": "5341:18:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 1819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5341:73:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1814,
                  "id": 1820,
                  "nodeType": "Return",
                  "src": "5334:80:8"
                }
              ]
            },
            "documentation": {
              "id": 1806,
              "nodeType": "StructuredDocumentation",
              "src": "5053:166:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1822,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1808,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5252:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5252:7:8",
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
                  "id": 1810,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5268:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1809,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5268:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5251:35:8"
            },
            "returnParameters": {
              "id": 1814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1813,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1822,
                  "src": "5310:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1812,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5310:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:14:8"
            },
            "scope": 1941,
            "src": "5224:197:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1856,
              "nodeType": "Block",
              "src": "5763:228:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1836,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1825,
                            "src": "5792:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1835,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "5781:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5781:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5801:38:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        },
                        "value": "Address: static call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        }
                      ],
                      "id": 1834,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5773:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5773:67:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1840,
                  "nodeType": "ExpressionStatement",
                  "src": "5773:67:8"
                },
                {
                  "assignments": [
                    1842,
                    1844
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1842,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1856,
                      "src": "5852:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1841,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5852:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1844,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1856,
                      "src": "5866:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1843,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5866:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1849,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1847,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "5911:4:8",
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
                      "expression": {
                        "id": 1845,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1825,
                        "src": "5893:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "5893:17:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 1848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5893:23:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5851:65:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1851,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1842,
                        "src": "5950:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1852,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "5959:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1853,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1829,
                        "src": "5971:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1850,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "5933:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5933:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1833,
                  "id": 1855,
                  "nodeType": "Return",
                  "src": "5926:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1823,
              "nodeType": "StructuredDocumentation",
              "src": "5427:173:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1857,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1825,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5642:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5642:7:8",
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
                  "id": 1827,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5666:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1826,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5666:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1829,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5693:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1828,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5693:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5632:93:8"
            },
            "returnParameters": {
              "id": 1833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1832,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1857,
                  "src": "5749:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1831,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5749:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5748:14:8"
            },
            "scope": 1941,
            "src": "5605:386:8",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1873,
              "nodeType": "Block",
              "src": "6267:101:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1868,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1860,
                        "src": "6305:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1869,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1862,
                        "src": "6313:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
                        "id": 1870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6319:41:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        },
                        "value": "Address: low-level delegate call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        }
                      ],
                      "id": 1867,
                      "name": "functionDelegateCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1874,
                        1909
                      ],
                      "referencedDeclaration": 1909,
                      "src": "6284:20:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6284:77:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1866,
                  "id": 1872,
                  "nodeType": "Return",
                  "src": "6277:84:8"
                }
              ]
            },
            "documentation": {
              "id": 1858,
              "nodeType": "StructuredDocumentation",
              "src": "5997:168:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1874,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1860,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6200:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6200:7:8",
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
                  "id": 1862,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6216:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1861,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6216:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6199:35:8"
            },
            "returnParameters": {
              "id": 1866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1865,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1874,
                  "src": "6253:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1864,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6253:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6252:14:8"
            },
            "scope": 1941,
            "src": "6170:198:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1908,
              "nodeType": "Block",
              "src": "6709:232:8",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1888,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1877,
                            "src": "6738:6:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1887,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1664,
                          "src": "6727:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6727:18:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1890,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6747:40:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        },
                        "value": "Address: delegate call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        }
                      ],
                      "id": 1886,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6719:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6719:69:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1892,
                  "nodeType": "ExpressionStatement",
                  "src": "6719:69:8"
                },
                {
                  "assignments": [
                    1894,
                    1896
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1894,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 1908,
                      "src": "6800:12:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1893,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6800:4:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1896,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nodeType": "VariableDeclaration",
                      "scope": 1908,
                      "src": "6814:23:8",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1895,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6814:5:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1901,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1899,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1879,
                        "src": "6861:4:8",
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
                      "expression": {
                        "id": 1897,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1877,
                        "src": "6841:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "6841:19:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 1900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6841:25:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6799:67:8"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1903,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1894,
                        "src": "6900:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1904,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1896,
                        "src": "6909:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1905,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1881,
                        "src": "6921:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1902,
                      "name": "verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "6883:16:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6883:51:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1885,
                  "id": 1907,
                  "nodeType": "Return",
                  "src": "6876:58:8"
                }
              ]
            },
            "documentation": {
              "id": 1875,
              "nodeType": "StructuredDocumentation",
              "src": "6374:175:8",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1909,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1877,
                  "mutability": "mutable",
                  "name": "target",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6593:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6593:7:8",
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
                  "id": 1879,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6617:17:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1878,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6617:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1881,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6644:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1880,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6644:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6583:93:8"
            },
            "returnParameters": {
              "id": 1885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1884,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6695:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1883,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6695:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6694:14:8"
            },
            "scope": 1941,
            "src": "6554:387:8",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1939,
              "nodeType": "Block",
              "src": "7321:532:8",
              "statements": [
                {
                  "condition": {
                    "id": 1921,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1912,
                    "src": "7335:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1937,
                    "nodeType": "Block",
                    "src": "7392:455:8",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1925,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1914,
                              "src": "7476:10:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 1926,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "7476:17:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 1927,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7496:1:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7476:21:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 1935,
                          "nodeType": "Block",
                          "src": "7784:53:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 1932,
                                    "name": "errorMessage",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1916,
                                    "src": "7809:12:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "id": 1931,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    4294967277,
                                    4294967277
                                  ],
                                  "referencedDeclaration": 4294967277,
                                  "src": "7802:6:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 1933,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7802:20:8",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 1934,
                              "nodeType": "ExpressionStatement",
                              "src": "7802:20:8"
                            }
                          ]
                        },
                        "id": 1936,
                        "nodeType": "IfStatement",
                        "src": "7472:365:8",
                        "trueBody": {
                          "id": 1930,
                          "nodeType": "Block",
                          "src": "7499:279:8",
                          "statements": [
                            {
                              "AST": {
                                "nodeType": "YulBlock",
                                "src": "7619:145:8",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "7641:40:8",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "returndata",
                                          "nodeType": "YulIdentifier",
                                          "src": "7670:10:8"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "7664:5:8"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "7664:17:8"
                                    },
                                    "variables": [
                                      {
                                        "name": "returndata_size",
                                        "nodeType": "YulTypedName",
                                        "src": "7645:15:8",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "7713:2:8",
                                              "type": "",
                                              "value": "32"
                                            },
                                            {
                                              "name": "returndata",
                                              "nodeType": "YulIdentifier",
                                              "src": "7717:10:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7709:3:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "7709:19:8"
                                        },
                                        {
                                          "name": "returndata_size",
                                          "nodeType": "YulIdentifier",
                                          "src": "7730:15:8"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "7702:6:8"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "7702:44:8"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7702:44:8"
                                  }
                                ]
                              },
                              "evmVersion": "istanbul",
                              "externalReferences": [
                                {
                                  "declaration": 1914,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "7670:10:8",
                                  "valueSize": 1
                                },
                                {
                                  "declaration": 1914,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "7717:10:8",
                                  "valueSize": 1
                                }
                              ],
                              "id": 1929,
                              "nodeType": "InlineAssembly",
                              "src": "7610:154:8"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 1938,
                  "nodeType": "IfStatement",
                  "src": "7331:516:8",
                  "trueBody": {
                    "id": 1924,
                    "nodeType": "Block",
                    "src": "7344:42:8",
                    "statements": [
                      {
                        "expression": {
                          "id": 1922,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1914,
                          "src": "7365:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 1920,
                        "id": 1923,
                        "nodeType": "Return",
                        "src": "7358:17:8"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1910,
              "nodeType": "StructuredDocumentation",
              "src": "6947:209:8",
              "text": " @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\n revert reason using the provided one.\n _Available since v4.3._"
            },
            "id": 1940,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1912,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7196:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1911,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7196:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1914,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7218:23:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1913,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7218:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1916,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7251:26:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1915,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7251:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7186:97:8"
            },
            "returnParameters": {
              "id": 1920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1919,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1940,
                  "src": "7307:12:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1918,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7307:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7306:14:8"
            },
            "scope": 1941,
            "src": "7161:692:8",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1942,
        "src": "126:7729:8"
      }
    ],
    "src": "33:7823:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.585Z",
  "devdoc": {
    "details": "Collection of functions related to the address type",
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