import { describe, expect, it } from "vitest";
import { Account } from "./Account";
import { Transfer } from "./Transfer";

describe("Transfer tests.", () => {
  it("Shoud be able a make a transfer between two accounts.", () => {
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 300 });
    const transfer = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 80,
    });
    transfer.makeTransfer();
    expect(account1.balance).toBe(420);
    expect(account2.balance).toBe(380);
    expect(transfer).toHaveProperty("id");
  });
});
