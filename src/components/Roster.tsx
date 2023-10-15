import { useStore } from '@nanostores/preact';
import { $cobras, $gijoes } from '../stores/rosterStore';
import { $allegiance } from '../stores/allegianceStore';
import AgentSelect from './AgentSelect';
import './Roster.css';

export default function Roster() {
	const allegiance = useStore($allegiance);
	const gijoes = useStore($gijoes);
	const cobras = useStore($cobras);

	return (
		<>
			<section class="roster">
				<h3>Choose an Alias</h3>
				<ul
					className={`gijoe ${
						!allegiance || allegiance === 'gijoe' ? 'selected' : ''
					}`}
				>
					{gijoes.map((agent) => (
						<AgentSelect agent={agent} />
					))}
				</ul>
				<ul className={`cobra ${allegiance === 'cobra' ? 'selected' : ''}`}>
					{cobras.map((agent) => (
						<AgentSelect agent={agent} />
					))}
				</ul>
			</section>
		</>
	);
}
