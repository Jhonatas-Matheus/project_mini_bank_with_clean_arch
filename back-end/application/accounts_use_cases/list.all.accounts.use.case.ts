import { AccountDTO } from "../../domain/entities/AccountDTO";
import { AccountsRepository } from "../../domain/repositories/accounts.repository";

// export type ListAllAccountsOutput = {
//   balance: number;
//   ownerName: string;
// };
export class ListAllAccountsUseCase {
  constructor(private repository: AccountsRepository) {}
  async execute(): Promise<AccountDTO[]> {
    return await this.repository.listAllAccounts();
  }
}
