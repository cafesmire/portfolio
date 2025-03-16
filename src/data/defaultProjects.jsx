import { github } from '../assets/icons';
import {rickMorty, image2, workoutJournal, resumeCreator, image4, image5} from '../assets/images'

const defaultProjects = [
  {name:'Rick & Morty Memory Game', thumbnail:rickMorty, details:'Game based on the popular Rick & Morty TV Series. The game begins by displaying ten cards for a player to select; after selecting a card, a shuffle begins, and the player can select again. The game continues until the player selects a card that has already been clicked.', github:'https://github.com/cafesmire/memory-game'},
  {name:'Workout Journal', thumbnail:workoutJournal, details:"A workout journal app designed for easy and efficient tracking of exercises, progress, and personal fitness goals. Focused on simplicity and natural responsiveness, it provides a streamlined way to log workouts without unnecessary clutter.", github:'https://github.com/cafesmire/workout-journal'},
  {name:'Resume-Creator', thumbnail:resumeCreator, details:"A simple and intuitive resume builder that helps users create professional resumes with ease. Designed for efficiency, it streamlines the process of structuring and formatting resumes. Built with a focus on clean UI and usability.", github:'https://github.com/cafesmire/resume_maker'},
  {name:'To-do List', thumbnail:image2, details:'A minimal and efficient to-do list app for managing daily tasks with ease. Designed for simplicity, it helps users stay organized without distractions, making task tracking effortless.' ,github:'https://github.com/cafesmire/todo-app'},
  {name:'Bender\'s Stash', thumbnail:image4, details:"An inventory management app themed around Bender’s collection of 'acquired' goods. Built for quick item tracking with a focus on usability and a fun, Futurama-inspired touch.", github:'https://github.com/cafesmire/benders-stash'},
  {name:'Weather App', thumbnail:image5, details:"A sleek and simple weather app that provides real-time forecasts with a clean, user-friendly interface. Designed for quick access to essential weather details without unnecessary clutter.", github:'https://github.com/cafesmire/weather-app'},
]

export default defaultProjects;