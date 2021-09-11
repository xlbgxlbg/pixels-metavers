// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./IPMT721.sol";

contract PixelsMetavers {
    IPMT721 PMT721;

    struct AssetsStruct {
        string category;
        string data;
        uint256 id;
        bool isOutfit; //衣服, 装备, 服装, 外套, 行头, 打扮
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
        uint256 index;
    }
    mapping(uint256 => GoodsStruct) public goodsObj;
    GoodsStruct[] public goodsList;

    event HandleList(string types); // outfit application post buy

    modifier MustMerchant(address from) {
        ShopStruct memory shop = shopObj[from];
        require(shop.owner != address(0), "Only Merchant Can Do It!");
        _;
    }

    modifier MustUser(address from) {
        UserStruct memory user = userObj[from];
        require(user.account != address(0), "Only User Can Do It!");
        _;
    }

    modifier MustGoodsIsExist(uint256 id) {
        require(
            IPMT721(PMT721).exits(id),
            "The product does not exist!"
        );
        _;
    }

    uint256 private unlocked = 1;
    modifier Lock() {
        require(unlocked == 1, "The Function: LOCKED");
        unlocked = 0;
        _;
        unlocked = 1;
    }

    constructor() {}

    function mint(uint256[] memory ids) public MustUser(msg.sender) {
        for (uint256 i; i < ids.length - 1; i++) {
            require(
                msg.sender == IPMT721(PMT721).ownerOf(ids[i]),
                "The product is not your asset!"
            );
            _outfit(ids[i], i, true);
        }
    }

    function register() public {
        UserStruct memory user = userObj[msg.sender];
        require(user.account == address(0), "You are already a platform user!");
        userObj[msg.sender].account = msg.sender;
        userObj[msg.sender].index = userList.length;
        userList.push(userObj[msg.sender]);
    }

    function setConfig(
        string memory bgColor,
        string memory gridColor,
        bool withGrid,
        uint userIndex
    ) public MustUser(msg.sender) {
        UserStruct memory user = userObj[msg.sender];
        user.bgColor = bgColor;
        user.gridColor = gridColor;
        user.withGrid = withGrid;
        userObj[msg.sender] = user;
        userList[userIndex] = user;
    }

    function application(string memory name, uint userIndex) public MustUser(msg.sender) {
        UserStruct memory user = userObj[msg.sender];
        require(!user.isMerchant, "You are already a platform merchant!");
        shopObj[msg.sender].name = name;
        shopObj[msg.sender].owner = msg.sender;
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

    function getUserAssetsLength() public view returns (uint256) {
        return assetsObj[msg.sender].length;
    }

    function getUserAssets(address user)
        public
        view
        returns (AssetsStruct[] memory)
    {
        return assetsObj[user];
    }

    function postGoods(
        string memory name,
        string memory category,
        string memory data,
        uint256 price,
        uint256 amount
    ) public MustMerchant(msg.sender) Lock {
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
                goodsList.length
            );

            goodsObj[currentID] = goods;
            goodsList.push(goods);
        }
    }

    function buyGoods(uint256 id, uint256 goodsIndex)
        public
        payable
        MustGoodsIsExist(id)
        MustUser(msg.sender)
        Lock
    {
        GoodsStruct memory goods = goodsObj[id];
        require(
            msg.sender != goods.owner,
            "Cannot be produced and sold on their own!"
        );
        require(
            msg.value >= goods.price,
            "The amount paid is lower than the price of the commodity!"
        );
        IPMT721(PMT721).safeTransferFrom(address(this), msg.sender, id);
        assetsObj[msg.sender].push(
            AssetsStruct(
                goodsObj[id].category,
                goodsObj[id].data,
                id,
                false,
                assetsObj[msg.sender].length
            )
        );
        _safeTransferETH(goodsObj[id].owner, msg.value);
        goodsObj[id].owner = msg.sender;
        goodsObj[id].isSale = false;
        goodsList[goodsIndex].owner = msg.sender;
        goodsList[goodsIndex].isSale = false;
    }

    function _outfit(
        uint256 id,
        uint256 assetsIndex,
        bool isOutfit
    ) internal MustGoodsIsExist(id) {
        require(
            msg.sender == IPMT721(PMT721).ownerOf(id),
            "The current item is not your asset!"
        );
        assetsObj[msg.sender][assetsIndex].isOutfit = isOutfit;
    }

    function outfit(
        uint256 id,
        uint256 index,
        bool isOutfit
    ) public MustGoodsIsExist(id) Lock {
        _outfit(id, index, isOutfit);
    }

    function _safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        require(
            success,
            "TransferHelper::safeTransferETH: ETH transfer failed"
        );
    }

    function setPMT721(address pmt721) public {
        PMT721 = IPMT721(pmt721);
    }
}
