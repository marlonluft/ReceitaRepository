namespace Receita.Core.Settings
{
    public class ReceitaDatabaseSettings : IReceitaDatabaseSettings
    {
        public string ReceitaCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
