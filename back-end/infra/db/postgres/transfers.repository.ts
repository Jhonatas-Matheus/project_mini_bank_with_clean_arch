import { Repository } from "typeorm";
import { Transfer } from "../../../domain/entities/Transfer";
import { TransfersRepository } from "../../../domain/repositories/transfers.repository";
import { TransferTypeORM } from "./entities/Transfer";

export class PostgresTransfersRepository implements TransfersRepository {
  constructor(private repository: Repository<TransferTypeORM>) {}
  async create(transfer: Transfer): Promise<Transfer> {
    console.log(transfer);
    const data = {
      id: transfer.id,
      accounts: [transfer.props.accountFrom, transfer.props.accountTo],
    };
    const transferCreated = this.repository.create(data);
    await this.repository.save(transferCreated);
    return transfer;
  }
  findTransferById(id: string): Promise<Transfer | undefined> {
    throw new Error("Method not implemented.");
  }
  listAllTransfer(): Promise<Transfer[]> {
    throw new Error("Method not implemented.");
  }
  listAllTransferForSpecificUserById(id: string): Promise<Transfer[]> {
    throw new Error("Method not implemented.");
  }
}
