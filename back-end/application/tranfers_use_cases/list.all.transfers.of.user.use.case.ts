import { Transfer } from "../../domain/entities/Transfer";
import { TransfersRepository } from "../../domain/repositories/transfers.repository";

export class ListAllTransferOfUserUseCase {
  constructor(private repository: TransfersRepository) {}
  async execute(id: string): Promise<Transfer[]> {
    const transfers = await this.repository.listAllTransferForSpecificUserById(
      id
    );
    return transfers;
  }
}
