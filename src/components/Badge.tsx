import { $user } from '../stores/userStore';
import Roster from './Roster';
import Select from './Select';

export default function Badge() {
	let user = $user.get();

	$user.subscribe((updatedUser) => {
		user = updatedUser;
	});

	return (
		<>
			<h1>Welcome {user?.firstName}!</h1>
			<p>
				You've made it through the first phase of your induction. Now, the real
				decision lies ahead.
			</p>

			<h2>Choose Your Allegiance</h2>

			<Select />
			<Roster />
		</>
	);
}
