import {CurrentAccount, SavingsAccount} from './scripts/bank.js'
import {Rectangle} from './scripts/rectangle.js'

// Atividade 01
let rectangle01 = new Rectangle(7, 5)
let rectangle02 = new Rectangle(6, 1)
let rectangle03 = new Rectangle(4, 5)
let rectangle04 = new Rectangle(9, 4)
let rectangle05 = new Rectangle(4, 3)

alert(`
    Um retangulo com :
    largura de: ${rectangle01.returnWidth()}cm altura de: ${rectangle01.returnHeight()}cm terá uma área de: ${rectangle01.areaCalculation()}cm²

    largura de: ${rectangle02.returnWidth()}cm altura de: ${rectangle02.returnHeight()}cm terá uma área de: ${rectangle02.areaCalculation()}cm²

    largura de: ${rectangle03.returnWidth()}cm altura de: ${rectangle03.returnHeight()}cm terá uma área de: ${rectangle03.areaCalculation()}cm²

    largura de: ${rectangle04.returnWidth()}cm altura de: ${rectangle04.returnHeight()}cm terá uma área de: ${rectangle04.areaCalculation()}cm²

    largura de: ${rectangle05.returnWidth()}cm altura de: ${rectangle05.returnHeight()}cm terá uma área de: ${rectangle05.areaCalculation()}cm²

    
`);


// Atividade 02
let nCurrentAccount = new CurrentAccount();
let nSavingsAccount = new SavingsAccount();

// Insert dates
nCurrentAccount.setAccountHolderName('João Alberto');
nCurrentAccount.setBank('Banco do Brasil');
nCurrentAccount.setAccountNumber("001100");
nCurrentAccount.setBalance(2000);
nCurrentAccount.setSpecialBalance(300);

alert(`
    Nome correntista: ${nCurrentAccount.getAccountHolderName()} \n
    Banco: ${nCurrentAccount.getBank()} \n
    Número da conta: ${nCurrentAccount.getAccountNumber()} \n
    Saldo: ${nCurrentAccount.getBalance()} \n
    Saldo especial: ${nCurrentAccount.getSpecialBalance()} \n                  
`);

// remove 200 from Balance
nCurrentAccount.setBalance(2000 - 200);

alert(`
    [ Após remover 200 do saldo ]

    Nome correntista: ${nCurrentAccount.getAccountHolderName()} \n
    Banco: ${nCurrentAccount.getBank()} \n
    Número da conta: ${nCurrentAccount.getAccountNumber()} \n
    Saldo: ${nCurrentAccount.getBalance()} \n
    Saldo especial: ${nCurrentAccount.getSpecialBalance()} \n                  
`);