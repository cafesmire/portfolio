import { useContext } from 'react';
import Card from './Card';
import ProjectContext from '../context/ProjectContext';

export default function Carousel({ projects }) {
	const { rotation } = useContext(ProjectContext);
	return (
		<div
			className="absolute size-full"
			style={{
				transform: `rotateY(${rotation}deg)`,
				transformStyle: 'preserve-3d',
				// transformOrigin:'center center',
				transition: 'transform .3s ease-in-out',
			}}
		>
			{projects.map((project, idx) => {
				const cardRotation = (360 / projects.length) * idx;
				return (
					<Card
						key={idx}
						idx={idx}
						project={project}
						cardRotation={cardRotation}
					/>
				);
			})}
		</div>
	);
}
