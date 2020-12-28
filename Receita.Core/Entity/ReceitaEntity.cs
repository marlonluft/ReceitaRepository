using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Receita.Core.Entity
{
    public class ReceitaEntity
    {
        public ReceitaEntity()
        {
            Id = Guid.Empty;
        }

        [BsonId]
        //[BsonRepresentation(BsonType.)]
        public Guid Id { get; set; }
        public string Titulo { get; set; }
        public List<IgredienteEntity> ListaIgredientes { get; set; }
        public List<PassoAPassoEntity> ListaPassoAPasso { get; set; }
        public List<Guid> ListaReceitasNecessarias { get; set; }
        public List<string> Tags { get; set; }
        //public List<ReceitaEntity> Receitas { get; set; }
    }
}
