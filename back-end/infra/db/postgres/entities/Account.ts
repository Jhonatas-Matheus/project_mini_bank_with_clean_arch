import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import {
  AccountDTO,
  AccountProps,
} from "../../../../domain/entities/AccountDTO";
import { TransferTypeORM } from "./Transfer";

@Entity("account")
export class AccountTypeORM implements AccountDTO {
  @PrimaryColumn()
  id: string;
  @Column()
  ownerName: string;
  @Column()
  balance: number;
}
