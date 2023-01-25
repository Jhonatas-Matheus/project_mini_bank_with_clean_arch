import { Account } from "../entities/Account";

export interface AccountsRepository {
  create(account: Account): Promise<Account>;
  listAllAccounts(): Promise<Account[]>;
  findAccountById(id: string): Promise<Account | undefined>;
  updateAccountData(data: Account): Promise<void>;
}
