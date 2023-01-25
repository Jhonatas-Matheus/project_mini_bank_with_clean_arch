import { Transfer } from "../../../domain/entities/Transfer";
import { TransfersRepository } from "../../../domain/repositories/transfers.repository";

export class InMemoryTransferRepository implements TransfersRepository {
  public transfers: Transfer[] = [];
  async create(transfer: Transfer): Promise<Transfer> {
    this.transfers.push(transfer);
    return transfer;
  }
  async findTransferById(id: string): Promise<Transfer | undefined> {
    const transferToFind = this.transfers.find((e) => e.id === id);
    return transferToFind;
  }
  async listAllTransfer(): Promise<Transfer[]> {
    return this.transfers;
  }
  async listAllTransferForSpecificUserById(id: string): Promise<Transfer[]> {
    const tranfersOfAccountSpecified = this.transfers.filter(
      (e) => e.props.accountFrom.id === id || e.props.accountTo.id === id
    );
    return tranfersOfAccountSpecified;
  }
}
