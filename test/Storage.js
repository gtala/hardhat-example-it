const { expect } = require("chai");

describe.only("Storage", function () { 

    it("Should call store function", async function () {

    const Storage = await ethers.getContractFactory("Storage");
    const contractStorage = await Storage.deploy();

    await contractStorage.store(1)
    const value = await contractStorage.retrieve()

    expect(value).to.equal(1)

    
      });
  

})