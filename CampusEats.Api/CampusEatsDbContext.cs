
using Microsoft.EntityFrameworkCore;

namespace CampusEats.Api;

public class CampusEatsDbContext : DbContext
{
    public CampusEatsDbContext(
        DbContextOptions<CampusEatsDbContext> options)
        : base(options)
    {
    }

    // Add DbSet properties here when you define your database entities.
}
