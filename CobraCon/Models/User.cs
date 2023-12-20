namespace CobraCon.Models
{
    using System.Text;

    public class User
    {
        public User(Clerk.Net.Client.Models.User clerkUser)
        {
            Id = clerkUser.Id;
            Name = $"{clerkUser.FirstName} {clerkUser.LastName}";
            ProfileImageUrl = clerkUser.ImageUrl;

            var metadata = clerkUser.PublicMetadata.AdditionalData;
            if (metadata.TryGetValue("agent", out var _agent))
            {
                Agent = (string)_agent;
            }
            else
            {
                Agent = "airborne";
            }
            if (metadata.TryGetValue("allegiance", out var _allegiance))
            {
                Allegiance = (string)_allegiance;
            }
            else
            {
                Allegiance = "gijoe";
            }
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Allegiance { get; set; }
        public string Agent { get; set; }
        public string ProfileImageUrl { get; set; }

        public string Code 
        { 
            get {
                return Encode(Id);
            }
        }

        public string Url 
        { 
            get
            {
                return $"https://res.cloudinary.com/dk3rdh3yo/image/upload/l_fetch:{Encode(ProfileImageUrl)},w_175,h_450,c_fill/fl_layer_apply,g_north_west,x_35,y_113/w_1280/v1697076582/cobradex/{Agent}/v1/card.png";
            }
        }

        public string AllegianceDisplay {
            get
            {
                switch (Allegiance)
                {
                    case "cobra":
                        return "Cobra";
                    default:
                        return "GI Joe";
                }
            }
        }

        private string Encode(string toEncode)
        {
            byte[] bytes = Encoding.ASCII.GetBytes(toEncode);
            return Convert.ToBase64String(bytes);
        }
    }
}
