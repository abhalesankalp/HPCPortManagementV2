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
            if (ships.Any(x => x.ShipId == id))
                return Ok(ships.Where(x => x.ShipId == id));
            else
                return NotFound($"record not present with id {id}");
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
            if (Ship.Save(ship))
                return Ok("Record added successfully");
            else
                return BadRequest("Please provide all parameters correctly!");
        }

        [Route("Ship/Delete/{Id}")]
        [HttpDelete]
        public IActionResult DeleteShip(int Id)
        {
            var result = Ship.Delete(Id);
            if (!result)
            {
                return NotFound($"Records not present with id : {Id}");
            }
            else
            {
                return Ok();
            }
        }


    }
}