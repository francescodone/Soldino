pragma solidity ^0.5.0;

import "../ContractManager.sol";
import "../storage/UserStorage.sol";
import "../Government.sol";

contract UserLogic {
    ContractManager contractManager;

    UserStorage userStorage;

    Government government;

    constructor(address _contractManagerAddress) public {
        contractManager = ContractManager(_contractManagerAddress);
        userStorage = UserStorage(contractManager.getContractAddress("UserStorage"));
        government = Government(contractManager.getContractAddress("Government"));
    }

    function addCitizen(bytes32 _hashIpfs, uint8 _hashSize, uint8 _hashFun) public {
        //add the new entry to userstorage
        userStorage.addUser(msg.sender, 1, _hashFun, _hashSize, _hashIpfs);
    }

    function addBusiness(bytes32 _hashIpfs,uint8 _hashSize,uint8 _hashFun) public {
        //add the new entry to userstorage
        userStorage.addUser(msg.sender, 2, _hashFun, _hashSize, _hashIpfs);
    }

    function isRegistered(address _userAddress) public view returns(bool) {
        return userStorage.getUserType(_userAddress) == 0 ? false : true;
    }

    function login(address _userAddress) public view returns (uint8) {
        require(isRegistered(_userAddress), "User must be registered");
        return userStorage.getUserType(_userAddress);
    }

    function getUserInfo(address _userAddress)
        public view
        returns (bytes32, uint8, uint8)
    {
        require(isRegistered(_userAddress), "User must be registered");
        uint8 userType = userStorage.getUserType(_userAddress);
        require(userType == 1 || userType == 2 || userType == 3, "Something went wrong");
        return userStorage.getIpfsCid(_userAddress);

    }

}
