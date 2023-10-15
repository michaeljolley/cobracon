import { useStore } from '@nanostores/preact';
import type { Agent } from '../stores/rosterStore';
import { $user, updateUser } from '../stores/userStore';
import './AgentSelect.css';

export default function AgentSelect(props: { agent: Agent }) {
	const agent = props.agent;
	const user = useStore($user);

	async function selectAlias(e: Event) {
		e.preventDefault();
		updateUser({
			agent: agent.name,
			allegiance: agent.allegiance.replace(' ', '').toLowerCase(),
		});
	}

	return (
		<li
			key={agent.name}
			title={`Select ${agent.versionname}`}
			onClick={selectAlias}
		>
			<img
				src={`https://res.cloudinary.com/dk3rdh3yo/image/upload/ar_1,c_crop,g_north_west,w_150,x_50,y_150,f_auto/v1697076582/cobradex/${agent.name}/v1/card.png`}
				alt={`${agent.versionname} roster card`}
			/>{' '}
			{agent.versionname}
		</li>
	);
}
