import Card from './Card';

export default function Carousel({ projects }) {
	console.log(projects);

	return (
		<div className="relative flex-1 flex perspective-[3000px] bg-purple-950">
			<button cla>&lt;</button>
			{projects.map((item, idx) => {
				const rotation = Math.floor((360 / projects.length) * idx);
                const zIndex = (idx > 1 && idx < projects.length-1) ? -idx:idx
				return (
					<Card item={item} key={idx} rotation={rotation} zIndex={zIndex} />
				);
			})}
			<button>&gt;</button>
		</div>
	);
}
