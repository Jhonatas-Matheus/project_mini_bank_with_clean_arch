import { Transfer } from "../../domain/entities/Transfer";
import { TransfersRepository } from "../../domain/repositories/transfers.repository";
import { AccountsRepository } from "../../domain/repositories/accounts.repository";

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
    const newTransfer = new Transfer({
      accountFrom: account1,
      accountTo: account2,
      value,
    });
    newTransfer.makeTransfer();
    await this.repositoryTransfers.create(newTransfer);
    this.repositoryAccounts.updateAccountData(account1);
    this.repositoryAccounts.updateAccountData(account2);
    return { message: "Transferência feita com sucesso.", id: newTransfer.id };
  }
}
