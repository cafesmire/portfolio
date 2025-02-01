import Footer from './partials/Footer'
import Navigation from './partials/Navigation'

export default function About(){
  return(
    <main className='flex flex-col min-h-screen'>
      <Navigation/>
      <div className='flex-1'>
        About
      </div>
      <Footer/>
    </main>
  )
}