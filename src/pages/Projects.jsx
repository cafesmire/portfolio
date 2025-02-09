import { useState } from 'react';
import Card from '../components/Card';
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'

const images = [image1, image2, image3, image4];
const repoProjects = ['Flappy', 'Resume', 'Todo', 'Menu'];

export default function Projects() {
	const [projects, setProjects] = useState(repoProjects);
	const rotationAmount = repoProjects.map(
		(_, idx) => Math.floor(360 / repoProjects.length) * idx
	);
	

	return (
		<div className='flex flex-col flex-1'>
			{projects &&
				<div className='relative flex-1 perspective-distant'>
					{projects.map((item, idx) => {
						return <Card key={idx} name={item} rotationAmount={rotationAmount[idx]} image={images[idx]}/>
					})}
				</div>
			}
		</div>
	);
}
