using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank.Conta
{
    public class ContaCorrente
    {
        public ContaCorrente(int Agencia, string Conta)
        {
            this.Agencia = Agencia;
            this.Conta = Conta;
            this.Titular = new Titular.Cliente();
            ContasCriadas++;
        }
        public static int ContasCriadas { get; private set; }
        private int agencia;
        //property example:
        public int Agencia
        {
            get { return this.agencia; }
            private set
            {
                if (value > 0)
                    this.agencia = value;
            }
        }
        public string Conta { get; set; }
        public Titular.Cliente Titular { get; set; }
        private double saldo;
        public double Saldo
        {
            get
            {
                return this.saldo;
            }
            set
            {
                if (value < 0)
                {
                    return;
                }
                else
                {
                    this.saldo = value;
                }
            }
        }

        public void Depositar(double valor)
        {
            saldo += valor;
            Console.WriteLine("Saldo da conta pós-depósito = " + saldo);
        }
        public bool Sacar(double valor)
        {
            if (saldo < valor)
                return false;
            saldo -= valor;
            return true;
        }
    }
}
