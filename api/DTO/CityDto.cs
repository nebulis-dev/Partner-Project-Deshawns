using PartnerProjectDeShawn.api.DTO;

public class CityDto
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<WalkerDto> Walkers { get; set; }
}