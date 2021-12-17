class BankAccount {
    balance: number;
    interestRate: number;
    constructor(balance: number, interestRate: number) {
        this.balance = balance;
        this.interestRate = interestRate;
    }

    addIntterest = (balance:number, interestRate:number):void => {
        balance+=interestRate;
    }
}
class BankAccountWithFee extends BankAccount {
    fee: number;
    constructor(fee:number){
        super(fee, fee);
        this.fee = fee;
    }
    applyFee = (balance:number, fee:number):void => {
        balance-=fee;
    }
}