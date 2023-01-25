import { Transfer } from "../../../domain/entities/Transfer";
import { TransferDTO } from "../../../domain/entities/TransferDTO";
import { TransfersRepository } from "../../../domain/repositories/transfers.repository";

export class InMemoryTransferRepository implements TransfersRepository {
  public transfers: TransferDTO[] = [];
  async create(transfer: Transfer): Promise<TransferDTO> {
    const { props } = transfer;
    const data: TransferDTO = {
      id: transfer.id,
      value: transfer.props.value,
    };
    this.transfers.push(data);
    return data;
  }
  async findTransferById(id: string): Promise<TransferDTO | undefined> {
    const transferToFind = this.transfers.find((e) => e.id === id);
    return transferToFind;
  }
  async listAllTransfer(): Promise<TransferDTO[]> {
    return this.transfers;
  }
  async listAllTransferForSpecificUserById(id: string): Promise<any> {
    return null;
  }
}
