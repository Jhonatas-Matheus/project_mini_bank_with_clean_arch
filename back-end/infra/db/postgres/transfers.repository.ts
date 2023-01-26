import { Repository } from "typeorm";
import { Transfer } from "../../../domain/entities/Transfer";
import { TransferDTO } from "../../../domain/entities/TransferDTO";
import { TransfersRepository } from "../../../domain/repositories/transfers.repository";
import { TransferTypeORM } from "./entities/Transfer";

export class PostgresTransfersRepository implements TransfersRepository {
  constructor(private repository: Repository<TransferTypeORM>) {}
  async create(transfer: Transfer): Promise<TransferDTO> {
    const data: TransferTypeORM = {
      id: transfer.id,
      // accounts: [transfer.props.accountFrom],
      accounts: [transfer.props.accountFrom, transfer.props.accountTo],
      value: transfer.props.value,
    };
    const transferCreated = this.repository.create(data);
    await this.repository.save(transferCreated);
    return transferCreated;
  }
  findTransferById(id: string): Promise<TransferDTO | undefined> {
    throw new Error("Method not implemented.");
  }
  listAllTransfer(): Promise<TransferDTO[]> {
    throw new Error("Method not implemented.");
  }
  async listAllTransferForSpecificUserById(id: string): Promise<TransferDTO[]> {
    const transfersOfUser = await this.repository.find({
      where: {
        accounts: { id: id },
      },
      select: { accounts: { id: true, ownerName: true } },
      relationLoadStrategy: "query",
      relations: { accounts: true },
      loadEagerRelations: true,
    });
    return transfersOfUser;
  }
}
