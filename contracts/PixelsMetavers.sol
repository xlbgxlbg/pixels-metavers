// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract PixelsMetavers {
    uint256 index;

    struct List {
        uint256 id; // id
        uint256 time; // 时间
        string content; // 内容
        address writer; // 写入者
        bool isDone; // 是否完成
    }

    List[] public lists;

    event HandleList(
        uint256 id,
        uint256 time,
        string content,
        address writer,
        string types
    );

    modifier LegalId(uint256 id) {
        require(id <= lists.length, "id no fund");
        require(id >= 0, "id no fund");
        _;
    }

    function add(string memory content) public {
        emit HandleList(index, block.timestamp, content, msg.sender, "add");
        if (index == lists.length) {
            lists.push(
                List(index, block.timestamp, content, msg.sender, false)
            );
            index++;
        } else {
            lists[index].id = index;
            lists[index].time = block.timestamp;
            lists[index].content = content;
            lists[index].writer = msg.sender;
            lists[index].isDone = false;

            index = lists.length;
        }
    }

    function getLength() public view returns (uint256) {
        return lists.length;
    }

    function done(uint256 id) public LegalId(id) {
        List storage list = lists[id];
        require(list.isDone == false);
        list.isDone = true;
        emit HandleList(id, block.timestamp, list.content, msg.sender, "done");
    }

    function remove(uint256 id) public LegalId(id) {
        List storage list = lists[id];
        require(list.isDone == true);
        emit HandleList(id, block.timestamp, list.content, msg.sender, "remove");
        delete lists[id];
        index = id;
    }
}
