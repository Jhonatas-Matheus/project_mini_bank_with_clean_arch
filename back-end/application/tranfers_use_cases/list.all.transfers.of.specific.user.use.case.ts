import { TransfersRepository } from "../../domain/repositories/transfers.repository";

export class ListAllTransfersOfSpecificUserUseCase {
  constructor(private transfersRepository: TransfersRepository) {}
  async execute(accountId: string) {
    const data =
      await this.transfersRepository.listAllTransferForSpecificUserById(
        accountId
      );
    return data;
  }
}
