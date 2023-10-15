import { $user, updateUser } from '../stores/userStore';
import Cobra from './Cobra';
import GIJoe from './GIJoe';

export default function Select() {
	let user = $user.get();

	$user.subscribe((updatedUser) => {
		user = updatedUser;
	});

	const chooseJoe = async (e: Event) => {
		e.preventDefault();
		chooseSide('gijoe');
	};
	const chooseCobra = async (e: Event) => {
		e.preventDefault();
		chooseSide('cobra');
	};

	const chooseSide = async (allegiance: string) => {
		await fetch('/chooseSide', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ uid: user?.id, allegiance }),
		});
		updateUser({ allegiance });
	};

	return (
		<>
			<div class="allegiance">
				<button
					className={`gijoe ${
						!user?.allegiance || user?.allegiance === 'gijoe' ? 'selected' : ''
					}`}
					title="Choose GI Joe"
					onClick={chooseJoe}
				>
					<GIJoe /> GI Joe
				</button>
				<button
					className={`cobra ${user?.allegiance === 'cobra' ? 'selected' : ''}`}
					title="Choose Cobra"
					onClick={chooseCobra}
				>
					<Cobra /> Cobra
				</button>
			</div>
		</>
	);
}
