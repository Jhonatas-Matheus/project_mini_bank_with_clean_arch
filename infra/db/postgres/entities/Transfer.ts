import { Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { AccountTypeORM } from "./Account";

@Entity("transfers")
export class TransferTypeORM {
  @PrimaryColumn()
  id!: string;
  @ManyToMany(() => AccountTypeORM)
  @JoinTable()
  accounts!: AccountTypeORM[];
}
