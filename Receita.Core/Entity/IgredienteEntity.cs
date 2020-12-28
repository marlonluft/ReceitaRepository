using Receita.Core.Enumerador;

namespace Receita.Core.Entity
{
    public class IgredienteEntity
    {
        public string Descricao { get; set; }
        public decimal? Quantidade { get; set; }
        public EUnidadeMedida UnidadeMedida { get; set; }
        public string Observacao { get; set; }
    }
}
