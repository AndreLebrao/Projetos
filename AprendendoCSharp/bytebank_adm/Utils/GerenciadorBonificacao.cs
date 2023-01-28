using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_adm.Utils
{
    internal class GerenciadorBonificacao
    {
        public static double TotalBonificacao { get; private set; }

        public static void Registrar(Funcionario.Funcionario funcionario)
        {
            TotalBonificacao += funcionario.GetBonificacao();
        }
    }
}
