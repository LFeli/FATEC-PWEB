export function Account (){
    let 
    accountHolderName,
    bank, 
    accountNumber,
    balance;


    // Sets
    this.setAccountHolderName = function(value){
        accountHolderName = value;
    };

    this.setBank = function(value){
        bank = value;
    };

    this.setAccountNumber = function(value){
        accountNumber = value;
    };

    this.setBalance = function(value){
        balance = value;
    };


    // Gets
    this.getAccountHolderName = function(){
        return accountHolderName;
    }

    this.getBank = function(){
        return bank;
    };

    this.getAccountNumber = function(){
        return accountNumber;
    };

    this.getBalance = function(){
        return balance;
    };
}

export function CurrentAccount(){
    let specialBalance;

    // Set
    this.setSpecialBalance = function(value){
        specialBalance = value;
    };

    // Get
    this.getSpecialBalance = function(){
        return specialBalance;
    }
}

export function SavingsAccount(){
    let juros,
    expirationDate
    ;

    // Set
    this.setJuros = function(value){
        juros = value;
    };

    this.setExpirationDate = function(value){
        expirationDate = value;
    }

    // Get
    this.getJuros = function(){
        return juros;
    }

    this.getExpirationDate = function(){
        return expirationDate;
    }
}

// Heritage
CurrentAccount.prototype = new Account();
SavingsAccount.prototype = new Account();