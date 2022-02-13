using System.Text.Json;

namespace PortsManagement
{
    [Serializable]
    public class Ship
    {
        public int ShipId { get; set; }
        public string? ShipName { get; set; }
        public string? Location { get; set; }
        public int Length { get; set; }
        public int Width { get; set; }
        public float Lo { get; set; }
        public float LA { get; set; }

        public Ship()
        {
        }

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

        public static void Save(Ship ship)
        {
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
        }

        public static bool Delete(int id)
        {
            string jsonString = GetCurrentData();
            if (string.IsNullOrEmpty(jsonString))
            {
                return false;
            }
           
            return true;
           
        }

    }
}