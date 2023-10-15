import { useStore } from '@nanostores/preact';
import Cobra from './Cobra';
import GIJoe from './GIJoe';
import './Allegiance.css';
import { $allegiance, updateAllegiance } from '../stores/allegianceStore';

export default function Allegiance() {
	const allegiance = useStore($allegiance);

	const chooseJoe = async (e: Event) => {
		e.preventDefault();
		updateAllegiance('gijoe');
	};
	const chooseCobra = async (e: Event) => {
		e.preventDefault();
		updateAllegiance('cobra');
	};

	return (
		<>
			<div class="allegiance">
				<button
					className={`gijoe ${
						!allegiance || allegiance === 'gijoe' ? 'selected' : ''
					}`}
					title="Choose GI Joe"
					onClick={chooseJoe}
				>
					<GIJoe /> GI Joe
				</button>
				<button
					className={`cobra ${allegiance === 'cobra' ? 'selected' : ''}`}
					title="Choose Cobra"
					onClick={chooseCobra}
				>
					<Cobra /> Cobra
				</button>
			</div>
		</>
	);
}
