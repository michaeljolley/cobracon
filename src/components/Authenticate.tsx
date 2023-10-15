import { useRef } from 'preact/hooks';
import { $user, type User } from '../stores/userStore';
import { $clerk } from '../stores/clerkStore';

export default function Authenticate() {
	const signIn = useRef<HTMLDivElement>(null);

	let user = $user.get();

	$user.subscribe((updatedUser) => {
		user = updatedUser;
	});

	const mountSignIn = () => {
		if (!$user.get()) {
			const clerk = $clerk.get();
			clerk.openSignIn(signIn.current!);
		}
	};

	return (
		!user && (
			<>
				<div id="sign-in" ref={signIn}></div>
				<button onClick={mountSignIn}>Authenticate</button>
			</>
		)
	);
}
