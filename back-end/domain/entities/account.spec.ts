import { describe, expect, it, test } from "vitest";
import { Account, AccountProps } from "./Account";

describe("Account Tests", () => {
  it("Should be albe to create account.", () => {
    const data: AccountProps = { ownerName: "Jhonatas" };
    const account = new Account(data);
    expect(account.ownerName).toBe(account.ownerName);
    expect(account).haveOwnProperty("id");
    expect(account.props).haveOwnProperty("balance");
  });
  test("Should be not albe to create account with balance negative.", () => {
    const createAccount = () => {
      const data: AccountProps = { ownerName: "Jhonatas", balance: -50 };
      const account = new Account(data);
      return account;
    };
    expect(createAccount).toThrow(
      new Error("Impossible create account initial balance invalid.")
    );
  });
  it("Should be albe to create account with ownerName contains invalid characteres.", () => {
    const createAccount = () => {
      const data: AccountProps = { ownerName: "Jhon@atas", balance: -50 };
      const account = new Account(data);
      return account;
    };
    expect(createAccount).toThrow(
      new Error("Impossible create account initial balance invalid.")
    );
  });
  it("Should not be albe to create account without ownerName.", () => {
    const createAccount = () => {
      const data: AccountProps = { ownerName: "", balance: -50 };
      const account = new Account(data);
      account.changeOwnerName("C@tat4u");
      return account;
    };
    expect(createAccount).toThrow(
      new Error("Impossible create account without ownerName.")
    );
  });
  it("Should be albe to change owner account name", () => {
    const data: AccountProps = { ownerName: "Jhonatas" };
    const account = new Account(data);
    account.changeOwnerName("Matheus");
    expect(account.ownerName).toBe("Matheus");
  });
  it("Should not be albe to update account ownerName with ownerName contains invalid characteres.", () => {
    const createAccount = () => {
      const data: AccountProps = { ownerName: "Jhonaatas", balance: -50 };
      const account = new Account(data);
      account.changeOwnerName("C@tat4u");
      return account;
    };
    expect(createAccount).toThrow(
      new Error("Impossible create account initial balance invalid.")
    );
  });
  it("Should be albe to make a deposit in account", () => {
    const data: AccountProps = { ownerName: "Jhonatas" };
    const account = new Account(data);
    account.deposit(20);
    expect(account.balance).toBe(20);
  });
  it("Should be albe to make a debit in account", () => {
    const data: AccountProps = { ownerName: "Jhonatas", balance: 50 };
    const account = new Account(data);
    account.deposit(20);
    account.debit(60);
    expect(account.balance).toBe(10);
  });
  it("Should not be albe to make a debit in account if value to debit is higher greater than balance. ", () => {
    const debitInAccount = () => {
      const data: AccountProps = { ownerName: "Jhonatas", balance: 50 };
      const account = new Account(data);
      account.deposit(20);
      account.debit(60);
      account.debit(20);
    };
    expect(debitInAccount).toThrow(
      new Error(
        "It is not possible to make a debit with an amount greater than your balance"
      )
    );
  });
});
