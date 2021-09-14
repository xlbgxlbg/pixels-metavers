// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./IPMT721.sol";

contract PixelsMetavers {
    IPMT721 PMT721;
    address owner;
    modifier MustOwner(address from) {
        require(from == owner, "Only Owner Can Do It!");
        _;
    }

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
        require(IPMT721(PMT721).exits(id), "The product does not exist!");
        _;
    }

    uint256 private unlocked = 1;
    modifier Lock() {
        require(unlocked == 1, "The Function: LOCKED");
        unlocked = 0;
        _;
        unlocked = 1;
    }

    constructor() {
        owner = msg.sender;
    }

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
            IPMT721(PMT721).mint();
            uint256 currentID = IPMT721(PMT721).getCurrentID();

            goods[currentID] = GoodsStruct(
                currentID,
                msg.sender,
                name,
                category,
                data,
                price,
                true,
                false,
                bgColor
            );
            goodsList.push(currentID);
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

        IPMT721(PMT721).safeTransferFrom(address(this), msg.sender, id);

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

    function setPMT721(address pmt721) public MustOwner(msg.sender) {
        PMT721 = IPMT721(pmt721);
    }
}
