import { Link } from 'react-router-dom';
import { github } from '../../assets/icons';

export default function Footer() {
	return (
		<footer className="flex justify-evenly text-md bg-zinc-600">
			<p>cafesmire@gmail.com</p>
			<div className="border-2 rounded-full p-1">
				<Link to="https://github.com/cafesmire" target="_blank">
					<img src={github} alt="" className="invert size-4" />
				</Link>
			</div>
			<p>Chattanooga, TN</p>
		</footer>
	);
}
