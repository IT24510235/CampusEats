
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins(
            "https://campuseats-dashboard-pi.vercel.app"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("Frontend");

app.UseAuthorization();

app.MapControllers();

app.MapGet("/api/menu", () =>
{
    return Results.Ok(new[]
    {
        new { id = 1, name = "Rice and Curry", price = 450 },
        new { id = 2, name = "Chicken Burger", price = 600 },
        new { id = 3, name = "Vegetable Kottu", price = 500 }
    });
});

app.MapGet("/", () => "CampusEats API is running!");

app.Run();
