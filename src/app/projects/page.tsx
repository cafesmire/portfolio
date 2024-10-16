import Carousel from "../components/ProjectCarousel";

export default function Projects() {
 return (
  <div className="flex flex-col w-screen h-screen">
    <div className="flex justify-center mt-10">
      <h1 className="text-6xl font-bold text-slate-200">Projects</h1>
    </div>
    <div className="absolute inset-0">
      <Carousel/>
    </div>
  </div>
 );
}
