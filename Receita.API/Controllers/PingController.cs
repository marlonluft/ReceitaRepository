using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Receita.Core.Entity;
using Receita.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Receita.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PingController : ControllerBase
    {
        private readonly ILogger<PingController> _logger;
        private readonly IReceitaService _receitaService;

        public PingController(ILogger<PingController> logger, IReceitaService receitaService)
        {
            _logger = logger;
            _receitaService = receitaService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Pong");
        }

        [HttpPost]
        public IActionResult Gravar(ReceitaEntity entity)
        {
            _receitaService.GravarReceita(entity);

            return Ok("Pong");
        }
    }
}
