const clerkTag = document.getElementById("clerkTag");

clerkTag.addEventListener('load', async () => {
  await window.Clerk.load();
  window.Clerk.addListener(clerkListener);
});

window.mountSignIn = () => {
  const signInComponent = document.querySelector('#sign-in');
  if (signInComponent) {
    const clerk = window.Clerk;
    clerk.openSignIn(signInComponent);
  }
};

window.homeRef = null;
window.user = null;

const updateUser = async () => {
  if (window.user && window.homeRef) {
    await window.homeRef.invokeMethodAsync('UpdateUser', userMapper(window.user));
  }
};

window.setHomeRef = async (homeRef, allegiance) => {
  window.homeRef = homeRef;
  document.querySelector('html').setAttribute('data-theme', allegiance || '');
  await updateUser();
}

window.copyToClipboard = (url) => {
  navigator.clipboard.writeText(url);
}

const clerkListener = async (event) => {
  if (event.user) {
    const { user } = event;
    if (!window.user ||
      window.user.id != user.id ||
      window.allegiance != user.allegiance ||
      window.agent != user.agent) {
        window.user = event.user;
        await updateUser();
      }
  }
};

const userMapper = (clerkUser) => {
  return {
    name: clerkUser.fullName,
    allegiance: clerkUser.publicMetadata.allegiance,
    agent: clerkUser.publicMetadata.agent,
    id: clerkUser.id,
    profileImageUrl: clerkUser.imageUrl,
  };
};