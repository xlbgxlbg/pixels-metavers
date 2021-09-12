// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./IPMT721.sol";

contract PixelsMetavers {
    IPMT721 PMT721;
    address owner;

    struct AssetsStruct {
        address owner;
        string category;
        string name;
        string data;
        uint256 id;
        bool isOutfit;
        uint256 index;
    }
    mapping(address => AssetsStruct[]) public assetsObj;

    struct UserStruct {
        address account;
        string bgColor;
        string gridColor;
        bool withGrid;
        bool isMerchant;
        uint256 index;
    }
    mapping(address => UserStruct) public userObj;
    UserStruct[] public userList;

    struct ShopStruct {
        address owner;
        string name;
        uint256 index;
    }
    ShopStruct[] public shopList;
    mapping(address => ShopStruct) public shopObj;

    struct GoodsStruct {
        address owner;
        string name;
        string category;
        string data;
        uint256 price;
        uint256 id;
        bool isSale;
        string bgColor;
        uint256 index;
        uint256 shopIndex;
    }
    mapping(uint256 => GoodsStruct) public goodsObj;
    mapping(address => GoodsStruct[]) public goodsListBuyShop;
    GoodsStruct[] public goodsList;

    event HandleList(string types);

    modifier MustUser(address from) {
        require(userObj[from].account != address(0), "Only User Can Do It!");
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

    function register() public {
        require(userObj[msg.sender].account == address(0), "You are already a platform user!");
        userObj[msg.sender].account = msg.sender;
        userObj[msg.sender].index = userList.length;
        userList.push(userObj[msg.sender]);
    }

    function setConfig(
        string memory bgColor,
        string memory gridColor,
        bool withGrid,
        uint256 userIndex
    ) public MustUser(msg.sender) {
        userObj[msg.sender].bgColor = bgColor;
        userObj[msg.sender].gridColor = gridColor;
        userObj[msg.sender].withGrid = withGrid;
        userObj[msg.sender] = userObj[msg.sender];
        userList[userIndex] = userObj[msg.sender];
    }

    function application(string memory name, uint256 userIndex)
        public
        MustUser(msg.sender)
    {
        require(!userObj[msg.sender].isMerchant, "You are already a platform merchant!");
        shopObj[msg.sender].name = name;
        shopObj[msg.sender].owner = msg.sender;
        shopObj[msg.sender].index = shopList.length;
        userObj[msg.sender].isMerchant = true;
        userList[userIndex].isMerchant = true;
        shopList.push(shopObj[msg.sender]);
    }

    function getUserLength() public view returns (uint256) {
        return userList.length;
    }

    function getShopLength() public view returns (uint256) {
        return shopList.length;
    }

    function getGoodsLength() public view returns (uint256) {
        return goodsList.length;
    }

    function getUserAssetsLength(address user) public view returns (uint256) {
        return assetsObj[user].length;
    }

    function getUserAssets(address user)
        public
        view
        returns (AssetsStruct[] memory)
    {
        return assetsObj[user];
    }

    function getShopGoods(address shop)
        public
        view
        returns (GoodsStruct[] memory)
    {
        return goodsListBuyShop[shop];
    }

    function postGoods(
        string memory name,
        string memory category,
        string memory data,
        uint256 price,
        uint256 amount,
        string memory bgColor
    ) public Lock {
        require(shopObj[msg.sender].owner != address(0), "Only Merchant Can Do It!");
        for (uint256 i; i < amount; i++) {
            IPMT721(PMT721).mint();
            uint256 currentID = IPMT721(PMT721).getCurrentID();

            GoodsStruct memory goods = GoodsStruct(
                msg.sender,
                name,
                category,
                data,
                price,
                currentID,
                true,
                bgColor,
                goodsList.length,
                goodsListBuyShop[msg.sender].length
            );

            goodsObj[currentID] = goods;
            goodsList.push(goods);
            goodsListBuyShop[msg.sender].push(goods);
        }
    }

    function buyGoods(
        uint256 id,
        uint256 goodsIndex,
        uint256 shopIndex
    ) public payable MustGoodsIsExist(id) MustUser(msg.sender) Lock {
        require(
            msg.sender != IPMT721(PMT721).ownerOf(id),
            "Cannot be produced and sold on their own!"
        );
        require(
            msg.value >= goodsObj[id].price,
            "The amount paid is lower than the price of the commodity!"
        );
        require(goodsObj[id].isSale, "The goods saled!");

        if (address(this) == IPMT721(PMT721).ownerOf(id)) {
            _safeTransferETH(goodsObj[id].owner, msg.value);
            IPMT721(PMT721).safeTransferFrom(address(this), msg.sender, id);
        } else {
            _safeTransferETH(IPMT721(PMT721).ownerOf(id), msg.value);
            IPMT721(PMT721).safeTransferFrom(
                IPMT721(PMT721).ownerOf(id),
                msg.sender,
                id
            );
        }
        assetsObj[msg.sender].push(
            AssetsStruct(
                msg.sender,
                goodsObj[id].category,
                goodsObj[id].name,
                goodsObj[id].data,
                id,
                false,
                assetsObj[msg.sender].length
            )
        );
        goodsObj[id].owner = msg.sender;
        goodsObj[id].isSale = false;
        goodsList[goodsIndex].owner = msg.sender;
        goodsList[goodsIndex].isSale = false;
        goodsListBuyShop[msg.sender][shopIndex].owner = msg.sender;
        goodsListBuyShop[msg.sender][shopIndex].isSale = false;
    }

    function outfit(
        uint256 id,
        uint256 assetsIndex,
        bool isOutfit
    ) public MustGoodsIsExist(id) Lock {
        require(
            msg.sender == IPMT721(PMT721).ownerOf(id),
            "The current item is not your asset!"
        );
        assetsObj[msg.sender][assetsIndex].isOutfit = isOutfit;
    }

    function _safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        require(
            success,
            "TransferHelper::safeTransferETH: ETH transfer failed"
        );
    }

    function setPMT721(address pmt721) public {
        require(msg.sender == owner, "The product does not exist!");
        PMT721 = IPMT721(pmt721);
    }
}