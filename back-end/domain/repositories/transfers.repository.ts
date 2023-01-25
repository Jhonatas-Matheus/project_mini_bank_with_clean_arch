import { Transfer } from "../entities/Transfer";
import { TransferDTO } from "../entities/TransferDTO";

export interface TransfersRepository {
  create(transfer: Transfer): Promise<TransferDTO>;
  findTransferById(id: string): Promise<TransferDTO | undefined>;
  listAllTransfer(): Promise<TransferDTO[]>;
  listAllTransferForSpecificUserById(id: string): Promise<TransferDTO[]>;
}
