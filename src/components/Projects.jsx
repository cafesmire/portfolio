import Footer from './partials/Footer'
import Navigation from './partials/Navigation'

export default function Projects(){
  return(
    <main className='flex flex-col min-h-screen'>
      <Navigation/>
      <div className='flex-1'>
        Projects
      </div>
      <Footer/>
    </main>
  )
}