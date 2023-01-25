import { Account } from "../../domain/entities/Account";
import { AccountsRepository } from "../../domain/repositories/accounts.repository";
type CreateAccountInput = {
  ownerName: string;
  balance?: number;
};
type CreateAccountOutput = {
  id: string;
  ownerName: string;
  balance?: number;
};

export class CreateAccountUseCase {
  constructor(private repository: AccountsRepository) {}

  async execute(input: CreateAccountInput): Promise<CreateAccountOutput> {
    const newAccount = new Account(input);
    await this.repository.create(newAccount);
    return newAccount;
  }
}
