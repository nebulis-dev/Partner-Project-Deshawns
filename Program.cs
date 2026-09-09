using PartnerProjectDeShawn.api;
using PartnerProjectDeShawn.api.DTO;


List<Dog> dogs = new List<Dog>
{
    new Dog {Id=1,Name="Bob", CityId=1},
    new Dog {Id=2,Name="Wade", CityId=2},
    new Dog {Id=3,Name="Mark", CityId=3}
};

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs.Select(d=> new DogDto
    {
        Id=d.Id,
        Name=d.Name,
        CityId=d.CityId
    });
});

app.Run();
