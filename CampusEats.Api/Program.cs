var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS for the Vercel frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("https://campuseats-dashboard-pi.vercel.app")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Enable Swagger and Swagger UI
app.UseSwagger();
app.UseSwaggerUI();

// Enable CORS before mapping endpoints
app.UseCors("Frontend");

app.UseAuthorization();

// Map controller endpoints
app.MapControllers();

// Menu API endpoint
app.MapGet("/api/menu", () =>
{
    return Results.Ok(new[]
    {
        new { id = 1, name = "Rice and Curry", price = 450 },
        new { id = 2, name = "Chicken Burger", price = 600 },
        new { id = 3, name = "Vegetable Kottu", price = 500 }
    });
});

// Root endpoint
app.MapGet("/", () => "CampusEats API is running!");

app.Run();