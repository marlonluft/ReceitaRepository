using Receita.Core.Entity;
using Receita.Core.Repository;
using System;
using System.Collections.Generic;

namespace Receita.Core.Service
{
    public class ReceitaService : IReceitaService
    {
        public readonly IReceitaRepository _repository;

        public ReceitaService(IReceitaRepository repository)
        {
            _repository = repository;
        }

        public void GravarReceita(ReceitaEntity entity)
        {
            if (entity.Id == Guid.Empty)
            {
                entity.Id = Guid.NewGuid();
                _repository.Gravar(entity);
            }
            else
            {
                _repository.Alterar(entity.Id, entity);
            }
        }

        public List<ReceitaEntity> ListarPorTags(List<string> tags)
        {
            throw new NotImplementedException();
        }
    }
}
