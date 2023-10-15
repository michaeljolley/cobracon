import { useStore } from '@nanostores/preact';
import { $user } from '../stores/userStore';
import Welcome from './Welcome';
import Me from './Me';

export default function App(props: { code: string | null }) {
	const user = useStore($user);

	if (user) return <Me />;

	return <Welcome code={props.code} />;
}
