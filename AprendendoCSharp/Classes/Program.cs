using Classes.Conta;

internal class Program
{
    private static void Main(string[] args)
    {
        ContaCorrente conta = new ContaCorrente(13,"1012-0");
        Console.WriteLine($"Titular da conta: {conta.Titular.Nome}");
        Console.WriteLine($"Número da conta: {conta.Conta}");
        Console.WriteLine($"Agência: {conta.Agencia}");
        Console.WriteLine($"Saldo R$ {String.Format("{0:0.00}", conta.Saldo)}");

        conta.Depositar(500);
        if (conta.Sacar(300) == true)
            Console.WriteLine("Saldo da conta pós-saque = " + conta.Saldo);
        else
            Console.WriteLine("Saldo insuficiente para saque.");
        Console.WriteLine($"Quantidade de contas criadas: {ContaCorrente.ContasCriadas}");
        ContaCorrente conta1 = new ContaCorrente(-12, "1012-1");
        Console.WriteLine($"Agência: {conta.Agencia}");
        Console.WriteLine($"Quantidade de contas criadas: {ContaCorrente.ContasCriadas}");

        Console.ReadKey();
    }
}