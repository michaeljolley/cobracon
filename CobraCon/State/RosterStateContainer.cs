namespace CobraCon.State
{
    using Models;

    public class RosterStateContainer
    {
        private Supabase.Client supabaseClient { get; set; }

        public RosterStateContainer(Supabase.Client client) 
        { 
            supabaseClient = client;
        }

        public List<Agent> Roster { get; set; } = new List<Agent>();

        public List<Agent> CobraRoster { 
            get
            {
                return Roster.Where(w => w.Allegiance == "Cobra").ToList();
            } 
        }

        public List<Agent> GIJoeRoster
        {
            get
            {
                return Roster.Where(w => w.Allegiance == "GI Joe").ToList();
            }
        }

        public event Action? OnStateChange;
             
        private void NotifyStateChanged() => OnStateChange?.Invoke();

        public void SetValue(List<Agent> roster)
        {
            Roster = roster;
            NotifyStateChanged();
        }

        public async Task LoadRosterAsync()
        {
            var results = await supabaseClient.From<Agent>().Get();
            SetValue(results.Models);
        }
    }
}
