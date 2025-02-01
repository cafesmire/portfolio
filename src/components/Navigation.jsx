import {useState} from 'react';
import menu from '../assets/images/menu.svg';
import home from '../assets/images/home.svg';
import github from '../assets/images/github.svg';

export default function Navigation({handleClick}) {

	return (
		<nav className="flex justify-between items-center p-3 bg-gray-700">
			<button className="cursor-pointer" onClick={handleClick}>
				<img src={menu} alt="" className="invert size-5" />
			</button>
			<h1>Navigation Bar</h1>
			<div>
				<div className='flex gap-3'>
					<a href="https://github.com/cafesmire" target='_blank'>
						<img src={github} alt="" className="invert size-5" />
					</a>
					<a href="/">
						<img src={home} alt="" className="invert size-5" />
					</a>
				</div>
			</div>

		</nav>
	);
}
