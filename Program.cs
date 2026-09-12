using PartnerProjectDeShawn.api;
using PartnerProjectDeShawn.api.DTO;


List<Dog> dogs = new List<Dog>
{
    new Dog {Id=1,Name="Bob", CityId=1},
    new Dog {Id=2,Name="Wade", CityId=2, WalkerId = 2},
    new Dog {Id=3,Name="Mark", CityId=3, WalkerId = 1}
};

List<Walker> walkers = new List<Walker>
{
    new Walker {Id = 1, Name = "Ethan"},
    new Walker {Id = 2, Name = "Tyler"}
};


List<City> cities = new List<City>
{
    new City {Id=1, Name="Nashville"},
    new City {Id =2, Name="Chicago"},
    new City {Id =3, Name="Los Angeles"}
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
    return dogs.Select(d => new DogDto
    {
        Id = d.Id,
        Name = d.Name,
        CityId = d.CityId
    });
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(new DogDto
    {
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
        WalkerId = dog.WalkerId,
        Walker = dog.WalkerId == null? null : walkers.Where(w => w.Id == dog.WalkerId)
            .Select(w => new WalkerDto
            {
                Id = w.Id,
                Name = w.Name
            }).First()
    });
});

app.MapPost("/api/dog/", (Dog dog) =>
{
    dog.Id = dogs.Max(d => d.Id) + 1;
    dogs.Add(dog);

    return Results.Created($"/api/dogs/{dog.Id}", new DogDto
    {
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
    });
});


app.MapGet("/api/cities/", () =>
{
    return cities.Select(c=> new CityDto
    {
        Id=c.Id,
        Name=c.Name
    });
});

app.Run();
