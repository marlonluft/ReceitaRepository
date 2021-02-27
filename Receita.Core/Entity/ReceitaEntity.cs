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
        public Guid Id { get; set; }
        public string Titulo { get; set; }
        public List<IgredienteEntity> ListaIgredientes { get; set; }
        public List<PassoAPassoEntity> ListaPassoAPasso { get; set; }
        public List<string> Tags { get; set; }
    }
}
