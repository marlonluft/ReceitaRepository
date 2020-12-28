using Receita.Core.Entity;
using System;
using System.Collections.Generic;

namespace Receita.Core.Service
{
    public interface IReceitaService
    {
        void GravarReceita(ReceitaEntity entity);
        List<ReceitaEntity> ListarPorTags(List<string> tags);
    }
}
