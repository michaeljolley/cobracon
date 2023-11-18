import { useStore } from '@nanostores/preact';
import { $user } from '../stores/userStore';
import Roster from './Roster';
import Allegiance from './Allegiance';
import './Editor.css';

export default function Editor() {
	const user = useStore($user);
	return (
		<div class="editor">
			<div class="opener">
				<h1>Welcome {user?.firstName}!</h1>
				<p>
					You've made it through the first phase of your induction. Now, the
					real decision lies ahead.
				</p>

				<h2>Choose Your Allegiance & Codename</h2>
			</div>
			<Allegiance />
			<Roster />
		</div>
	);
}
