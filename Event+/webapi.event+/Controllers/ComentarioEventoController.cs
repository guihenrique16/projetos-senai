using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Interfaces;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class ComentarioEventoController : ControllerBase
    {
        private IComentariosEventoRepository _comentarioEventoRepository { get; set; }

        // armazena dados da API externa (ia - Azure)
        private readonly ContentModeratorClient _contentModeratorClient;


        /// <summary>
        /// Construtor que recebe os dados necessários´para o acesso ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient"> objeto do tipo contentModeratorClient </param>
        public ComentarioEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;

            _comentarioEventoRepository = new ComentariosEventoRepository();
        }

        [HttpPost("CadastroIA")]

        public async Task<IActionResult> PostIA(ComentariosEvento comentariosEvento)
        {
            try
            {
                //se a descrição do comentario não for passado no objeto
                if (string.IsNullOrEmpty(comentariosEvento.Descricao))
                {
                    return BadRequest("O texto a ser analisado não pode ser vazio!");
                }

                //converte a descrição do comentario em um memoryStream 
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(comentariosEvento.Descricao));

                //realiza a moderação do conteúdo (descrição)
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                //se existir termos ofensivos
                if (moderationResult.Terms != null)
                {
                    //exibe é falso
                    comentariosEvento.Exibe = false;

                    //cadastra o comentario
                    _comentarioEventoRepository.Cadastrar(comentariosEvento);
                }
                else
                {
                    //exibe é 
                    comentariosEvento.Exibe = true;

                    //cadastra o comentario
                    _comentarioEventoRepository.Cadastrar(comentariosEvento);
                }

                return StatusCode(201, comentariosEvento);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet]

        public IActionResult Get(Guid id)
        {
            try
            {
                return Ok(_comentarioEventoRepository.Listar(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("listarSomenteExibe")]

        public IActionResult GetIa(Guid id)
        {
            try
            {
                return Ok(_comentarioEventoRepository.ListarTrue(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorId/{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_comentarioEventoRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult GetByUserId(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return Ok(_comentarioEventoRepository.BuscarPorIdUsuario(idUsuario, idEvento));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento comentario)
        {
            try
            {
                _comentarioEventoRepository.Cadastrar(comentario);
                return StatusCode(201, comentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _comentarioEventoRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message) /* StatusCode(204)*/;
            }
        }
    }

}
