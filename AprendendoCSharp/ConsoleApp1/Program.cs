internal class Program
{
    private static void Main(string[] args)
    {
        int n = 10;
        if (n == 0)
            Console.WriteLine(1);
        int factorial = 1;
        while (n > 1)
        {
            factorial *= n;
            n--;
        }
        Console.WriteLine(factorial);
    }
}