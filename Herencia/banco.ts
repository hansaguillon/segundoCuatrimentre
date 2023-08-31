//Crea una clase llamada BankAccount que represente una cuenta bancaria. Esta clase debe tener atributos privados para el titular 
//de la cuenta (owner), el saldo actual (balance) y el tipo de cuenta (accountType). Implementa métodos públicos para depositar dinero 
//(deposit), retirar dinero (withdraw) y obtener el saldo actual (getBalance). Además, utiliza la abstracción para ocultar los detalles
// internos del funcionamiento de la cuenta.




/*Modificar este ejemplo para que el tipo de cuenta se integre en la clase BankAccount por el mecanismo de composición. Además, accountType solo podrá ser de tipo:
cuenta sueldo
cuenta dólares
cuenta corrienta
caja ahorro
*/
class banco
{

    private titular : string;
    private balance : number;
    private accountType : string;


    public constructor(titular: string,balance: number,accountType: string)
    {
        this.titular = titular;
        this.balance = balance;
        this.accountType = accountType;
    }

    public  depositar(monto:number):void
    {
        if(monto > 0)
        {
            this.balance += monto;
        }
        else
        {
            console.log("debe ingresar efectivo");
        }
    }
    public retirar(monto:number)
    {
        if(this.balance >= monto)
        {
            console.log("usted retiro "+monto+" en efectivo");
            this.balance -= monto;
        }
        else
        {
            console.log("fondos insuficientes");
        }
    }
    public saldo():number{
        return this.balance;
    }

}