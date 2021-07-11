using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Receita.API.ViewModel;
using Receita.Core.Filter;
using Receita.Core.Service;
using System;

namespace Receita.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReceitaController : Controller
    {
        private readonly ILogger<ReceitaController> _logger;
        private readonly IReceitaService _receitaService;

        public ReceitaController(ILogger<ReceitaController> logger, IReceitaService receitaService)
        {
            _logger = logger;
            _receitaService = receitaService;
        }

        [HttpGet]
        public IActionResult Listar()
        {
            var lista = _receitaService.Listar(new ReceitaFilter());

            return Ok(lista);
        }

        [HttpGet("{id}")]
        public IActionResult Obter(string id)
        {
            if (Guid.TryParse(id, out Guid idGuid))
            {
                var receita = _receitaService.Buscar(idGuid);

                if (receita == null)
                {
                    return BadRequest("Receita não encontrada");
                }

                return Ok(receita);
            }

            return BadRequest("Identificação de receita inválido");
        }

        [HttpPost]
        public IActionResult Adicionar([FromBody] ReceitaViewModel viewModel)
        {
            _receitaService.AdicionarReceita(viewModel.ToEntity());

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Alterar([FromQuery] Guid id, [FromBody] ReceitaViewModel viewModel)
        {
            _receitaService.AlterarReceita(id, viewModel.ToEntity());

            return Ok();
        }
    }
}
