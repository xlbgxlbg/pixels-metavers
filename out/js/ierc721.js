const ierc721 = {
  "contractName": "IERC721",
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
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Required interface of an ERC721 compliant contract.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":\"IERC721\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf101e8720213560fab41104d53b3cc7ba0456ef3a98455aa7f022391783144a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e7820bcf567e6892d937c3cb10db263a4042e446799bca602535868d822384e\",\"dweb:/ipfs/QmPG2oeDjKncqsEeyYGjAN7CwAJmMgHterXGGnpzhha4z7\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"../../utils/introspection/IERC165.sol\";\n\n/**\n * @dev Required interface of an ERC721 compliant contract.\n */\ninterface IERC721 is IERC165 {\n    /**\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\n     */\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n     */\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n\n    /**\n     * @dev Returns the number of tokens in ``owner``'s account.\n     */\n    function balanceOf(address owner) external view returns (uint256 balance);\n\n    /**\n     * @dev Returns the owner of the `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function ownerOf(uint256 tokenId) external view returns (address owner);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Transfers `tokenId` token from `from` to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\n     * The approval is cleared when the token is transferred.\n     *\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n     *\n     * Requirements:\n     *\n     * - The caller must own the token or be an approved operator.\n     * - `tokenId` must exist.\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address to, uint256 tokenId) external;\n\n    /**\n     * @dev Returns the account approved for `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function getApproved(uint256 tokenId) external view returns (address operator);\n\n    /**\n     * @dev Approve or remove `operator` as an operator for the caller.\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n     *\n     * Requirements:\n     *\n     * - The `operator` cannot be the caller.\n     *\n     * Emits an {ApprovalForAll} event.\n     */\n    function setApprovalForAll(address operator, bool _approved) external;\n\n    /**\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n     *\n     * See {setApprovalForAll}\n     */\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes calldata data\n    ) external;\n}\n",
  "sourcePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ]
    },
    "id": 1600,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1485,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:5"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "id": 1486,
        "nodeType": "ImportDirective",
        "scope": 1600,
        "sourceUnit": 2277,
        "src": "58:47:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1488,
              "name": "IERC165",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2276,
              "src": "196:7:5"
            },
            "id": 1489,
            "nodeType": "InheritanceSpecifier",
            "src": "196:7:5"
          }
        ],
        "contractDependencies": [
          2276
        ],
        "contractKind": "interface",
        "documentation": {
          "id": 1487,
          "nodeType": "StructuredDocumentation",
          "src": "107:67:5",
          "text": " @dev Required interface of an ERC721 compliant contract."
        },
        "fullyImplemented": false,
        "id": 1599,
        "linearizedBaseContracts": [
          1599,
          2276
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": {
              "id": 1490,
              "nodeType": "StructuredDocumentation",
              "src": "210:88:5",
              "text": " @dev Emitted when `tokenId` token is transferred from `from` to `to`."
            },
            "id": 1498,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1492,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "318:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:5",
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
                  "id": 1494,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "340:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1493,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:5",
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
                  "id": 1496,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "360:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "317:67:5"
            },
            "src": "303:82:5"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1499,
              "nodeType": "StructuredDocumentation",
              "src": "391:94:5",
              "text": " @dev Emitted when `owner` enables `approved` to manage the `tokenId` token."
            },
            "id": 1507,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1501,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "505:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:5",
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
                  "id": 1503,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "528:24:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1502,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "528:7:5",
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
                  "id": 1505,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "554:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1504,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:74:5"
            },
            "src": "490:89:5"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1508,
              "nodeType": "StructuredDocumentation",
              "src": "585:117:5",
              "text": " @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
            },
            "id": 1516,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1510,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "728:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1509,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:7:5",
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
                  "id": 1512,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "751:24:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "751:7:5",
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
                  "id": 1514,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "777:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1513,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "727:64:5"
            },
            "src": "707:85:5"
          },
          {
            "documentation": {
              "id": 1517,
              "nodeType": "StructuredDocumentation",
              "src": "798:76:5",
              "text": " @dev Returns the number of tokens in ``owner``'s account."
            },
            "functionSelector": "70a08231",
            "id": 1524,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1519,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1524,
                  "src": "898:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1518,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "898:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "897:15:5"
            },
            "returnParameters": {
              "id": 1523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1522,
                  "mutability": "mutable",
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 1524,
                  "src": "936:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1521,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "936:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "935:17:5"
            },
            "scope": 1599,
            "src": "879:74:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1525,
              "nodeType": "StructuredDocumentation",
              "src": "959:131:5",
              "text": " @dev Returns the owner of the `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "6352211e",
            "id": 1532,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1527,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1532,
                  "src": "1112:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1111:17:5"
            },
            "returnParameters": {
              "id": 1531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1530,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1532,
                  "src": "1152:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1529,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1151:15:5"
            },
            "scope": 1599,
            "src": "1095:72:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1533,
              "nodeType": "StructuredDocumentation",
              "src": "1173:690:5",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n are aware of the ERC721 protocol to prevent tokens from being forever locked.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "42842e0e",
            "id": 1542,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1535,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1903:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1534,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:5",
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
                  "id": 1537,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1925:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1536,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1925:7:5",
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
                  "id": 1539,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1945:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1945:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1893:73:5"
            },
            "returnParameters": {
              "id": 1541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1975:0:5"
            },
            "scope": 1599,
            "src": "1868:108:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1543,
              "nodeType": "StructuredDocumentation",
              "src": "1982:504:5",
              "text": " @dev Transfers `tokenId` token from `from` to `to`.\n WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 1552,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1545,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2522:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2522:7:5",
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
                  "id": 1547,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2544:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2544:7:5",
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
                  "id": 1549,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2564:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1548,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2512:73:5"
            },
            "returnParameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2594:0:5"
            },
            "scope": 1599,
            "src": "2491:104:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1553,
              "nodeType": "StructuredDocumentation",
              "src": "2601:452:5",
              "text": " @dev Gives permission to `to` to transfer `tokenId` token to another account.\n The approval is cleared when the token is transferred.\n Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n Requirements:\n - The caller must own the token or be an approved operator.\n - `tokenId` must exist.\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 1560,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1555,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1560,
                  "src": "3075:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3075:7:5",
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
                  "id": 1557,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1560,
                  "src": "3087:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3087:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3074:29:5"
            },
            "returnParameters": {
              "id": 1559,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3112:0:5"
            },
            "scope": 1599,
            "src": "3058:55:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1561,
              "nodeType": "StructuredDocumentation",
              "src": "3119:139:5",
              "text": " @dev Returns the account approved for `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "081812fc",
            "id": 1568,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1563,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1568,
                  "src": "3284:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3284:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3283:17:5"
            },
            "returnParameters": {
              "id": 1567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1566,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1568,
                  "src": "3324:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1565,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3324:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3323:18:5"
            },
            "scope": 1599,
            "src": "3263:79:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1569,
              "nodeType": "StructuredDocumentation",
              "src": "3348:309:5",
              "text": " @dev Approve or remove `operator` as an operator for the caller.\n Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n Requirements:\n - The `operator` cannot be the caller.\n Emits an {ApprovalForAll} event."
            },
            "functionSelector": "a22cb465",
            "id": 1576,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1571,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1576,
                  "src": "3689:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1570,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3689:7:5",
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
                  "id": 1573,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1576,
                  "src": "3707:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1572,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3707:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3688:34:5"
            },
            "returnParameters": {
              "id": 1575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3731:0:5"
            },
            "scope": 1599,
            "src": "3662:70:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1577,
              "nodeType": "StructuredDocumentation",
              "src": "3738:138:5",
              "text": " @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n See {setApprovalForAll}"
            },
            "functionSelector": "e985e9c5",
            "id": 1586,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1579,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3907:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:7:5",
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
                  "id": 1581,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3922:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1580,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3922:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:33:5"
            },
            "returnParameters": {
              "id": 1585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1584,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3963:4:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1583,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3963:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3962:6:5"
            },
            "scope": 1599,
            "src": "3881:88:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1587,
              "nodeType": "StructuredDocumentation",
              "src": "3975:556:5",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "b88d4fde",
            "id": 1598,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1589,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4571:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1588,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4571:7:5",
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
                  "id": 1591,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4593:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4593:7:5",
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
                  "id": 1593,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4613:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4613:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1595,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4638:19:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1594,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4638:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4561:102:5"
            },
            "returnParameters": {
              "id": 1597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4672:0:5"
            },
            "scope": 1599,
            "src": "4536:137:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1600,
        "src": "175:4500:5"
      }
    ],
    "src": "33:4643:5"
  },
  "legacyAST": {
    "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
    "exportedSymbols": {
      "IERC165": [
        2276
      ],
      "IERC721": [
        1599
      ]
    },
    "id": 1600,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1485,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:5"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "id": 1486,
        "nodeType": "ImportDirective",
        "scope": 1600,
        "sourceUnit": 2277,
        "src": "58:47:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 1488,
              "name": "IERC165",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2276,
              "src": "196:7:5"
            },
            "id": 1489,
            "nodeType": "InheritanceSpecifier",
            "src": "196:7:5"
          }
        ],
        "contractDependencies": [
          2276
        ],
        "contractKind": "interface",
        "documentation": {
          "id": 1487,
          "nodeType": "StructuredDocumentation",
          "src": "107:67:5",
          "text": " @dev Required interface of an ERC721 compliant contract."
        },
        "fullyImplemented": false,
        "id": 1599,
        "linearizedBaseContracts": [
          1599,
          2276
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": {
              "id": 1490,
              "nodeType": "StructuredDocumentation",
              "src": "210:88:5",
              "text": " @dev Emitted when `tokenId` token is transferred from `from` to `to`."
            },
            "id": 1498,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1492,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "318:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:5",
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
                  "id": 1494,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "340:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1493,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:5",
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
                  "id": 1496,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1498,
                  "src": "360:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "317:67:5"
            },
            "src": "303:82:5"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1499,
              "nodeType": "StructuredDocumentation",
              "src": "391:94:5",
              "text": " @dev Emitted when `owner` enables `approved` to manage the `tokenId` token."
            },
            "id": 1507,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1501,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "505:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:5",
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
                  "id": 1503,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "528:24:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1502,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "528:7:5",
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
                  "id": 1505,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1507,
                  "src": "554:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1504,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "554:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:74:5"
            },
            "src": "490:89:5"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1508,
              "nodeType": "StructuredDocumentation",
              "src": "585:117:5",
              "text": " @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
            },
            "id": 1516,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1510,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "728:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1509,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:7:5",
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
                  "id": 1512,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "751:24:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "751:7:5",
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
                  "id": 1514,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1516,
                  "src": "777:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1513,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "727:64:5"
            },
            "src": "707:85:5"
          },
          {
            "documentation": {
              "id": 1517,
              "nodeType": "StructuredDocumentation",
              "src": "798:76:5",
              "text": " @dev Returns the number of tokens in ``owner``'s account."
            },
            "functionSelector": "70a08231",
            "id": 1524,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1519,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1524,
                  "src": "898:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1518,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "898:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "897:15:5"
            },
            "returnParameters": {
              "id": 1523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1522,
                  "mutability": "mutable",
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 1524,
                  "src": "936:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1521,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "936:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "935:17:5"
            },
            "scope": 1599,
            "src": "879:74:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1525,
              "nodeType": "StructuredDocumentation",
              "src": "959:131:5",
              "text": " @dev Returns the owner of the `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "6352211e",
            "id": 1532,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1527,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1532,
                  "src": "1112:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1111:17:5"
            },
            "returnParameters": {
              "id": 1531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1530,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1532,
                  "src": "1152:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1529,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1151:15:5"
            },
            "scope": 1599,
            "src": "1095:72:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1533,
              "nodeType": "StructuredDocumentation",
              "src": "1173:690:5",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n are aware of the ERC721 protocol to prevent tokens from being forever locked.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "42842e0e",
            "id": 1542,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1535,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1903:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1534,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:5",
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
                  "id": 1537,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1925:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1536,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1925:7:5",
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
                  "id": 1539,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1542,
                  "src": "1945:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1945:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1893:73:5"
            },
            "returnParameters": {
              "id": 1541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1975:0:5"
            },
            "scope": 1599,
            "src": "1868:108:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1543,
              "nodeType": "StructuredDocumentation",
              "src": "1982:504:5",
              "text": " @dev Transfers `tokenId` token from `from` to `to`.\n WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 1552,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1545,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2522:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2522:7:5",
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
                  "id": 1547,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2544:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2544:7:5",
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
                  "id": 1549,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1552,
                  "src": "2564:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1548,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2512:73:5"
            },
            "returnParameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2594:0:5"
            },
            "scope": 1599,
            "src": "2491:104:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1553,
              "nodeType": "StructuredDocumentation",
              "src": "2601:452:5",
              "text": " @dev Gives permission to `to` to transfer `tokenId` token to another account.\n The approval is cleared when the token is transferred.\n Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n Requirements:\n - The caller must own the token or be an approved operator.\n - `tokenId` must exist.\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 1560,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1555,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1560,
                  "src": "3075:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3075:7:5",
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
                  "id": 1557,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1560,
                  "src": "3087:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3087:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3074:29:5"
            },
            "returnParameters": {
              "id": 1559,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3112:0:5"
            },
            "scope": 1599,
            "src": "3058:55:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1561,
              "nodeType": "StructuredDocumentation",
              "src": "3119:139:5",
              "text": " @dev Returns the account approved for `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "081812fc",
            "id": 1568,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1563,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1568,
                  "src": "3284:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3284:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3283:17:5"
            },
            "returnParameters": {
              "id": 1567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1566,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1568,
                  "src": "3324:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1565,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3324:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3323:18:5"
            },
            "scope": 1599,
            "src": "3263:79:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1569,
              "nodeType": "StructuredDocumentation",
              "src": "3348:309:5",
              "text": " @dev Approve or remove `operator` as an operator for the caller.\n Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n Requirements:\n - The `operator` cannot be the caller.\n Emits an {ApprovalForAll} event."
            },
            "functionSelector": "a22cb465",
            "id": 1576,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1571,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1576,
                  "src": "3689:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1570,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3689:7:5",
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
                  "id": 1573,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 1576,
                  "src": "3707:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1572,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3707:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3688:34:5"
            },
            "returnParameters": {
              "id": 1575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3731:0:5"
            },
            "scope": 1599,
            "src": "3662:70:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1577,
              "nodeType": "StructuredDocumentation",
              "src": "3738:138:5",
              "text": " @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n See {setApprovalForAll}"
            },
            "functionSelector": "e985e9c5",
            "id": 1586,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1579,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3907:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:7:5",
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
                  "id": 1581,
                  "mutability": "mutable",
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3922:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1580,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3922:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:33:5"
            },
            "returnParameters": {
              "id": 1585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1584,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1586,
                  "src": "3963:4:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1583,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3963:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3962:6:5"
            },
            "scope": 1599,
            "src": "3881:88:5",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1587,
              "nodeType": "StructuredDocumentation",
              "src": "3975:556:5",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "b88d4fde",
            "id": 1598,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1589,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4571:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1588,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4571:7:5",
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
                  "id": 1591,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4593:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4593:7:5",
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
                  "id": 1593,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4613:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4613:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1595,
                  "mutability": "mutable",
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 1598,
                  "src": "4638:19:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1594,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4638:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4561:102:5"
            },
            "returnParameters": {
              "id": 1597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4672:0:5"
            },
            "scope": 1599,
            "src": "4536:137:5",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 1600,
        "src": "175:4500:5"
      }
    ],
    "src": "33:4643:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-09-14T10:34:06.582Z",
  "devdoc": {
    "details": "Required interface of an ERC721 compliant contract.",
    "events": {
      "Approval(address,address,uint256)": {
        "details": "Emitted when `owner` enables `approved` to manage the `tokenId` token."
      },
      "ApprovalForAll(address,address,bool)": {
        "details": "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
      },
      "Transfer(address,address,uint256)": {
        "details": "Emitted when `tokenId` token is transferred from `from` to `to`."
      }
    },
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
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
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