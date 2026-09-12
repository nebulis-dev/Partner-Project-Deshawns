namespace PartnerProjectDeShawn.api.DTO;

public class WalkerDto
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<DogDto> Dogs { get; set; }
    public List<CityDto> Cities { get; set; }
}