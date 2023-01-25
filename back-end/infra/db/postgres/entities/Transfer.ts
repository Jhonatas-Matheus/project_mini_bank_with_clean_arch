import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { AccountDTO } from "../../../../domain/entities/AccountDTO";
import { TransferDTO } from "../../../../domain/entities/TransferDTO";
import { AccountTypeORM } from "./Account";

@Entity("transfers")
export class TransferTypeORM implements TransferDTO {
  @PrimaryColumn()
  id: string;
  @Column()
  value: number;
  @ManyToMany(() => AccountTypeORM)
  @JoinTable()
  accounts: AccountTypeORM[];
}
