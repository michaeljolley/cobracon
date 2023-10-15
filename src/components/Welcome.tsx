import Authenticate from './Authenticate';

export default function Welcome() {
	return (
		<>
			<h1>MISSION BRIEFING</h1>
			<p>Attention, recruit!</p>
			<p>
				The epic saga of G.I. Joe and Cobra continues, and now YOU are called to
				the frontline. To stand among these legends, you must first secure your
				virtual badge - a symbol of valor, resembling the iconic G.I. Joe index
				cards.
			</p>

			<h2>YOUR MISSION</h2>
			<ul>
				<li>
					<span class="code">1</span> Authenticate your identity using our
					encrypted channels: GitHub or Twitter.
				</li>
				<li>
					<span class="code">2</span> Upon successful verification, choose your
					allegiance.
				</li>
				<li>
					<span class="code">3</span> Your badge awaits, signaling your
					allegiance in this storied battle.
				</li>
			</ul>

			<h2>BEGIN AUTHENTICATION</h2>
			<p>
				Time is of the essence. Earn your badge, join the ranks, and let history
				remember your name!
			</p>

			<Authenticate />
		</>
	);
}
