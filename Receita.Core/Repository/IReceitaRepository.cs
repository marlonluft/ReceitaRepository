using Receita.Core.Entity;
using Receita.Core.Filter;
using System;
using System.Collections.Generic;

namespace Receita.Core.Repository
{
    public interface IReceitaRepository
    {
        void Gravar(ReceitaEntity entity);
        void Alterar(Guid id, ReceitaEntity entity);
        List<ReceitaEntity> Listar(ReceitaFilter filtro);
        ReceitaEntity Buscar(Guid id);
    }
}
