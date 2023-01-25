import { Transfer } from "../entities/Transfer";

export interface TransfersRepository {
  create(transfer: Transfer): Promise<Transfer>;
  findTransferById(id: string): Promise<Transfer | undefined>;
  listAllTransfer(): Promise<Transfer[]>;
  listAllTransferForSpecificUserById(id: string): Promise<Transfer[]>;
}
