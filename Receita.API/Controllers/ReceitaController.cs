using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Receita.Core.Entity;
using Receita.Core.Filter;
using Receita.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        [HttpPost]
        public IActionResult Gravar(ReceitaEntity entity)
        {
            _receitaService.GravarReceita(entity);

            return Ok();
        }
    }
}
