import { useRef } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { $user } from '../stores/userStore';
import { $clerk } from '../stores/clerkStore';

export default function Authenticate() {
	const signIn = useRef<HTMLDivElement>(null);
	const user = useStore($user);

	const mountSignIn = () => {
		const clerk = $clerk.get();
		clerk.openSignIn(signIn.current!);
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
