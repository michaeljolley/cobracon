import { useEffect, useState } from 'preact/hooks';
import Authenticate from './Authenticate';
import { updateAllegiance } from '../stores/allegianceStore';
import './Welcome.css';

export default function Welcome(props: { code: string | null }) {
	const userId = atob(props.code || '');

	const [badge, setBadge] = useState<{
		url: string;
		allegiance: string;
		name: string;
	} | null>(null);

	if (userId) {
		useEffect(() => {
			fetch('/getBadgeUrl', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					uid: userId,
				}),
			}).then((res) => {
				if (res.ok) {
					res.json().then((userBadge) => {
						setBadge(userBadge);
						updateAllegiance(userBadge.allegiance);
						let ographImg = document.querySelector("meta[property='og:image']");
						let twitterOGImage = document.querySelector(
							"meta[property='twitter:image']"
						);
						twitterOGImage!.setAttribute('content', userBadge.url);
						ographImg!.setAttribute('content', userBadge.url);
					});
				}
			});
		}, [userId]);
	}

	return (
		<>
			<div class="welcome">
				<div class="badge">
					{badge && (
						<>
							<h2>
								{badge.name} joined
								{badge.allegiance === 'gijoe' ? ' GI Joe' : ' Cobra'}!
							</h2>
							<p>Will you join them?</p>
							<img src={badge.url} />
						</>
					)}
				</div>
				<div class="briefing">
					<h1>MISSION BRIEFING</h1>
					<p>Attention, recruit!</p>
					<p>
						The epic saga of G.I. Joe and Cobra continues, and now YOU are
						called to the frontline. To stand among these legends, you must
						first secure your virtual badge - a symbol of valor, resembling the
						iconic G.I. Joe index cards.
					</p>

					<h2>YOUR MISSION</h2>
					<ul>
						<li>
							<span class="code">1</span> Authenticate your identity using our
							encrypted channels: GitHub or Twitter.
						</li>
						<li>
							<span class="code">2</span> Upon successful verification, choose
							your allegiance.
						</li>
						<li>
							<span class="code">3</span> Your badge awaits, signaling your
							allegiance in this storied battle.
						</li>
					</ul>

					<h2>BEGIN AUTHENTICATION</h2>
					<p>
						Time is of the essence. Earn your badge, join the ranks, and let
						history remember your name!
					</p>

					<Authenticate />
				</div>
			</div>
		</>
	);
}
