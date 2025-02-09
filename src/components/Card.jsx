export default function Card({ rotationAmount, name, image }) {
  return (
    <div
      className={`absolute top-[20%] left-[calc(50%-80px)] h-fit w-30 border-1 rounded-xl text-center bg-zinc-700  ${
        rotationAmount > 0 ? "-z-10" : "z-0"
      }`}
      style={{
        transform: `rotateY(${rotationAmount}deg) translateZ(200px)`,
        transformOrigin: "center center",
      }}
    >
      <h1>{name}</h1>
      <img src={image} alt="" className="rounded-xl" />
    </div>
  );
}
