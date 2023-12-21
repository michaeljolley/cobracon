using Clerk.Net.DependencyInjection;

using CobraCon.Components;
using CobraCon.State;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

builder.Services.AddClerkApiClient(config =>
{
    config.SecretKey = builder.Configuration["Clerk:SecretKey"];
});

builder.Services.AddScoped<CobraStateContainer>();

var supabaseClient = new Supabase.Client(
                                builder.Configuration["Supabase:Url"],
                                builder.Configuration["Supabase:Key"]);

RosterStateContainer rosterStateContainer = new RosterStateContainer(supabaseClient);
await rosterStateContainer.LoadRosterAsync();
builder.Services.AddSingleton(rosterStateContainer);

var app = builder.Build();

app.UseHsts();
app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
