import { useEffect, useState } from 'preact/hooks';
import { $user } from '../stores/userStore';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	'https://wsoiqltmfzjoqxysfilv.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzb2lxbHRtZnpqb3F4eXNmaWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNjkzODUsImV4cCI6MjAxMjY0NTM4NX0.WQS3Z_sTYHtvuuAapA12xAVhGo4qrTVFOskRuKWTGfU'
);

export default function Roster() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		getRoster();
	}, []);

	async function getRoster() {
		const { data } = await supabase.from('roster_v1').select();
		setRoster(data as []);
	}

	let user = $user.get();

	$user.subscribe((updatedUser) => {
		user = updatedUser;
	});

	return (
		<>
			<section class="alias">
				<h3>Choose an Alias</h3>
				<div class="roster">
					<div class="gijoe">
						{roster.map((agent) => (
							<li key={agent.name}>{agent.name}</li>
						))}
					</div>
					<div class="cobra"></div>
				</div>
			</section>
		</>
	);
}
