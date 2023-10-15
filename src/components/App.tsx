import { useStore } from '@nanostores/preact';
import { $user } from '../stores/userStore';
import Welcome from './Welcome';
import Me from './Me';

export default function App() {
	const user = useStore($user);

	const search = window.location.search;
	const params = new URLSearchParams(search);
	let code = null;

	if (params.size > 0 && params.get('code')) {
		code = params.get('code');
	}

	if (user) return <Me />;

	return <Welcome code={code} />;
}
