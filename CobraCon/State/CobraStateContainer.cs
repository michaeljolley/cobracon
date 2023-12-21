namespace CobraCon.State
{
    using Clerk.Net.Client;
    using Models;

    public class CobraStateContainer
    {
        public User? currentUser { get; set; }

        public string currentAllegiance { get; set; }

        public event Action? OnStateChange;

        public void SetUserValue(User user)
        {
            if (string.IsNullOrEmpty(user.Allegiance) ||
                string.IsNullOrEmpty(user.Agent))
            {
                user.Agent = "airborne";
                user.Allegiance = "gijoe";
            }

            currentUser = user;
            currentAllegiance = user.Allegiance;
            NotifyStateChanged();
        }

        public void SetAllegianceValue(string allegiance)
        {
            currentAllegiance = allegiance;
            NotifyStateChanged();
        }
             
        private void NotifyStateChanged() => OnStateChange?.Invoke();

        public async Task UpdateMetaData(ClerkApiClient clerkClient, Agent agent)
        {
            if (currentUser != null)
            {
                await clerkClient.Users[currentUser.Id].Metadata.PatchAsync(new Clerk.Net.Client.Users.Item.Metadata.MetadataPatchRequestBody()
                {
                    PublicMetadata = new Clerk.Net.Client.Users.Item.Metadata.MetadataPatchRequestBody_public_metadata()
                    {
                        AdditionalData = new Dictionary<string, object>() {
                            { "allegiance", agent.CleanAllegiance },
                            { "agent", agent.Name }
                        }
                    }
                });

                var newUser = currentUser;
                newUser.Allegiance = agent.CleanAllegiance;
                newUser.Agent = agent.Name;
                SetUserValue(newUser);
            }
        }
    }
}
