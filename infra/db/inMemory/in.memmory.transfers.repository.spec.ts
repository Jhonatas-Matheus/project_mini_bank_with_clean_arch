import { describe, expect, it } from "vitest";
import { Account } from "../../../domain/entities/Account";
import { Transfer } from "../../../domain/entities/Transfer";
import { InMemoryTransferRepository } from "./in.memmory.transfers.repository";

describe("InMemoryTransfersRepository tests.", () => {
  it("Should be able to save a tranfer in database. ", () => {
    const transfersRepository = new InMemoryTransferRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const newTransfer = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 300,
    });
    transfersRepository.create(newTransfer);
    expect(transfersRepository.transfers).toHaveLength(1);
  });
  it("Should be able to find transfers by id. ", async () => {
    const transfersRepository = new InMemoryTransferRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const newTransfer1 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 300,
    });
    const newTransfer2 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 321,
    });
    transfersRepository.create(newTransfer1);
    transfersRepository.create(newTransfer2);
    const response = await transfersRepository.findTransferById(
      newTransfer2.id
    );
    expect(response).toStrictEqual(newTransfer2);
  });
  it("Should be able to list all transfers registred. ", async () => {
    const transfersRepository = new InMemoryTransferRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const account3 = new Account({ ownerName: "Moisés", balance: 1500 });
    const newTransfer1 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 300,
    });
    const newTransfer2 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 321,
    });
    const newTransfer3 = new Transfer({
      accountFrom: account3,
      accountTo: account2,
      value: 321,
    });
    transfersRepository.create(newTransfer1);
    transfersRepository.create(newTransfer2);
    transfersRepository.create(newTransfer3);
    const response = await transfersRepository.listAllTransfer();
    expect(response).toHaveLength(3);
  });
  it("Should be able to list all transfers of specific account by id. ", async () => {
    const transfersRepository = new InMemoryTransferRepository();
    const account1 = new Account({ ownerName: "Jhonatas", balance: 500 });
    const account2 = new Account({ ownerName: "Matheus", balance: 1000 });
    const account3 = new Account({ ownerName: "Moisés", balance: 1500 });
    const newTransfer1 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 300,
    });
    const newTransfer2 = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value: 321,
    });
    const newTransfer3 = new Transfer({
      accountFrom: account3,
      accountTo: account2,
      value: 321,
    });
    transfersRepository.create(newTransfer1);
    transfersRepository.create(newTransfer2);
    transfersRepository.create(newTransfer3);
    const response =
      await transfersRepository.listAllTransferForSpecificUserById(account1.id);
    expect(response).toHaveLength(2);
    expect(response).toStrictEqual([newTransfer1, newTransfer2]);
  });
});
