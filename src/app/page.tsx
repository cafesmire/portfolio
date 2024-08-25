import Dropdown from "./dropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full text-xl flex items-center justify-between p-4 rounded-md border-b-2 border-b-slate-700 bg-gradient-to-b to-veryDarkPurple from-darkPurple">
      <nav>
        <Dropdown/>
      </nav>
      
      <div>
        <button>
          <img src='/github.svg' alt="Github" className='size-10 filter invert transition ease-in-out hover:scale-110 duration-300' />
        </button>
      </div>
      </header>

      {/*main content goes here */}
      <div className="h-screen w-screen flex bg-slate-800 items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-screen-lg">
        
        {/* Projects */}
        {/*Flappy Bird */}
        <div className='bg-lavender text-center p-4 sm:p-6 rounded-lg shadow-lg transition ease-in-out hover:scale-110 duration-300'>
            <div className="aspect-w-4 aspect-h-3">
              <img src="flappybird.png" alt="Flappybird" className="w-full h-full object-cover"/>
            </div>
            <h2 className="text-darkPurple font-bold text-xl mt-4">Flappy Bird</h2>
            <p className='text-veryDarkPurple mt-2'>OOP Game Design</p>
        </div>

        {/*Capstone*/}
        <div className='bg-lavender text-center p-4 sm:p-6 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className="aspect-w-4 aspect-h-3">
              <img src="brain.png" alt="Thumbnail" className="w-full h-full object-cover rounded-t-lg"/>
            </div>
            <h2 className="text-darkPurple font-bold text-xl mt-4">Parkinson's FOG Detection</h2>
            <p className='text-veryDarkPurple mt-2'>Health Science Deep Learning</p>
        </div>

        {/*Sentiment Analysis*/}
        <div className='bg-lavender text-center p-4 sm:p-6 rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1  hover:scale-110 duration-300'>
            <div className="aspect-w-4 aspect-h-3">
              <img src="NLP.png" alt="Thumbnail" className="w-full h-full object-cover rounded-t-lg"/>
            </div>
            <h2 className="text-darkPurple font-bold text-xl mt-4">Sentiment Analysis</h2>
            <p className='text-veryDarkPurple mt-2'>Emotions from Context</p>
        </div>

        </div>
      </div>


      <footer>

      </footer>
    </main>
  );
}
