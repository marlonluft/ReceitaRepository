using MongoDB.Driver;
using Receita.Core.Entity;
using Receita.Core.Settings;
using System;

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
    }
}
