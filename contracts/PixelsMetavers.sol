// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PixelsMetavers is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    uint256 userAmount;

    struct UserStruct {
        uint256 id;
        address account;
        string shopName;
        string bgColor;
        string gridColor;
        bool withGrid;
        bool isMerchant;
    }
    mapping(address => UserStruct) public user;

    struct GoodsStruct {
        uint256 id;
        address owner;
        string name;
        string category;
        string data;
        uint256 price;
        bool isSale;
        bool isOutfit;
        string bgColor;
    }
    mapping(uint256 => GoodsStruct) public goods;

    uint256[] public goodsList;

    modifier MustUser(address from) {
        require(user[from].account != address(0), "Only User Can Do It!");
        _;
    }

    modifier MustGoodsIsExist(uint256 id) {
        require(_exists(id), "The product does not exist!");
        _;
    }

    uint256 private unlocked = 1;
    modifier Lock() {
        require(unlocked == 1, "The Function: LOCKED");
        unlocked = 0;
        _;
        unlocked = 1;
    }

    constructor() ERC721("PixelsMetavers", "PMT") {}

    function register() public Lock {
        require(
            user[msg.sender].account == address(0),
            "You are already a platform user!"
        );
        require(
            userAmount <= 10240000,
            "The number has exceeded the total population of the universe!"
        );
        userAmount++;
        user[msg.sender].account = msg.sender;
        user[msg.sender].id = userAmount;
    }

    function setConfig(
        string memory bgColor,
        string memory gridColor,
        bool withGrid
    ) public MustUser(msg.sender) {
        user[msg.sender].bgColor = bgColor;
        user[msg.sender].gridColor = gridColor;
        user[msg.sender].withGrid = withGrid;
    }

    function application(string memory name) public MustUser(msg.sender) Lock {
        require(
            !user[msg.sender].isMerchant,
            "You are already a platform merchant!"
        );
        user[msg.sender].isMerchant = true;
        user[msg.sender].shopName = name;
    }

    function getGoodsList() public view returns (uint256[] memory) {
        return goodsList;
    }

    function postGoods(
        string memory name,
        string memory category,
        string memory data,
        uint256 price,
        uint256 amount,
        string memory bgColor
    ) public Lock {
        require(user[msg.sender].isMerchant, "Only Merchant Can Do It!");
        for (uint256 i; i < amount; i++) {
            _tokenId.increment();
            uint256 id = _tokenId.current();
            _mint(msg.sender, id);
            goods[id] = GoodsStruct(
                id,
                msg.sender,
                name,
                category,
                data,
                price,
                true,
                false,
                bgColor
            );
            goodsList.push(id);
        }
    }

    function buyGoods(uint256 id)
        public
        payable
        MustGoodsIsExist(id)
        MustUser(msg.sender)
        Lock
    {
        require(
            msg.value >= goods[id].price,
            "The amount paid is lower than the price of the commodity!"
        );
        require(goods[id].isSale, "The goods saled!");

        (bool success, ) = goods[id].owner.call{value: msg.value}(new bytes(0));
        require(success, "Transfer failed.");
        safeTransferFrom(goods[id].owner, msg.sender, id);

        goods[id].owner = msg.sender;
        goods[id].isSale = false;
    }

    function outfit(uint256 id, bool isOutfit)
        public
        MustGoodsIsExist(id)
        Lock
    {
        require(
            msg.sender == goods[id].owner,
            "The current item is not your asset!"
        );
        require(!goods[id].isSale, "The goods no sale!");
        goods[id].isOutfit = isOutfit;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        if (goods[tokenId].owner == from) {
            goods[tokenId].owner = to;
            goods[tokenId].isSale = false;
        }
    }
}
