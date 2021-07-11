using Receita.Core.Entity;
using Receita.Core.Filter;
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

        public ReceitaEntity Buscar(Guid id)
        {
            return _repository.Buscar(id);
        }

        public void AdicionarReceita(ReceitaEntity entity)
        {
            entity.Id = Guid.NewGuid();
            _repository.Gravar(entity);
        }

        public List<ReceitaEntity> Listar(ReceitaFilter filtro)
        {
            return _repository.Listar(filtro);
        }

        public void AlterarReceita(Guid id, ReceitaEntity entity)
        {
            if (entity.Id != id)
            {
                // Lançar exeção
            }

            _repository.Alterar(id, entity);
        }
    }
}
