import { Transfer } from "../../domain/entities/Transfer";
import { TransfersRepository } from "../../domain/repositories/transfers.repository";
import { AccountsRepository } from "../../domain/repositories/accounts.repository";
import { Account } from "../../domain/entities/Account";

type CreateTransferInput = {
  accountFromId: string;
  accountToId: string;
  value: number;
};
type CreateTransferOutput = {
  id: string;
  message: string;
};

export class CreateTransferUseCase {
  constructor(
    private repositoryTransfers: TransfersRepository,
    private repositoryAccounts: AccountsRepository
  ) {}

  async execute({
    accountFromId,
    accountToId,
    value,
  }: CreateTransferInput): Promise<CreateTransferOutput> {
    const account1 = await this.repositoryAccounts.findAccountById(
      accountFromId
    );
    const account2 = await this.repositoryAccounts.findAccountById(accountToId);
    if (!account1 || !account2) {
      throw new Error(
        "Error identifying accounts please make sure the ids are correct."
      );
    }
    const newAccount1 = new Account(account1, account1.id);
    const newAccount2 = new Account(account2, account2.id);
    const newTransfer = new Transfer({
      accountFrom: newAccount1,
      accountTo: newAccount2,
      value,
    });
    newTransfer.makeTransfer();
    await this.repositoryTransfers.create(newTransfer);
    this.repositoryAccounts.updateAccountData(newAccount1);
    this.repositoryAccounts.updateAccountData(newAccount2);
    return { message: "Transferência feita com sucesso.", id: newTransfer.id };
  }
}
