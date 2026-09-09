namespace PartnerProjectDeShawn.api.DTO;

public class DogDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int CityId { get; set; }
    public int? WalkerId { get; set; }

    public WalkerDto Walker { get; set; }
}