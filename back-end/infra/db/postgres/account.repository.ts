import { Repository } from "typeorm";
import { Account } from "../../../domain/entities/Account";
import { AccountDTO } from "../../../domain/entities/AccountDTO";
import { AccountsRepository } from "../../../domain/repositories/accounts.repository";
import { AccountTypeORM } from "./entities/Account";

export class PostgresAccountRepository implements AccountsRepository {
  constructor(private repository: Repository<AccountTypeORM>) {}
  async create(account: AccountDTO): Promise<AccountDTO> {
    const accountCreated = this.repository.create(account);
    await this.repository.save(accountCreated);
    return accountCreated;
  }

  async listAllAccounts(): Promise<AccountDTO[]> {
    const allAccounts = await this.repository.find();
    return allAccounts;
  }
  async findAccountById(id: string): Promise<AccountDTO | undefined> {
    const accountFind = await this.repository.findOneBy({ id: id });
    if (!accountFind) {
      throw new Error("Conta não existe.");
    }
    return accountFind;
  }
  async updateAccountData(data: AccountDTO): Promise<void> {
    const findAccount = await this.repository.findOneBy({ id: data.id });
    await this.repository.update({ id: data.id }, { balance: data.balance });
  }
}
