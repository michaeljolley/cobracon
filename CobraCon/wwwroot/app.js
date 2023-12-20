

const clerkTag = document.getElementById("clerkTag");

clerkTag.addEventListener('load', async () => {
 
  await window.Clerk.load();
});

window.mountSignIn = () => {
  const signInComponent = document.querySelector('#sign-in');
  if (signInComponent) {
    const clerk = window.Clerk;
    clerk.openSignIn(signInComponent);
  }
};