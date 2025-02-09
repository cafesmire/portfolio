import Card from './Card';

export default function Carousel({ projects }) {
	console.log(projects);
	return <div className="relative flex-1 flex bg-purple-950">{projects.map((item, idx) => {
        return(<Card item={item} key={idx}/>)
    })}</div>;
}
