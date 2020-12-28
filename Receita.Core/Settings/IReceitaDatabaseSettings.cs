namespace Receita.Core.Settings
{
    public interface IReceitaDatabaseSettings
    {
        string ReceitaCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
