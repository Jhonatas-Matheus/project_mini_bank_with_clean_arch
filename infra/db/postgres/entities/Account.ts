import {
  Column,
  Entity,
  EntitySchema,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Account } from "../../../../domain/entities/Account";
import { TransferTypeORM } from "./Transfer";
@Entity("accounts")
export class AccountTypeORM {
  @PrimaryColumn()
  id!: string;
  @Column()
  ownerName!: string;
  @Column()
  balance!: number;
  @ManyToMany(() => TransferTypeORM)
  transfers!: TransferTypeORM[];
}
