using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace PortsManagement.Controllers
{
    [ApiController]
    [Serializable]
    public class ShipController : ControllerBase
    {
        public ShipController()
        {
        }

        [Route("Ship/Get/{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            List<Ship> ships = Ship.GetShips();
            return Ok(ships.Where(x => x.ShipId == id));
        }

        [Route("Ship/Get")]
        [HttpGet]
        public IActionResult GetShips()
        {
            List<Ship> ships = Ship.GetShips();
            ships = ships.OrderBy(ship => ship.ShipId).ToList();
            return Ok(ships);
        }

        [Route("Ship/Save")]
        [HttpPost]
        public IActionResult Save(Ship ship)
        {
            Ship.Save(ship);
            return Ok("Record added successfully");
        }

        [Route("Ship/Delete/{Id}")]
        [HttpDelete]
        public IActionResult DeleteShip(int Id)
        {
            var result = Ship.Delete(Id);
            if (!result)
            {
                return NotFound();
            }
            else
            {
                return Ok();
            }
        }


    }
}