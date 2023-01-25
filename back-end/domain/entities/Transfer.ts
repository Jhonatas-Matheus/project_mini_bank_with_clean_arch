import { Account } from "./Account";
import crypto from "crypto";

export interface TransferProps {
  accountFrom: Account;
  accountTo: Account;
  value: number;
}

export class Transfer {
  public id: string;
  constructor(public props: TransferProps, id?: string) {
    this.id = id || crypto.randomUUID();
  }

  makeTransfer() {
    this.props.accountFrom.debit(this.props.value);
    this.props.accountTo.deposit(this.props.value);
  }
}
