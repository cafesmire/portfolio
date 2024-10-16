"use client";
import Link from "next/link";
import Image from "next/image";
import MessageCycle from "./components/MessageCycle";
import FlyInScroll from "./components/FlyInScroll";

export default function Home() {
  

  return (
    <main className="relative h-[350vh] w-screen flex flex-col">
      <MessageCycle />
      <FlyInScroll />
    </main>
  );
}