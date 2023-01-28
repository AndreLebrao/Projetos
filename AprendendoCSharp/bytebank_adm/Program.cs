using bytebank_adm.Funcionario;
using bytebank_adm.Utils;

internal class Program
{
    private static void Main(string[] args)
    {
        Funcionario funcionario = new Funcionario();
        funcionario.Salario = 1000;
        Console.WriteLine($"Salario funcionario: {funcionario.Salario}");
        Console.WriteLine($"Bonificação funcionario: {funcionario.GetBonificacao()}");
        Diretor diretor= new Diretor();
        diretor.Salario=1000;
        Console.WriteLine($"Salario diretor: {diretor.Salario}");
        Console.WriteLine($"Bonificação diretor: {diretor.GetBonificacao()}");
        GerenciadorBonificacao.Registrar(funcionario);
        GerenciadorBonificacao.Registrar(diretor);
        Console.WriteLine($"Total de bonificacao {GerenciadorBonificacao.TotalBonificacao}");
    }
}