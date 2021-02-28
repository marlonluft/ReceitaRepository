using MongoDB.Driver;
using Receita.Core.Entity;
using Receita.Core.Filter;
using Receita.Core.Settings;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Receita.Core.Repository
{
    public class ReceitaRepository : IReceitaRepository
    {
        private readonly IMongoCollection<ReceitaEntity> _receitas;

        public ReceitaRepository(IReceitaDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _receitas = database.GetCollection<ReceitaEntity>(settings.ReceitaCollectionName);
        }

        public void Gravar(ReceitaEntity entity)
        {
            _receitas.InsertOne(entity);
        }

        public void Alterar(Guid id, ReceitaEntity entity) =>
            _receitas.ReplaceOne(receita => receita.Id == id, entity);

        public List<ReceitaEntity> Listar(ReceitaFilter filtro)
        {
            var parametros = new List<FilterDefinition<ReceitaEntity>>
            {
                Builders<ReceitaEntity>.Filter.Where(_ => true)
            };

            if (filtro.Tags != null && filtro.Tags.Any())
            {
                filtro.Tags.ForEach((tag) =>
                {
                    parametros.Add(Builders<ReceitaEntity>.Filter.AnyEq(x => x.Tags, tag));
                });
            }

            return _receitas.Find(Builders<ReceitaEntity>.Filter.And(parametros)).ToList();
        }

        public ReceitaEntity Buscar(Guid id)
        {
            var filtro = Builders<ReceitaEntity>.Filter.Eq(x => x.Id, id);
            return _receitas.Find(filtro).FirstOrDefault();
        }
    }
}
