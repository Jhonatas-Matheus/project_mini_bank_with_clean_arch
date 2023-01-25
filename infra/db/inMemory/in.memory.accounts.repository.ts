import { Account } from "../../../domain/entities/Account";
import { AccountsRepository } from "../../../domain/repositories/accounts.repository";
export class InMemoryAccountsRepository implements AccountsRepository {
  public accounts: Account[] = [];
  async updateAccountData(data: Account): Promise<void> {
    return;
  }
  async create(account: Account): Promise<Account> {
    this.accounts.push(account);
    return account;
  }
  async listAllAccounts(): Promise<Account[]> {
    return this.accounts;
  }
  async findAccountById(id: string): Promise<Account | undefined> {
    const accountToFind = this.accounts.find((e) => e.id === id);
    return accountToFind;
  }
}
