import { $user } from '../stores/userStore';
import Welcome from './Welcome';
import Badge from './Badge';

export default function App() {
	let user;

	$user.subscribe((newUser) => {
		user = newUser;
	});

	if (user) return <Badge />;

	return <Welcome />;
}
