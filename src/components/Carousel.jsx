
import Card from './Card';

export default function Carousel({rotation, projects}) {

	return (
		<div className='absolute size-full'
				style={{
					transform:`rotateY(${rotation}deg)`,
					transformStyle:'preserve-3d',
					// transformOrigin:'center center',
					transition:'transform .3s ease-in-out'
				}}
		>
			{projects.map((project, idx) => {
				const cardRotation = (360/projects.length)*idx;
				return <Card key={idx} project={project} cardRotation={cardRotation}/>
			})}
		</div>
	)
}
