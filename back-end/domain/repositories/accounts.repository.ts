import { Account } from "../entities/Account";
import { AccountDTO } from "../entities/AccountDTO";

export interface AccountsRepository {
  create(account: AccountDTO): Promise<AccountDTO>;
  listAllAccounts(): Promise<AccountDTO[]>;
  findAccountById(id: string): Promise<AccountDTO | undefined>;
  updateAccountData(data: AccountDTO): Promise<void>;
}
