import crypto from "crypto";
export type AccountProps = {
  balance?: number;
  ownerName: string;
};

export class Account {
  public id: string;
  public props: Required<AccountProps>;
  constructor(props: AccountProps, id?: string) {
    const nameValidator = new RegExp(/[a-z]+/i);
    if (!props.ownerName) {
      throw new Error("Impossible create account without ownerName.");
    }
    if (!nameValidator.test(props.ownerName)) {
      throw new Error("Impossible create account, name invalid.");
    }
    if (props.balance && props.balance < 0)
      throw new Error("Impossible create account initial balance invalid.");
    this.id = id || crypto.randomUUID();
    this.props = { ...props, balance: props.balance || 0 };
  }
  changeOwnerName(value: string) {
    this.ownerName = value;
  }
  debit(value: number) {
    if (value > this.balance) {
      throw new Error(
        "It is not possible to make a debit with an amount greater than your balance"
      );
    }
    this.balance -= value;
  }
  deposit(value: number) {
    this.balance += value;
  }
  private set ownerName(value: string) {
    this.props.ownerName = value;
  }
  get balance() {
    return this.props.balance;
  }
  private set balance(value: number) {
    this.props.balance = value;
  }
  get ownerName() {
    return this.props.ownerName;
  }
  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
