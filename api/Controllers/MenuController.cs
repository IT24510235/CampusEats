using CampusEats.Api.Dtos;
using CampusEats.Api.Services;
using Microsoft.AspNetCore.Mvc;
namespace CampusEats.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MenuController : ControllerBase
{
    private readonly IMenuService _svc;
    public MenuController(IMenuService svc) => _svc = svc;

    [HttpGet]
    public ActionResult<IEnumerable<MenuItemDto>> GetAll() => Ok(_svc.GetAll());

    [HttpGet("{id}")]
    public ActionResult<MenuItemDto> GetById(int id)
    {
        var item = _svc.GetById(id);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public ActionResult<MenuItemDto> Create([FromBody] CreateMenuItemDto dto)
    {
        var created = _svc.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] CreateMenuItemDto dto)
        => _svc.Update(id, dto) ? NoContent() : NotFound();

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
        => _svc.Delete(id) ? NoContent() : NotFound();
}