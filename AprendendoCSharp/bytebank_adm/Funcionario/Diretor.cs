using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_adm.Funcionario
{
    internal class Diretor : Funcionario
    {
        public override double GetBonificacao()
        {
            return this.Salario + base.GetBonificacao();
        }
    }
}
