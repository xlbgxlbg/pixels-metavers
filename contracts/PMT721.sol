// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PMT721 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    address _minter;
    modifier MustMinter(address from) {
        require(from == _minter, "Only Minter Can Do It!");
        _;
    }

    constructor() ERC721("PixelsMetavers", "PMT") {
        _minter = msg.sender;
    }

    function mint() public MustMinter(msg.sender) {
        _tokenId.increment();
        uint256 id = _tokenId.current();
        _mint(msg.sender, id);
    }

    function exits(uint256 id) public view returns (bool) {
        return _exists(id);
    }

    function setMinter(address minter) public {
        _minter = minter;
    }

    function getMinter() public view returns (address){
        return _minter;
    }

    function getCurrentID() public view returns (uint){
        return _tokenId.current();
    }
}
