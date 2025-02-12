import {rickMorty, image2, workoutJournal, resumeCreator, image4, image5} from '../assets/images'

const defaultProjects = [
  {name:'Rick & Morty Memory Game', thumbnail:rickMorty, details:'Game based on the popular Rick & Morty TV Series. The game begins by displaying ten cards for a player to select; after selecting a card, a shuffle begins, and the player can select again. The game continues until the player selects a card that has already been clicked.'},
  {name:'Workout Journal', thumbnail:workoutJournal},
  {name:'Resume-Creator', thumbnail:resumeCreator},
  {name:'To-do List', thumbnail:image2},
  {name:'Shopping Cart', thumbnail:image4},
  {name:'Social Media Clone', thumbnail:image5},
]

export default defaultProjects;