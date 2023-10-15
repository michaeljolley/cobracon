import { useStore } from '@nanostores/preact';
import { $user } from '../stores/userStore';
import './Badge.css';

export default function Badge() {
	const user = useStore($user);
	return (
		<div class="badge-container">
			<div class="badge">
				<img
					style="width:100%"
					src={`https://res.cloudinary.com/dk3rdh3yo/image/upload/l_fetch:${btoa(
						user?.imageUrl as string
					)},w_175,h_450,c_fill/fl_layer_apply,g_north_west,x_35,y_113/v1697076582/cobradex/${
						user?.agent || 'airborne'
					}/v1/card.png`}
				/>
			</div>
		</div>
	);
}
