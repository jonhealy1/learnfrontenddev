const ganache = require("ganache");
const { Web3 } = require("web3");

const assert = require("assert");
const { isTypedArray } = require("util/types");

// contract test code will go here
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // Get a list of all accounts
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts);
  });

  // Use one of those accounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {});
});
