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
    console.log(findAccount);
    await this.repository.update({ id: data.id }, { balance: data.balance });
  }
}

// export class PostgresAccountRepository implements AccountsRepository {
// constructor(private repository: Repository<AccountTypeORM>) {}
// async create(account: Account): Promise<Account> {
//   const accountCreated = this.repository.create(account);
//   await this.repository.save(accountCreated);
//   return account;
//   }
//   async listAllAccounts(): Promise<Account[]> {
// const allAccounts = await this.repository.find();
// const allAccountsOrigin = allAccounts.map((e) => new Account(e));
// return allAccountsOrigin;
//   }
//   async findAccountById(id: string): Promise<Account | undefined> {
// const accountFind = await this.repository.findOneBy({ id: id });
// if (!accountFind) {
//   throw new Error("Conta não existe.");
// }
// return new Account(accountFind, id);
//   }
//   async updateAccountData(data: Account): Promise<void> {
// console.log(data);
// const findAccount = await this.repository.findOneBy({ id: data.id });
// console.log(findAccount);
// await this.repository.update({ id: data.id }, { balance: data.balance });
// // await this.repository.save({ ...findAccount, ...data });
//   }
// }
