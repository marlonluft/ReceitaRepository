using Receita.Core.Entity;
using System.Collections.Generic;

namespace Receita.API.ViewModel
{
    public class ReceitaViewModel
    {
        public string Titulo { get; set; }
        public List<IgredienteEntity> ListaIgredientes { get; set; }
        public List<PassoAPassoEntity> ListaPassoAPasso { get; set; }
        public List<string> Tags { get; set; }

        public ReceitaEntity ToEntity()
        {
            return new ReceitaEntity
            {
                ListaIgredientes = this.ListaIgredientes,
                ListaPassoAPasso = this.ListaPassoAPasso,
                Tags = this.Tags,
                Titulo = this.Titulo
            };
        }
    }
}
