namespace CobraCon.State
{
    using Models;

    public class CobraStateContainer
    {
        public User currentUser { get; set; }

        public event Action OnStateChange;
        public void SetValue(User user)
        {
            currentUser = user;
            NotifyStateChanged();
        }
        private void NotifyStateChanged() => OnStateChange?.Invoke();
    }
}
