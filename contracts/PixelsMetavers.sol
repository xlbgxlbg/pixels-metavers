// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract PixelsMetavers {
    uint256 _goodsIds;

    struct AssetsStruct {
        string category;
        string data;
        uint256 id;
        bool isOutfit; //衣服, 装备, 服装, 外套, 行头, 打扮
    }
    mapping(address => mapping(uint256 => AssetsStruct[])) public assetsObj;

    struct UserStruct {
        address account;
        string bgColor;
        string size;
        string gridColor;
        bool withGrid;
        bool isMerchant;
        AssetsStruct[] assets;
    }
    mapping(address => UserStruct) public userObj;
    UserStruct[] public userList;

    struct ShopStruct {
        address merchant;
        string name;
        AssetsStruct[] assets;
        GoodsStruct[] goods;
    }
    ShopStruct[] public shopList;
    mapping(address => ShopStruct) public shopObj;

    struct GoodsStruct {
        address merchant;
        string name;
        string category;
        string data;
        uint256 amount;
        uint256 price;
        uint256 weight;
        uint256 id;
        uint256 saleAmount;
    }
    mapping(uint256 => GoodsStruct) public goodsObj;
    GoodsStruct[] public goodsList;

    event HandleList(string types); // outfit application post buy

    modifier MustMerchant(address from) {
        UserStruct memory user = userObj[from];
        require(user.isMerchant == false, "Only Merchant Can Do It!");
        _;
    }

    modifier CheckGoodsIsExist(uint256 id) {
        require(goodsObj[id].merchant == address(0), "The product does exist!");
        _;
    }

    modifier MustGoodsIsExist(uint256 id) {
        require(
            goodsObj[id].merchant != address(0),
            "The product does not exist!"
        );
        _;
    }

    constructor() {}

    function mint(uint256[] memory ids) public {
        UserStruct memory user = userObj[msg.sender];
        require(
            user.account != address(0),
            "You are already a platform merchant!"
        );
        for (uint256 i; i < ids.length - 1; i++) {
            _outfit(ids[i], i, true);
        }
        userObj[msg.sender].account = msg.sender;
    }

    function setConfig(
        string memory bgColor,
        string memory size,
        string memory gridColor,
        bool withGrid
    ) public {
        UserStruct memory user = userObj[msg.sender];
        require(
            user.account != address(0),
            "You are already a platform merchant!"
        );
        user.bgColor = bgColor;
        user.size = size;
        user.gridColor = gridColor;
        user.withGrid = withGrid;
        userObj[msg.sender] = user;
    }

    function application(string memory name) public {
        UserStruct memory user = userObj[msg.sender];
        require(user.isMerchant, "You are already a platform merchant!");
        shopObj[msg.sender].name = name;
        shopObj[msg.sender].merchant = msg.sender;
    }

    function getShopLength() public view returns (uint256) {
        return shopList.length;
    }

    function getUserLength() public view returns (uint256) {
        return userList.length;
    }

    function getGoodsLength() public view returns (uint256) {
        return goodsList.length;
    }

    function postGoods(
        string memory name,
        string memory category,
        uint256 amount,
        uint256 price,
        uint256 weight,
        string memory data
    ) public MustMerchant(msg.sender) {
        uint256 id = _goodsIds++;
        GoodsStruct memory goods = GoodsStruct(
            msg.sender,
            name,
            category,
            data,
            amount,
            price,
            weight,
            id,
            0
        );

        shopObj[msg.sender].goods.push(goods);

        goodsObj[id] = goods;
        goodsList.push(goods);
    }

    function buyGoods(uint256 id) public MustGoodsIsExist(id) {
        GoodsStruct memory goods = goodsObj[id];
        uint256 surplusAmount = goods.amount - goods.saleAmount;
        require(surplusAmount <= 0, "The item is out of stock!");
        goods.saleAmount = goods.saleAmount + 1;
        userObj[msg.sender].assets.push(
            AssetsStruct(goods.category, goods.data, id, false)
        );
    }

    function _outfit(
        uint256 id,
        uint256 index,
        bool isOutfit
    ) internal MustGoodsIsExist(id) {
        AssetsStruct[] memory assets = userObj[msg.sender].assets;
        require(assets[index].id != id, "The current item is not your asset!");
        userObj[msg.sender].assets[index].isOutfit = isOutfit;
    }

    function outfit(
        uint256 id,
        uint256 index,
        bool isOutfit
    ) internal MustGoodsIsExist(id) {
        _outfit(id, index, isOutfit);
    }
}
