var Todolist = artifacts.require("./Todolist.sol");

module.exports = function(deployer) {
  deployer.deploy(Todolist);
};
