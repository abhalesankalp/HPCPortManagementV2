using System.Text.Json;
using System.Text.RegularExpressions;

namespace PortsManagement
{
    [Serializable]
    public class Ship
    {
        public int ShipId { get; set; }
        public string? ShipName { get; set; }
        public string? Code { get; set; }
        public int Length { get; set; }
        public int Width { get; set; }
        public float Lo { get; set; }
        public float LA { get; set; }


        public static List<Ship> GetShips()
        {
            string jsonString = GetCurrentData();
            return JsonSerializer.Deserialize<List<Ship>>(jsonString) ?? new List<Ship>();
        }

        private static string GetCurrentData()
        {
            StreamReader r = new StreamReader(@"Data/Result.json");
            string jsonString = r.ReadToEnd();
            r.Close();

            return jsonString;
        }

        public static bool Save(Ship ship)
        {
            Regex rx = new Regex("^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]-\\d\\d\\d\\d-[a-zA-Z]\\d$", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            if (string.IsNullOrEmpty(ship.ShipName) || ship.LA == 0 || ship.Lo == 0 || string.IsNullOrEmpty(ship.Code) || ship.Width==0 || ship.Length==0 || !rx.IsMatch(ship.Code))
            {
                return false;
            }

            string jsonString = GetCurrentData();
            if (string.IsNullOrEmpty(jsonString))
            {
                System.IO.File.WriteAllText(@"Data/Result.json", "[" + JsonSerializer.Serialize(ship) + "]");
            }
            else
            {
                List<Ship> ships = JsonSerializer.Deserialize<List<Ship>>(jsonString) ?? new List<Ship>();
                if (ship.ShipId > 0)
                {
                    ships = ships.Where(x => x.ShipId != ship.ShipId).ToList();
                }

                int maxID = ships.Any() ? ships.Select(x => x.ShipId).Max() : 0;
                ship.ShipId = ship.ShipId > 0 ? ship.ShipId : maxID + 1;
                ships.Add(ship);
                System.IO.File.WriteAllText(@"Data/Result.json", JsonSerializer.Serialize(ships));
            }

            return true;
        }

        public static bool Delete(int id)
        {
            string jsonString = GetCurrentData();
            if (string.IsNullOrEmpty(jsonString))
            {
                return false;
            }
            else
            {
                List<Ship> ships = JsonSerializer.Deserialize<List<Ship>>(jsonString) ?? new List<Ship>();
                if (ships.Any(x => x.ShipId == id))
                {
                    ships = ships.Where(x => x.ShipId != id).ToList();
                    System.IO.File.WriteAllText(@"Data/Result.json", JsonSerializer.Serialize(ships));
                    return true;
                }
                else
                {
                    return false;
                }
            }
           
        }

    }
}