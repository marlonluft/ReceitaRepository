using Receita.Core.Entity;
using Receita.Core.Filter;
using System;
using System.Collections.Generic;

namespace Receita.Core.Service
{
    public interface IReceitaService
    {
        void GravarReceita(ReceitaEntity entity);
        List<ReceitaEntity> Listar(ReceitaFilter filtro);
        ReceitaEntity Buscar(Guid id);
    }
}
