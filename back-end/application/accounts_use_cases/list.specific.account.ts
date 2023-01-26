import { AccountsRepository } from "../../domain/repositories/accounts.repository";

export class ListSpecificAccountUseCase {
  constructor(private repositoryAccount: AccountsRepository) {}

  async execute(accountId: string) {
    const data = await this.repositoryAccount.findAccountById(accountId);
    return data;
  }
}
