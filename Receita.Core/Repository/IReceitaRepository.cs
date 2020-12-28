using Receita.Core.Entity;
using System;

namespace Receita.Core.Repository
{
    public interface IReceitaRepository
    {
        void Gravar(ReceitaEntity entity);
        void Alterar(Guid id, ReceitaEntity entity);
    }
}
