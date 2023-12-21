namespace CobraCon.Models
{
    using Postgrest.Attributes;
    using Postgrest.Models;

    [Table("roster_v1")]
    public class Agent : BaseModel
    {
        [Column("versionname")]
        public string VersionName { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("card_image_url")]
        public string CardImageUrl { get; set; }
        [Column("allegiance")]
        public string Allegiance {  get; set; }

        public string CleanAllegiance
        {
            get
            {
                return Allegiance.Replace(" ", "").ToLower();
            }
        }
    }
}
